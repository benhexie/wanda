import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";

const store = configureStore({
  reducer: combineReducers({
    user: userSlice,
  }),
});

export default store;
