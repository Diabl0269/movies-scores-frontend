import React from 'react'
import LoginForm from '../forms/Login'
import Page from '../templates/Page'
import d from '../../data/dictionary'
import { Container } from '@material-ui/core'

export default () => {
  const Content = () => (
    <Container id="loginPageContentContainer">
      <LoginForm />
    </Container>
  )

  return <Page Content={Content} title={d('loginPageTitle')} />
}
