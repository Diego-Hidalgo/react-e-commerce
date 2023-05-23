import { Box, Card, CardContent, Grid, TextField, Typography, Stack, Button, CardActions } from '@mui/material';
import React from 'react';

export const Login = ({ onLogin }) => {

  const collectData = () => {
    return {
      email : document.getElementById("email").value,
      password : document.getElementById("password").value
    };
  }

  return(
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
        <Card sx={{padding: 5, width: 300, height: 370, border: 1}} variant='outlined' elevation={5}>
          <CardContent>
              <Typography gutterBottom variant="h5">
                  Inicio de Sesión
              </Typography>
              <TextField sx={{paddingBottom: 2}} id="email" type="email" label="Correo" variant="outlined" />
              <TextField sx={{paddingBottom: 2}} id="password" type="password" label="contraseña" variant="outlined" />
          </CardContent>
          <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Stack alignContent={'center'} direction={'row'}>
              <Button sx={{height: 50}} onClick={() => onLogin(collectData())} variant="contained">
                Iniciar Sesión
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
};