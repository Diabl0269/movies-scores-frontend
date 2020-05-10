import React, { useEffect } from 'react'
import { useMovies } from '../../../../context/MoviesProvider'
import Score from './Score'
import Query from './Query'
import Name from './Name'
import Form from '../../../templates/Form'
import SearchAndResetButtons from '../SearchAndResetButtons'

export default () => {
  const { type, getMovies, query } = useMovies()

  const submitHandler = (values) => {
    console.log(values)
    getMovies(values)
  }

  useEffect(() => {console.log(query)}, [query])

  const Fields = () => {
    switch (type) {
      case 'query':
        return <Query />

      case 'name':
        return <Name />

      case 'score':
        return <Score />

      default:
        throw 'Must have a "type" which will be query/name/score'
    }
  }

  return (
    <Form
      Fields={Fields}
      onSubmit={submitHandler}
      Buttons={SearchAndResetButtons}
      initialValues={query}
    />
  )
}
