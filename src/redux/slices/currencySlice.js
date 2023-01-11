import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import axios from "../../axios";

const initialState = {
    currency: localStorage.getItem("currency") || "",
};


const currencySlice = createSlice({
    name: "currrency",
    initialState,
    reducers: {
        setCurrency: (state, action) => {
            state.currency = action.payload;

            localStorage.setItem("currency", action.payload);
        },
    },
});

// export {  };

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
