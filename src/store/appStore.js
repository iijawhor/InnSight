import { configureStore } from "@reduxjs/toolkit";
import searchResultSlice from "./searchResultSlice";
export const appStore = configureStore({
  reducer: {
    searchResult: searchResultSlice
  }
});
