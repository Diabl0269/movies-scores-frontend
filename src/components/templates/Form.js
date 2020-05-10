import React from 'react'
import { Formik, Form } from 'formik'
import { FormGroup } from '@material-ui/core'

export default ({ initialValues = {}, onSubmit, Fields, Buttons }) => {
  return (
    <div id="formTemplate">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <FormGroup id="formGroupTemplate">
            <Fields />
            <Buttons />
          </FormGroup>
        </Form>
      </Formik>
    </div>
  )
}
