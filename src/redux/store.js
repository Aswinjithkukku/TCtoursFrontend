import { configureStore } from "@reduxjs/toolkit";
import {
  agentReducer,
  blogReducer,
  excursionReducer,
  generalReducer,
  homeReducer,
  markupReducer,
  paymentReducer,
  usersReducer,
} from "./slices";

const store = configureStore({
  reducer: {
    excursion: excursionReducer,
    general: generalReducer,
    payment: paymentReducer,
    users: usersReducer,
    home: homeReducer,
    blog: blogReducer,
    agents: agentReducer,
    markups: markupReducer
  },
  devTools: true,
});

export default store;
