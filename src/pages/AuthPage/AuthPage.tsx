// AuthPage.tsx

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { authPageStyles } from './Auth.styles'

const AuthPage = () => {
  const navigate = useNavigate()

  const handleSignInClick = () => {
    navigate('/sign-in')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  return (
    <Container component='main' maxWidth='sm'>
      <Box sx={authPageStyles.container}>
        <LockOutlinedIcon sx={authPageStyles.icon} />
        <Typography
          component='h1'
          gutterBottom
          sx={authPageStyles.title}
          variant='h4'
        >
          Welcome to App
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button
            onClick={handleSignInClick}
            sx={authPageStyles.signInButton}
            variant='contained'
          >
            Sign In
          </Button>
          <Button
            onClick={handleSignUpClick}
            sx={authPageStyles.signUpButton}
            variant='contained'
          >
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}

export default AuthPage
