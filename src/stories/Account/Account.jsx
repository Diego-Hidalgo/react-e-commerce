import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Stack, CardActions, Button, Typography} from '@mui/material';
import { ItemsTable } from '../ItemsTable/ItemsTable';

export const Account = ({username, onRegisterBook, onDeleteBooks, books}) => {

  const [toDelete, setToDelete] = useState([]);

  const changeToDelete = (newsToDelete) => {
    setToDelete(newsToDelete);
  };

  const collectData = () => {
    const data = {
      image : document.getElementById("url").value,
      name : document.getElementById("name").value,
      price : document.getElementById("price").value
    };
    document.getElementById("url").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    return data;
  }

  return(
    <Box sx={{ flexGrow: 1, padding: 5, alignItems: 'center', justifyContent: 'center'}}>
      <Typography gutterBottom variant="h4">
        Hola {username}, desde aquí gestionas los libros
      </Typography>
      <Card sx={{padding: 2, height: 200, border: 1, margin: 2}} variant='outlined'>
        <CardContent>
            <TextField sx={{margin: 2}} label='URL-Imagen' id='url' variant='standard' required />
            <TextField sx={{margin: 2}} label='Nombre' id='name' variant='standard' required />
            <TextField sx={{margin: 2}} label='Precio' id='price' variant='standard' required />
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Stack alignContent={'center'} direction={'row'}>
            <Button sx={{height: 50}} variant="contained" onClick={() => onRegisterBook(collectData())}>
              Registrar Libro
            </Button>
          </Stack>
        </CardActions>
      </Card>
      <Card sx={{padding: 2, border: 1, margin: 2}} variant='outlined'>
        <CardContent >
            <ItemsTable books={books} changeToDelete={changeToDelete} />
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Stack alignContent={'center'} direction={'row'}>
            <Button sx={{height: 50}} variant="contained" color='error' onClick={() => onDeleteBooks(toDelete)}>
              Eliminar Seleccionados
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Box>
  );
};