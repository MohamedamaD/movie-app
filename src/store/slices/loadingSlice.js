import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoad: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoad } =  loadingSlice.actions;
export default loadingSlice.reducer;
