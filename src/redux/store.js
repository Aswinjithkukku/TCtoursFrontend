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
  visaReducer,
  walletReducer,
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
    wallet: walletReducer,
    visa: visaReducer,
  },
  devTools: true,
});

export default store;
