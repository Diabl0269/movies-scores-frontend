import React from 'react'
import { Container } from '@material-ui/core'
import QueryTypeSelector from './QueryTypeSelector'
import FieldsSwitch from './form/fields/FieldsSwitch'

export default () => {
  return (
    <Container id="filtersContainer">
      <QueryTypeSelector />
      <FieldsSwitch />
    </Container>
  )
}
