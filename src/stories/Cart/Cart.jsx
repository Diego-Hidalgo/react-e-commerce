import { Box, Stack, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { CartItem } from '../CartItem/CartItem';


const CartHasItems = ({items, total, onRemoveFromCart, onBuyCart}) => {
  return(
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Stack sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography gutterBottom variant="h4" component="div" textAlign='center'>
          Total: $ {total}
        </Typography>
      </Stack>
      <Stack sx={{padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant='contained' sx={{width: 600}} color='success' onClick={() => onBuyCart()}>
            Comprar carrito
        </Button>
      </Stack>
      <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} container spacing={{ xs: 1, md: 1 }} >
        {Array.from(items).map((item, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <CartItem index={index+1} item={item} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Stack>
    </Box>
  );
};

const CartIsEmpty = () => {
  return (
    <Typography gutterBottom variant='h1' component='div'>
      El carrito está vacío
    </Typography>
  );
};

export const Cart = ({items, total, onRemoveFromCart, onBuyCart}) => {
  return(
    <div>
      {items.length>0? <CartHasItems items={items} total={total} onRemoveFromCart={onRemoveFromCart} onBuyCart={onBuyCart}/> : <CartIsEmpty />}
    </div>
  );
};