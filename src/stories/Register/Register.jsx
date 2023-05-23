import { Box, Card, CardContent, Grid, TextField, Typography, Stack, Button, CardActions } from '@mui/material';
import React from 'react';

export const Register = ({ onRegister }) => {

  const collectData = () => {
    return {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      password : document.getElementById("password").value
    };
  }

  return(
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
        <Card sx={{padding: 5, width: 300, height: 455, border: 1}} variant='outlined'>
          <CardContent>
              <Typography gutterBottom variant="h5">
                  Registro
              </Typography>
              <TextField sx={{paddingBottom: 2}} id="name" type="text" label="Nombre" variant="outlined" />
              <TextField sx={{paddingBottom: 2}} id="email" type="email" label="Correo" variant="outlined" />
              <TextField sx={{paddingBottom: 2}}id="password" type="password" label="contraseña" variant="outlined" />
              <TextField id="confirm" type="password" label="Confirmar Contraseña" variant="outlined" />
          </CardContent>
          <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Stack alignContent={'center'} direction={'row'}>
              <Button sx={{height: 50}} onClick={() => onRegister(collectData())} variant="contained">
                Registrarse
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
};