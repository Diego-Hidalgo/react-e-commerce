import React from 'react';
import { Typography } from '@mui/material';


export const BookDescription = ({book}) => {
  return(
    <div style={{padding: 10}}>
      <Typography gutterBottom variant="h4">
        {book.name}
      </Typography>
    </div>
  );
};