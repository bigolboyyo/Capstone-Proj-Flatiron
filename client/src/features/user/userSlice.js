import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: false,
    username: false,
    characters: [],
  },
  reducers: {
    setUser: (state, userData) => {
      localStorage.setItem("user_data", userData.payload);
      const data = JSON.parse(userData.payload);
      state.id = data.id;
      state.username = data.username;
    },
    setUserCharacters: () => {},
  },
});

export const { setUser, setUserCharacters } = userSlice.actions;
export default userSlice.reducer;
