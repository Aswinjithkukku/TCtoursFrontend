import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
    loading: false,
    Home: {},
    topAttractions: [],
    bestSellingAttractions: [],
    recentBlogs: [],
    countries: [],
};


// get all data for home
export const getHome = createAsyncThunk(
    "general/getHome",
    async (args, { getState }) => {
        const response = await axios.get(`/home`);
        return response.data;
    }
);
// get all countries 
export const getAllCountries = createAsyncThunk(
    "general/getAllCountries",
    async (_, { getState }) => {
        const response = await axios.get("/countries/all");
        return response.data;
    }
);

const generalSlice = createSlice({
    name: "general",
    initialState,
    extraReducers: {
        [getHome.pending]: (state, action) => {
            state.loading = true;
        },
        [getHome.fulfilled]: (state, action) => {
            state.loading = false;
            state.home = action.payload?.home;
            state.topAttractions = action.payload?.topAttractions;
            state.bestSellingAttractions =
                action.payload?.bestSellingAttractions;
            state.recentBlogs = action?.payload?.recentBlogs
        },
        [getAllCountries.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllCountries.fulfilled]: (state, action) => {
            state.countries = action.payload;
        },
    },
});

export default generalSlice.reducer;
