import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DisplayedItem } from '../DisplayedItem/DisplayedItem';
import { Typography } from '@mui/material';

const ThereAreNoBooks = ({}) => {
  return(
    <Box sx={{ flexGrow: 1, padding: 5}}>
      <Typography sx={{height: 50}} gutterBottom variant="h1" component="div" textAlign={'center'}>
          Aún no hay libros
      </Typography>
    </Box>
  );
};

const ThereAreBooks = ({books, onAddToCart, onSelectedBook}) => {
  return(
    <Box sx={{ flexGrow: 1, padding: 5}}>
      <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} container spacing={{ xs: 1, md: 1 }} columns={{ xs: 3, sm: 4, md: 12 }}>
        {Array.from(books).map((book, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <DisplayedItem book={book} onAddToCart={onAddToCart} onSelectedBook={onSelectedBook}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export const ItemsGrid = ({books, onAddToCart, onSelectedBook, ...props}) => {
  return(
    <div>
      {books.length>0? <ThereAreBooks books={books} onAddToCart={onAddToCart} onSelectedBook={onSelectedBook} /> : <ThereAreNoBooks />}
    </div>
  );
};