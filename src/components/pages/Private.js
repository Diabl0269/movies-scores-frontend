import React from 'react'
import { useUser } from '../../context/AuthUserProvider'
import { navigate } from 'hookrouter'
import LoginPage from './Login'

export default ({ Page }) => {
  const { user } = useUser()
  const userExists = user && !Object.keys(user).length !== 0 && user.constructor === Object

  if (!userExists) {
    navigate('/login')
    return <LoginPage />
  }

  return <Page />
}
