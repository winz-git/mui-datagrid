import React,{KeyboardEvent} from 'react';
import { DataGrid, GridCallbackDetails, GridCellParams, GridColDef, gridColumnVisibilityModelSelector, GridEvents, GridRowId, GridSelectionModel, GridValueGetterParams, MuiEvent } from '@mui/x-data-grid';
import { useState } from 'react';

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
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
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
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function BasicGrid() {
    const [selectedModel, setSelectedModel]  = useState<GridSelectionModel>();
    const onSelectionModelChange = (selectionModel: GridSelectionModel, details: GridCallbackDetails)  => {
        setSelectedModel(selectionModel);
        
    }

    const onCellKeyDownHandler = (params:GridCellParams, events:MuiEvent<KeyboardEvent<HTMLElement>>) => {
        var currentIndex = params.id;
        var rowIdx:GridRowId = 1;

        switch(events.keyCode) {
            case 40: //ArrowDown
                rowIdx = currentIndex < rows.length ? parseInt(params.getValue(params.id, 'id')) + 1 : currentIndex;
                // get next params
                setSelectedModel([rows.filter( x => x.id === rowIdx)[0]?.id] as GridSelectionModel);
                break;
            case 38: //ArrowUp
                rowIdx = currentIndex > 1 ? parseInt(params.getValue(params.id, 'id')) - 1 : 1;
                setSelectedModel([rows.filter( x => x.id === rowIdx)[0].id] as GridSelectionModel);
                break;
        }
        
    }

    return (
        <div style={{ height: 640, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            onSelectionModelChange={onSelectionModelChange}
            selectionModel={selectedModel}
            onCellKeyDown={(params:GridCellParams, events:MuiEvent<KeyboardEvent<HTMLElement>>)=>onCellKeyDownHandler{params, events,rows}}
        />
        </div>
    );
}
