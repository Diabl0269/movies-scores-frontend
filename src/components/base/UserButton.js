import React from 'react'
import { Button } from '@material-ui/core'
import { useUser } from '../../context/AuthUserProvider'
import d from '../../data/dictionary'
import { navigate } from 'hookrouter'

export default () => {
  const { user } = useUser()
  const userExists = user && Object.keys(user).length > 0 && user.constructor === Object
  const { logout } = useUser()

  return !userExists ? (
    <Button color="inherit" onClick={() => navigate('/login')}>
      {d('login')}
    </Button>
  ) : (
    <Button color="inherit" onClick={logout}>
      {d('logout')}
    </Button>
  )
}
