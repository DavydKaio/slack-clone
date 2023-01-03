import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
  status: "idle",
};

export const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.rooId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
