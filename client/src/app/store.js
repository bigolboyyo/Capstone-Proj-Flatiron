import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import optionReducer from "../features/optionSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    option: optionReducer,
  },
});
