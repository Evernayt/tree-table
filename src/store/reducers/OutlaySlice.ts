import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOutlayTreeResponse } from "../../models/Outlay/IOutlayTreeResponse";

type OutlayState = {
  outlays: IOutlayTreeResponse[];
};

const initialState: OutlayState = {
  outlays: [],
};

const addToParent = (
  outlays: IOutlayTreeResponse[],
  parentId: number,
  outlay: IOutlayTreeResponse
) => {
  outlays.map((parentOutlay) =>
    parentOutlay.id === parentId
      ? parentOutlay.child.push(outlay)
      : addToParent(parentOutlay.child, parentId, outlay)
  );
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
      action: PayloadAction<{ parentId: number; outlay: IOutlayTreeResponse }>
    ) {
      addToParent(
        state.outlays,
        action.payload.parentId,
        action.payload.outlay
      );
    },
  },
});

export const { setOutlaysAction, addOutlayAction } = outlaySlice.actions;

export default outlaySlice.reducer;
