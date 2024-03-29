import React, { useState } from 'react'
import Form from '../templates/Form'
import d from '../../data/dictionary'
import handleFormikChange from '../../utils/handleFormikChange'
import { Container, TextField, Typography, Button } from '@material-ui/core'
import { navigate } from 'hookrouter'
import { useFormikContext } from 'formik'
import { useUser } from '../../context/AuthUserProvider'

export default () => {
  const { signUp } = useUser()

  const [errorMessage, setErrorMessage] = useState(false)

  const submitHandler = async (values, e) => {
    const status = await signUp(values)

    if (!status) return navigate('/account')

    switch (status) {
      case 400:
        setErrorMessage(d('detailsError'))
        break
      case 409:
        setErrorMessage(d('emailError'))
        break
      case 500:
        setErrorMessage(d('serverError'))
        break
      default:
        alert('Unkown error has occurred, please try again later')
    }
  }

  const Fields = () => {
    const { setFieldValue } = useFormikContext()

    const handleChange = (e) => {
      handleFormikChange(setFieldValue, e)
    }

    return (
      <Container id="signUpFieldsContainer">
        <Typography id="errorMessageContainer">{errorMessage}</Typography>
        <>
          <Typography>{`${d('firstName')}: `}</Typography>
          <TextField name="firstName" onChange={handleChange} />
        </>
        <>
          <Typography>{`${d('lastName')}: `}</Typography>
          <TextField name="lastName" onChange={handleChange} />
        </>
        <>
          <Typography>{`${d('email')}: `}</Typography>
          <TextField name="email" onChange={handleChange} />
        </>
        <>
          <Typography>{`${d('password')}: `}</Typography>
          <TextField name="password" type="password" onChange={handleChange} />
        </>
      </Container>
    )
  }

  const SignUpButton = () => (
    <Button type="submit" id="signUpButton">
      {d('signUp')}
    </Button>
  )

  return <Form Fields={Fields} Buttons={SignUpButton} onSubmit={submitHandler} />
}
