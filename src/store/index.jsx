import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./home";

export const store = configureStore({
  reducer: {
    home: HomeReducer,
  },
});
