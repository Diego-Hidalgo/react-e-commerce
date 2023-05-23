import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Stack } from '@mui/material';

const IsLogged = ({username, onLogOut}) => {
  return(
    <Box sx={{ flexGrow: 1, alignItems:'center', justifyContent:'right', display: { xs: 'none', md: 'flex' } }}>
      <Link style={{textDecoration: 'none'}} to='/account'>
        <Button variant='contained' sx={{mx:2, my: 2, color: 'white', display: 'block', border: 1}}>
          {username}
        </Button>
      </Link>
      <Link style={{textDecoration: 'none'}} to='/'>
        <Button onClick={() => onLogOut()} variant='contained' sx={{mx:2, my: 2, color: 'white', display: 'block', border: 1}}>
          Salir
        </Button>
      </Link>
    </Box>
  );
};

const IsNotLogged = () => {
  return(
    <Box sx={{ flexGrow: 1, alignItems:'center', justifyContent:'right', display: { xs: 'none', md: 'flex' } }}>
      <Link style={{textDecoration: 'none'}} to='/register'>
        <Button variant='contained' sx={{mx:2 ,my: 2, color: 'white', display: 'block', border: 1}}>
            Registrarse
        </Button>
      </Link>
      <Link style={{textDecoration: 'none'}} to='/login'>
        <Button variant='contained' sx={{mx:2, my: 2, color: 'white', display: 'block', border: 1}}>
          Iniciar Sesión
        </Button>
      </Link>
    </Box>
  );
};

export const Banner = ({user, cartLength, onLogOut, ...props}) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuBookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
          <Link style={{textDecoration: 'none'}} to='/'>
            <Button variant='contained' sx={{mx:2, my: 2, color: 'white', display: 'block', border: 1}}>
              ALEJANDRIA
            </Button>
          </Link>
          {
            user? < IsLogged username={user.email} onLogOut={onLogOut} /> : < IsNotLogged />
          }
          <Link style={{textDecoration: 'none'}} to='/cart'>
            <Stack alignContent={'center'} direction={'row'}>
              <Button sx={{mx:2, border:1 }} variant="contained" startIcon={<ShoppingCartIcon />}>
                {cartLength}
              </Button>
            </Stack>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};