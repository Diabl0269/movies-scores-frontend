import React from 'react'
import { Container, Typography } from '@material-ui/core'
import Form from '../templates/Form'
import Fields from './form/fields/QueryFields'
import { useMovies } from '../../context/MoviesProvider'
import SearchAndResetButtons from './form/SearchAndResetButtons'
import d from '../../data/dictionary'

export default () => {
  const { getMovies, queryDefault } = useMovies()

  const submitHandler = async (values) => {
    await getMovies(values)
  }

  return (
    <Container id="filtersContainer">
      <Typography>{d('searchOptions')}</Typography>
      <Form
        Fields={Fields}
        onSubmit={submitHandler}
        Buttons={SearchAndResetButtons}
        initialValues={queryDefault}
      />
    </Container>
  )
}
