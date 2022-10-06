import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateChoices = createAsyncThunk(
  "option/setCurrentChoices",
  async (opt) => {
    const r = await fetch(`/options/${opt.id}`);
    const result = await r.json();
    localStorage.setItem("active_option", JSON.stringify(opt));
    localStorage.setItem("active_choices", JSON.stringify(result));
    return result;
  }
);

export const optionSlice = createSlice({
  name: "option",
  initialState: {
    id: false,
    option_storyline_id: false,
    current_choices: [],
  },
  reducers: {
    setOptionStoryLine: (state, payload) => {
      state.option_storyline_id = payload.payload;
    },
    setCurrentChoices: (state, choices) => {
      state.current_choices = choices.payload;
    },
  },
  extraReducers: {
    [updateChoices.fulfilled]: (state, action) => {
      state.current_choices = action.payload.choices;
    },
  },
});

export const { setOptionStoryLine, setCurrentChoices } = optionSlice.actions;
export default optionSlice.reducer;
