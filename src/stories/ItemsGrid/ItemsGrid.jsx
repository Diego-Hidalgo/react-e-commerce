import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DisplayedItem } from '../DisplayedItem/DisplayedItem';
import { Typography } from '@mui/material';

const ThereAreNoBooks = ({}) => {
  return(
    <Box sx={{ flexGrow: 1, padding: 5}}>
      <Typography sx={{height: 50}} gutterBottom variant="subtitle2" component="div" textAlign={'center'}>
          Aún no hay libros
      </Typography>
    </Box>
  );
};

const ThereAreBooks = ({books}) => {
  return(
    <Box sx={{ flexGrow: 1, padding: 5}}>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 3, sm: 4, md: 12 }}>
        {Array.from(books).map((book, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <DisplayedItem id={book.id} title={book.title} price={book.price} image={book.image}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export const ItemsGrid = ({books, ...props}) => {
  return(
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }} container spacing={{ xs: 1, md: 1 }} columns={{ xs: 3, sm: 4, md: 12 }}>
        {Array.from(books).map((book, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <DisplayedItem id={book.id} title={book.title} price={book.price} image={book.image}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};