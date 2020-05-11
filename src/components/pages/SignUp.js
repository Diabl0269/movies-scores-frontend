import React from 'react'
import SignUpForm from '../forms/SignUp';
import Page from '../templates/Page'
import d from '../../data/dictionary'
import { Container } from '@material-ui/core'

export default () => {
  const Content = () => (
    <Container id="signUpPageConetentContainer">
      <SignUpForm />
    </Container>
  )

  return <Page Content={Content} title={d('signUpPageTitle')} />
}
