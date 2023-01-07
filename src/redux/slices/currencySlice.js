import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import axios from "../../axios";

const initialState = {
    currency: '',
    localCurrency: localStorage.getItem("currency") || "",
};


const currencySlice = createSlice({
    name: "currrency",
    initialState,
    reducers: {
        setCurrency: (state, action) => {
            state.currency = action.payload;
            state.localCurrency = action.payload;

            localStorage.setItem("currency", action.payload);
        },
        fetchCurrency: (state, action) => {
          
        }
    },
});

// export {  };

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
