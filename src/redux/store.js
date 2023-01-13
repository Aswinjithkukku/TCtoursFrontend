import { configureStore } from "@reduxjs/toolkit";
import {
    blogReducer,
    // currencyReducer,
    excursionReducer,
    generalReducer,
    homeReducer,
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
        // currency: currencyReducer,
    },
    devTools: true,
});

export default store;
