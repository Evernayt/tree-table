import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOutlayTreeResponse } from "../../models/Outlay/IOutlayTreeResponse";

type OutlayState = {
  outlays: IOutlayTreeResponse[];
};

const initialState: OutlayState = {
  outlays: [],
};

export const outlaySlice = createSlice({
  name: "outlay",
  initialState,
  reducers: {
    setOutlaysAction(state, action: PayloadAction<IOutlayTreeResponse[]>) {
      state.outlays = action.payload;
    },
  },
});

export const { setOutlaysAction } = outlaySlice.actions;

export default outlaySlice.reducer;
