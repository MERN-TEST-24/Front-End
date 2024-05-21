import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useHTTP } from '../../../hooks/http.hook'
import { useState, FormEvent } from 'react'
import { signInStyles } from './signIn.styles'

export default function SignIn() {
  const { loading, request } = useHTTP()

  const [inForm, setInForm] = useState({
    email: '',
    password: ''
  })

  const changeInForm = (event: { target: { name: string; value: string } }) => {
    setInForm({ ...inForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const data = await request('/api/auth/login', 'POST', { ...inForm })
      console.log(data)
    } catch (err) {
      console.error('An error occurred:', err)
    }
  }

  const handleSubmitWrapper = (event: FormEvent<HTMLFormElement>): void => {
    handleSubmit(event).catch((err) => console.error('An error occurred:', err))
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box sx={signInStyles.container}>
        <Avatar sx={signInStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box
          component='form'
          noValidate
          onSubmit={handleSubmitWrapper}
          sx={signInStyles.form}
        >
          <TextField
            autoComplete='email'
            autoFocus
            fullWidth
            id='email'
            label='Email Address'
            margin='normal'
            name='email'
            onChange={changeInForm}
            required
          />
          <TextField
            autoComplete='current-password'
            fullWidth
            id='password'
            label='Password'
            margin='normal'
            name='password'
            onChange={changeInForm}
            required
            type='password'
          />
          <FormControlLabel
            control={<Checkbox color='primary' value='remember' />}
            label='Remember me'
          />
          <Button
            disabled={loading}
            fullWidth
            sx={signInStyles.submitButton}
            type='submit'
            variant='contained'
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
