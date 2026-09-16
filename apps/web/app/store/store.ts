import { configureStore } from "@reduxjs/toolkit";
import destinationsReducer from "./destinationsSlice";
import commentsReducer from "./commentsSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    destinations: destinationsReducer,
    comments: commentsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
