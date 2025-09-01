import { configureStore } from "@reduxjs/toolkit";
import { RootApi } from "./services/RootApi";

export const store = configureStore({
  reducer: {
    [RootApi.reducerPath]: RootApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RootApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
