import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: false,
    username: false,
    active_character: false,
    active_story: false,
    current_storyline: false,
    all_stories: false,
  },
  reducers: {
    setUser: (state, userData) => {
      localStorage.setItem("user_data", userData.payload);
      const data = JSON.parse(userData.payload);
      state.id = data.id;
      state.username = data.username;
    },
    grabAllStories: (state, stories) => {
      state.all_stories = stories.payload;
      localStorage.setItem("stories", JSON.stringify(state.all_stories));
    },
    setActiveCharacter: (state, character) => {
      //localStorage.clear();
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
    setActiveStory: (state, story) => {
      const data = JSON.parse(localStorage.getItem("user_data"));
      state.active_story = story.payload;
      localStorage.setItem(
        "user_data",
        JSON.stringify({
          ...data,
          active_story: state.active_story,
        })
      );
    },
    setActiveStoryLine: (state, activeStory) => {
      const current = parseInt(activeStory.payload);
      const data = JSON.parse(localStorage.getItem("user_data"));
      state.current_storyline = current;
      localStorage.setItem(
        "user_data",
        JSON.stringify({
          ...data,
          current_storyline: state.current_storyline,
        })
      );
    },
    // setAllActive: (state, active) => {

    // }
  },
});

export const {
  setUser,
  grabAllStories,
  setActiveCharacter,
  setActiveStory,
  setActiveStoryLine,
} = userSlice.actions;
export default userSlice.reducer;
