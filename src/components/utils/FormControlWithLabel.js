import React from 'react'
import { FormControl, InputLabel } from '@material-ui/core'

export default ({ labelText, formControlId = '', Component }) => (
  <FormControl id={formControlId}>
    <InputLabel>{labelText}</InputLabel>
    <Component />
  </FormControl>
)
