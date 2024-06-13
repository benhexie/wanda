import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  showOverlay: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showOverlay: (state, action: PayloadAction<boolean>) => {
      return { ...state, showOverlay: action.payload };
    },
  },
});

export const { showOverlay } = appSlice.actions;
export default appSlice.reducer;
