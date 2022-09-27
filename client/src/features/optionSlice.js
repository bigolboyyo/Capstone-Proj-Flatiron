import { createSlice } from "@reduxjs/toolkit";

export const optionSlice = createSlice({
  name: "option",
  initialState: {
    id: false,
    option_storyline_id: false,
  },
  reducers: {
    setOptionStoryLine: (state, payload) => {
      state.option_storyline_id = payload.payload;
    },
  },
});

export const { setOptionStoryLine } = optionSlice.actions;
export default optionSlice.reducer;
