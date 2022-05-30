import { GridCellParams, GridRowId, GridSelectionModel, MuiEvent } from "@mui/x-data-grid";
import { KeyboardEvent } from "react";
import { BasicGridType } from "types/BasicGridType";

export const useBasicGridHelpers = () => {
    
    const onCellKeyDownHandler = (params:GridCellParams, events:MuiEvent<KeyboardEvent<HTMLElement>>, data:BasicGridType[]) => {
        var currentIndex = params.id;
        var rowIdx:GridRowId = 1;

        switch(events.keyCode) {
            case 40: //ArrowDown
                rowIdx = currentIndex < data.length ? parseInt(params.getValue(params.id, 'id')) + 1 : currentIndex;
                // get next params
                setSelectedModel([data.filter( x => x.id === rowIdx)[0]?.id] as GridSelectionModel);
                break;
            case 38: //ArrowUp
                rowIdx = currentIndex > 1 ? parseInt(params.getValue(params.id, 'id')) - 1 : 1;
                setSelectedModel([data.filter( x => x.id === rowIdx)[0].id] as GridSelectionModel);
                break;
        }
        
    }

    return {
        onCellKeyDownHandler
    }
}