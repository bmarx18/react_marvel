import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'power_abilities',
      headerName: 'Powers',
      width: 150,
      editable: true,
    },
    {
      field: 'height',
      headerName: 'Height',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'movies',
      headerName: 'Movies',
      width: 150,
      editable: true,
    },
    {
      field: 'comics',
      headerName: 'Comics',
      width: 150,
      editable: true,
    },
    {
      field: 'allies',
      headerName: 'Allies',
      width: 150,
      editable: true,
    },
    {
      field: 'enemies',
      headerName: 'Enemies',
      width: 150,
      editable: true,
    },
    {
      field: 'groups',
      headerName: 'Groups',
      width: 150,
      editable: true,
    },
    {
      field: 'lifeStatus',
      headerName: 'Living or Decease',
      width: 150,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
const rows = [
    { id: 1, lastName: 'Maximoff', firstName: 'Wanda', power_abilities: 'Telekensis', 
  height: 1.70, movies: "Captain America The Winter Soldier", comics: "Nada", allies: "Vision",
  enemies: "Ultron", groups: "Avengers", lifeStatus: "Alive"},
    { id: 2, lastName: 'Raomanova', firstName: 'Natasha', power_abilities: 'superhuman strength', 
    height: 1.64, movies: "Captain America The Winter Soldier", comics: "Finely Woven Thread", allies: "Hawkeye",
    enemies: "Thanos", groups: "Avengers", lifeStatus: "Debatable" },
  ];


export const DataTable = () => {
    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Assembled Avengers</h2>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }
