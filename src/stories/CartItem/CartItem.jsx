import { Card, Stack, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import React from 'react';

export const CartItem = ({index, item, onRemoveFromCart}) => {
  return(
    <Card sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 3, border: 1, width: 600, height: 250}}>
      <Stack  justifyContent='center' direction='row' alignItems='center'>
        <CardContent sx={{width:100}} style={{fontSize: 50}}>
          {index}
        </CardContent>
        <CardMedia sx={{width: 100, height: 180, objectFit: 'contain'}} component="img" image={item.image} alt={item.title}/>
        <CardContent sx={{width: 150}}>
          <Typography gutterBottom variant="h6" component="div" textAlign='center'>
              {item.name}
            </Typography>
        </CardContent>
        <CardContent>
          <Typography sx={{width: 80, height: 50}} gutterBottom variant="h5" component="div" textAlign='center'>
            ${item.price}
          </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Stack alignContent={'center'}>
            <Button sx={{height: 50}} variant="contained" onClick={() => onRemoveFromCart(item.id)} color='error'>
              Remover
            </Button>
          </Stack>
        </CardActions>
      </Stack>
    </Card>
  );
};