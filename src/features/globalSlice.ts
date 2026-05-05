import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
  location: {
    lat: string | null;
    lng: string | null;
  };
}

const initialState: GlobalState = {
  location: { lat: null, lng: null },
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setGeoLocation: (
      state,
      action: PayloadAction<{ lat: number; lng: number }>,
    ) => {
      state.location.lat = String(action.payload.lat);
      state.location.lng = String(action.payload.lng);
    },
  },
});

export const { setGeoLocation } = globalSlice.actions;
export default globalSlice.reducer;
