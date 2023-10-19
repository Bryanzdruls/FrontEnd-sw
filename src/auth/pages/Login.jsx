import * as React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Typography, Grid, Box, Paper, Link, TextField, CssBaseline, Button, Avatar} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';
import { Copyright } from './Copyright';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useEffect } from 'react';

const formData = {
    email:'',
    password: ''
  }

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const Login= ()=> {
    const { errorMessage, startLogin } = useAuthStore();
    const {email, password, onInputChange: onLoginInputChange} = useForm(formData);
    
    


    const onLoginSubmit = (event) => {
      event.preventDefault();
      startLogin({email, password});
    }
    
    useEffect(() => {
      if( errorMessage !== undefined) {
        Swal.fire('Error en la autenticacion', errorMessage, 'error')
      }

    }, [errorMessage])
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={onLoginInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={onLoginInputChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={onLoginSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default Login;