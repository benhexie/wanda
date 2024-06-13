import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import appSlice from "./slices/app.slice";

const store = configureStore({
  reducer: combineReducers({
    app: appSlice,
    user: userSlice,
  }),
});

export default store;
