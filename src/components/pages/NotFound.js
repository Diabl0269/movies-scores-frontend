import React from 'react'
import Page from '../templates/Page'
import { Container, Typography } from '@material-ui/core'
import d from '../../data/dictionary'
import { A } from 'hookrouter'

const Content = () => {
  const messageTitle = window.innerWidth < 600 ? 'pageNotFoundMobile' : 'pageNotFound'
  const message = d(messageTitle)

  const mainPageText = d('mainPage')
  const splitedMessage = message.split(mainPageText)

  const NotFoundMessage = () => (
    <Typography id="textContainer" variant="h6">
      {splitedMessage[0]}
      <A href="/">{mainPageText}</A>
      {splitedMessage[1]}
    </Typography>
  )

  return (
    <Container id="pageNotFoundContentContainer">
      <NotFoundMessage />
    </Container>
  )
}

export default () => <Page title={d('pageNotFoundTitle')} Content={Content} />
