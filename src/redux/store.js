import { configureStore } from "@reduxjs/toolkit";
import {
  agentExcursionReducer,
  agentReducer,
  blogReducer,
  excursionReducer,
  generalReducer,
  homeReducer,
  markupReducer,
  paymentReducer,
  resellerReducer,
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
    markups: markupReducer,
    resellers: resellerReducer,
    agentExcursions: agentExcursionReducer,
  },
  devTools: true,
});

export default store;
