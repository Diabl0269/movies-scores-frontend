import React from 'react'
import { Button } from '@material-ui/core'
import d from '../../../data/dictionary'
import { useFormikContext } from 'formik'

export default () => {
  const { submitForm, resetForm } = useFormikContext()

  return (
    <>
      <Button onClick={submitForm}> {d('search')} </Button>
      <Button onClick={resetForm}> {d('reset')} </Button>
    </>
  )
}
