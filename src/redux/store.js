import { configureStore } from "@reduxjs/toolkit";
import {
    blogReducer,
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
    },
    devTools: true,
});

export default store;
