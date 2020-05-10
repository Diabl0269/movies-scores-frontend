import React, { useState } from 'react'
import Form from '../templates/Form'
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Typography
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import d from '../../data/dictionary'
import { Field } from 'formik'
import { useUser } from '../../context/AuthUserProvider'
import { navigate } from 'hookrouter'

export default () => {
  const { login } = useUser()

  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  const submitHandler = async (values) => {
    const { data, status } = await login(values)
    if (!data) {
      if (status === 401) return setErrorMessage(d('userDosentExist'))
      return setErrorMessage(d('serverError'))
    }
    navigate('/')
  }

  const EmailField = ({ field }) => <TextField {...field} variant="outlined" label={d('email')} />
  const PasswordField = ({ field }) => (
    <FormControl variant="outlined">
      <InputLabel>{d('password')}</InputLabel>
      <OutlinedInput
        {...field}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
    </FormControl>
  )

  const Fields = () => (
    <div id="fields">
      {errorMessage && <Typography id="errorMessage">{errorMessage}</Typography>}
      <Field component={EmailField} name="email" />
      <Field component={PasswordField} name="password" />
    </div>
  )

  const Buttons = () => (
    <div id='buttonsContainer'>
      <Button type="submit">
        {d('login')}
      </Button>
      <Button onClick={() => navigate('/sign-up')}>
        {d('signUp')}
      </Button>
    </div>
  )

  return (
    <Form
      Fields={Fields}
      Buttons={Buttons}
      onSubmit={submitHandler}
      initialValues={{ email: '', password: '' }}
    />
  )
}
