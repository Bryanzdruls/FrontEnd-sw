import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import {TextField, } from '@mui/material/';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';
import { Copyright } from '../../auth/pages/Copyright';
import Swal from 'sweetalert2';
import { useEffect } from 'react';





// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const formData = {
  nombre: '',
  apellido: '',
  email: '',
  fecNac: undefined,
  password: '',
  password2: '',
  CargoId: 0,
  emailCred: '',
}
const CrearUsuario = ()=> {
  const { errorMessage, crearUsuarioHandle } = useAuthStore();
  const {nombre, apellido,email,fecNac,password,
    password2,CargoId,emailCred, onInputChange} = useForm(formData);

  const onCrearUsuario = (event)=>{
    event.preventDefault();
    if (password !== password2) {
      Swal.fire('Error Creacion de Usuario', 'Contraseñas no son iguales', 'error')
      return
    } 


    crearUsuarioHandle({nombre, apellido,email,fecNac,password,CargoId,emailCred});
  }
  useEffect(() => {
    if( errorMessage !== undefined) {
      Swal.fire('Todo se realizo correctamente', errorMessage, 'success')
    }

  }, [errorMessage])
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crear Nuevos Usuarios
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nombre"
                  required
                  fullWidth
                  id="nombre"
                  label="First Name"
                  autoFocus
                  value={nombre}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="apellido"
                  label="Last Name"
                  name="apellido"
                  value={apellido}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={onInputChange}
                />
              </Grid>    
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="CargoId"
                  label="Cargo"
                  type="text"
                  id="CargoId"
                  autoComplete="CargoId"
                  value={CargoId}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Repite la contraseña"
                  type="password"
                  id="password2"
                  autoComplete="new-password2"
                  value={password2}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="emailCred"
                  label="Email Credenciales"
                  type="emailCred"
                  id="emailCred"
                  autoComplete="emailCred"
                  value={emailCred}
                  onChange={onInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onCrearUsuario}
            >
              Crear
            </Button>
            <Grid container justifyContent="flex-end">

            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
export default CrearUsuario;