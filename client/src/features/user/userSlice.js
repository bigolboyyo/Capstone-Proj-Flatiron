import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: false,
    username: false,
    active_character: false,
  },
  reducers: {
    setUser: (state, userData) => {
      localStorage.setItem("user_data", userData.payload);
      const data = JSON.parse(userData.payload);
      state.id = data.id;
      state.username = data.username;
    },
    setUserCharacters: (state, character) => {
      localStorage.clear();
      state.active_character = character.payload;
      localStorage.setItem(
        "user_data",
        JSON.stringify({
          id: state.id,
          username: state.username,
          active_character: state.active_character,
        })
      );
    },
  },
});

export const { setUser, setUserCharacters } = userSlice.actions;
export default userSlice.reducer;
