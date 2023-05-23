import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export const ItemsTable = ({books, changeToDelete}) => {

  const columns = [
        { field: 'name', headerName: 'Nombre', width: 150},
        { field: 'price', headerName: 'Precio', type: 'number', width: 120}
  ];

  return(
    <Box sx={{ flexGrow: 1, padding: 5, alignItems: 'center', justifyContent: 'center'}}>
      <DataGrid
        sx={{alignItems:'center', justifyContent:'center', boxShadow:2, border:2}}
        rows={books}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        checkboxSelection
        onRowSelectionModelChange={(itms) => changeToDelete(itms)}
      />
    </Box>
  );

};