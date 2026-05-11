import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/services/authApi";
import { mockApi } from "@/services/mockApi";
import { rekomendasiApi } from "@/services/rekomendasiApi";
import profileReducer from "@/slice/profileSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    [authApi.reducerPath]: authApi.reducer,
    [mockApi.reducerPath]: mockApi.reducer,
    [rekomendasiApi.reducerPath]: rekomendasiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      mockApi.middleware,
      rekomendasiApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
