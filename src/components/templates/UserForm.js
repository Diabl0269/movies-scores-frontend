import React, { useState } from 'react'
import Form from '../templates/Form'
import Page from '../templates/Page'
import d from '../../data/dictionary'
import handleFormikChange from '../../utils/handleFormikChange'
import { Container, TextField, Typography, Button } from '@material-ui/core'
import { navigate } from 'hookrouter'
import { useFormikContext } from 'formik'
import { useUser } from '../../context/AuthUserProvider'

export default () => {
  const {
    user: {
      userDetails: { firstName, lastName, email }
    },
    updateUser
  } = useUser()

  const [errorMessage, setErrorMessage] = useState(false)

  const submitHandler = async (values) => {
    const status = await updateUser(values)

    if (!status) return navigate('/account')

    switch (status) {
      case 400:
        setErrorMessage(d('detailsError'))
        break
      case 409:
        setErrorMessage(d('emailError'))
        break
      case 500:
        setErrorMessage(d('serverError'))
        break
      default:
        alert('Unkown error has occurred, please try again later')
    }
  }

  const Fields = () => {
    const { setFieldValue } = useFormikContext()

    const handleChange = (e) => {
      handleFormikChange(setFieldValue, e)
    }

    return (
      <Container id="accountFieldsContainer">
        {errorMessage}
        <>
          <Typography>{`${d('firstName')}: `}</Typography>
          <TextField name="firstName" defaultValue={firstName} onChange={handleChange} />
        </>
        <>
          <Typography>{`${d('lastName')}: `}</Typography>
          <TextField name="lastName" defaultValue={lastName} onChange={handleChange} />
        </>
        <>
          <Typography>{`${d('email')}: `}</Typography>
          <TextField name="email" defaultValue={email} onChange={handleChange} />
        </>
      </Container>
    )
  }

  const UpdateButton = () => (
    <Button type="submit" id="updateButton">
      {d('update')}
    </Button>
  )

  const Content = () => (
    <Container id="accountUpdatePageContainer">
      <Form
        Fields={Fields}
        Buttons={UpdateButton}
        onSubmit={submitHandler}
        initialValues={{ firstName, lastName, email }}
      />
    </Container>
  )

  return <Page title={d('accountUpdatePageTitle')} Content={Content} />
}
