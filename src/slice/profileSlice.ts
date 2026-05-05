import { ProfileResponse } from "@/types/profile";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  data: ProfileResponse | null;
}

const initialState: ProfileState = {
  data: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileResponse>) => {
      state.data = action.payload;
    },
    clearProfile: (state) => {
      state.data = null;
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
