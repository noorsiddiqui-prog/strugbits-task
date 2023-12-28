// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { customerSlice } from "./features/Customers/service";

export const store = configureStore({
  reducer: {
    [customerSlice.reducerPath]: customerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customerSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
