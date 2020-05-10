import React from 'react'
import Filters from '../filters/Filters'
import MoviesRecordsList from '../recordsList/RecordsList'
import Page from '../templates/Page'
import { Container } from '@material-ui/core'
import { MoviesProvider } from '../../context/MoviesProvider'
import d from '../../data/dictionary'

const Content = () => {
  return (
    <Container id="mainPageContentContainer">
      <MoviesProvider>
        <Filters />
        <MoviesRecordsList />
      </MoviesProvider>
    </Container>
  )
}

export default () => {
  return <Page Content={Content} title={d('mainPageTitle')} />
}
