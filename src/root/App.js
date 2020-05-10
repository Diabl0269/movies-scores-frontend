import React from 'react'
import { AuthUserProvider } from '../context/AuthUserProvider'
import routes from '../routes/routes'
import { useRoutes } from 'hookrouter'

export default () => {
  const router = useRoutes(routes)

  return <AuthUserProvider>{router}</AuthUserProvider>
}
