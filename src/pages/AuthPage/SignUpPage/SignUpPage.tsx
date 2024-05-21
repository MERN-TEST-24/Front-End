import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useHTTP } from '../../../hooks/http.hook'
import { useState, FormEvent } from 'react'
import { signUpStyles } from './signUP.styles'

export default function SignUp() {
  const { loading, request } = useHTTP()

  const [upForm, setUpForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const changeUpForm = (event: { target: { name: string; value: string } }) => {
    setUpForm({ ...upForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const data = await request('/api/auth/register', 'POST', { ...upForm })
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
      <Box sx={signUpStyles.container}>
        <Avatar sx={signUpStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box
          component='form'
          noValidate
          onSubmit={handleSubmitWrapper}
          sx={signUpStyles.form}
        >
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <TextField
                autoComplete='given-name'
                autoFocus
                fullWidth
                id='firstName'
                label='First Name'
                name='firstName'
                onChange={changeUpForm}
                required
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                autoComplete='family-name'
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                onChange={changeUpForm}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete='email'
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                onChange={changeUpForm}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete='new-password'
                fullWidth
                id='password'
                label='Password'
                name='password'
                onChange={changeUpForm}
                required
                type='password'
              />
            </Grid>
          </Grid>
          <Button
            disabled={loading}
            fullWidth
            sx={signUpStyles.submitButton}
            type='submit'
            variant='contained'
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
