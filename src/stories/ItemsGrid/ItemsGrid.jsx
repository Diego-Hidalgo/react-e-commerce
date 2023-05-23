import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DisplayedItem } from '../DisplayedItem/DisplayedItem';

export const ItemsGrid = ({books, ...props}) => {
  return(
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 3, sm: 4, md: 12 }}>
        {Array.from(books).map((book, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <DisplayedItem id={book.id} title={book.title} price={book.price} image={book.image}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}