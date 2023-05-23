import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Grid, Button, Stack, Paper } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const DisplayedItem = ({id, title, price, image, addToCart, ...props}) => {
  return (
    <Card sx={{ padding: 1, width: 230, height: 370 }} itemID={id} variant="outlined" elevation={5}>
      <CardMedia sx={{height: 180, objectFit: 'contain'}} component="img" image={image} alt={title}/>
      <CardContent >
        <Typography gutterBottom variant="subtitle2" component="div" textAlign={'center'}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack alignContent={'center'} direction={'row'}>
          <Button sx={{height: 50}} onClick={addToCart} variant="contained" endIcon={<ShoppingCartIcon />}>
            Agregar al carrito
          </Button>
        </Stack>
      </CardActions>
    </Card>
  )
}