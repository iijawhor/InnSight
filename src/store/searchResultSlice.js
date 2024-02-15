import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResults: []
};

export const searchResultSlice = createSlice({
  name: "searchResultSlice",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.searchResults = action.payload;
    }
  },
  prepareAction: (payload) => ({ payload })
});
export const { setSearchData } = searchResultSlice.actions;
export default searchResultSlice.reducer;
