import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';

const IsLogged = ({username, onLogOut}) => {
  return(
    <Box sx={{ flexGrow: 1, alignItems:'center', justifyContent:'right', display: { xs: 'none', md: 'flex' } }}>
      <Link style={{textDecoration: 'none'}} to='/cart'>
        <Button variant='contained' sx={{mx:2 ,my: 2, color: 'white', display: 'block', border: 1}}>
            Carrito
        </Button>
      </Link>
      <Link style={{textDecoration: 'none'}} to='/account'>
        <Button variant='contained' sx={{mx:2, my: 2, color: 'white', display: 'block', border: 1}}>
          {username}
        </Button>
      </Link>
      <Link style={{textDecoration: 'none'}} to='/'>
        <Button onClick={onLogOut} variant='contained' sx={{mx:2, my: 2, color: 'white', display: 'block', border: 1}}>
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

export const Banner = ({user, onLogOut, ...props}) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuBookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ALEJANDRIA
          </Typography>
          {
            user? < IsLogged username={user.username} onLogOut={onLogOut} /> : < IsNotLogged />
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};