import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Stack } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export const DisplayedItem = ({book, onAddToCart, onSelectedBook, ...props}) => {
  return (
    <Card sx={{ padding: 1, width: 230, height: 370, border: 1}} itemID={book.id} variant="outlined" elevation={5}>
      <Link style={{textDecoration: 'none'}} to={'/book/'+book.id} onClick={() => onSelectedBook(book)}>
        <CardMedia sx={{height: 180, objectFit: 'contain'}} component="img" image={book.image} alt={book.title}/>
      </Link>
      <CardContent sx={{height: 100}}>
        <Typography sx={{height: 50}} gutterBottom variant="subtitle2" component="div" textAlign={'center'}>
          {book.name}
        </Typography>
        <Typography sx={{height: 50}} gutterBottom variant="h4" component="div" textAlign={'center'}>
          ${book.price}
        </Typography>
      </CardContent>
      <CardActions sx={{padding:2}}>
        <Stack alignContent={'center'} direction={'row'}>
          <Button sx={{height: 30, padding: 3, fontSize: 12}} onClick={() => onAddToCart(book)} variant="contained" endIcon={<ShoppingCartIcon />}>
            Agregar al carrito
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};