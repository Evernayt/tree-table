import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOutlayTreeResponse } from "../../models/Outlay/IOutlayTreeResponse";
import traverse from "traverse";
import filterTree from "../../helpers/filterTree";

type OutlayState = {
  outlays: IOutlayTreeResponse[];
  selectedRowId: number | null;
};

const initialState: OutlayState = {
  outlays: [],
  selectedRowId: null,
};

export const outlaySlice = createSlice({
  name: "outlay",
  initialState,
  reducers: {
    setOutlaysAction(state, action: PayloadAction<IOutlayTreeResponse[]>) {
      state.outlays = action.payload;
    },
    addOutlayAction(
      state,
      action: PayloadAction<{
        parentId: number | null;
        outlay: IOutlayTreeResponse;
      }>
    ) {
      if (action.payload.parentId) {
        traverse(state.outlays).map((parentOutlay: IOutlayTreeResponse) =>
          parentOutlay.id === action.payload.parentId
            ? parentOutlay.child.push(action.payload.outlay)
            : parentOutlay
        );
      } else {
        state.outlays.push(action.payload.outlay);
      }
    },
    setSelectedRowIdAction(state, action: PayloadAction<number | null>) {
      state.selectedRowId = action.payload;
    },
    editOutlayAction(state, action: PayloadAction<IOutlayTreeResponse>) {
      const editedOutlays = traverse(state.outlays).map(
        (outlay: IOutlayTreeResponse) =>
          outlay.id === action.payload.id ? action.payload : outlay
      );
      state.outlays = editedOutlays;
    },
    deleteOutlayAction(state, action: PayloadAction<number>) {
      const filteredOutlays = filterTree(state.outlays, action.payload);
      state.outlays = filteredOutlays;
    },
  },
});

export const {
  setOutlaysAction,
  addOutlayAction,
  setSelectedRowIdAction,
  editOutlayAction,
  deleteOutlayAction,
} = outlaySlice.actions;

export default outlaySlice.reducer;
