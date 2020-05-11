import React, { useState } from 'react'
import Page from '../templates/Page'
import d from '../../data/dictionary'
import {
  Container,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import { useUser } from '../../context/AuthUserProvider'
import { navigate } from 'hookrouter'

export default () => {
  const {
    user: { userDetails: { firstName, lastName, email } = {} },
    deleteUser
  } = useUser()

  const [open, setOpen] = useState(false)
  const [serverError, setServerError] = useState(false)

  const handleClose = () => {
    setServerError(false)
    setOpen(false)
  }

  const handleDelete = async () => {
    const status = await deleteUser()
    if (status === 500) return setServerError(true)
    navigate('/')
  }

  const Content = () => (
    <Container id="accountPage">
      <Typography variant="h4" id="title">
        {d('management')}
      </Typography>
      <div id="detailsContainer">
        <Typography>{`${d('firstName')}: ${firstName}`}</Typography>
        <Typography>{`${d('lastName')}: ${lastName}`}</Typography>
        <Typography>{`${d('email')}: ${email}`}</Typography>
      </div>
      <div id="buttonsContainer">
        <Button id="updateButton" onClick={() => navigate('/account/update')}>
          {d('update')}
        </Button>
        <Button id="deleteButton" onClick={() => setOpen(!open)}>
          {d('delete')}
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{d('deleteUser')}</DialogTitle>
          <DialogContent>
            {serverError && (
              <Typography id="deleteUserServerErrorMessageContainer">{d('serverError')}</Typography>
            )}
            <DialogContentText>{d('deleteUserDialogText')}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>{d('cancel')}</Button>
            <Button onClick={handleDelete} autoFocus>
              {d('delete')}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  )

  return <Page title={d('account')} Content={Content} />
}
