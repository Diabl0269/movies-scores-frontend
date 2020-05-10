import React from 'react'
import { useFormikContext } from 'formik'
import { TextField } from '@material-ui/core'
import handleFormikChange from '../../../../utils/handleFormikChange'

export default () => {
  const { setFieldValue } = useFormikContext()

  const handleChange = (e) => {
    handleFormikChange(setFieldValue, e)
  }

  return (
    <>
      <TextField name="name" onChange={handleChange} />
    </>
  )
}
