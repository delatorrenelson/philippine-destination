import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DestinationsState {
  searchQuery: string;
  selectedCategory: string;
  bookmarkedIds: string[];
}

const initialState: DestinationsState = {
  searchQuery: "",
  selectedCategory: "All Stories",
  bookmarkedIds: [],
};

export const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    toggleBookmark: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.bookmarkedIds.includes(id)) {
        state.bookmarkedIds = state.bookmarkedIds.filter((item) => item !== id);
      } else {
        state.bookmarkedIds.push(id);
      }
    },
  },
});

export const { setSearchQuery, setSelectedCategory, toggleBookmark } =
  destinationsSlice.actions;

export default destinationsSlice.reducer;
