import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const UAE_FLAG =
  "https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/ae.svg";

const initialState = {
  loading: false,
  currencies: [],
  destinations: [],
  countries: [],
  searchQuery: [],
  visaCountries: [],
  selectedCurrency: {
    isocode: "AED",
    conversionRate: 1,
    flag: UAE_FLAG,
  },
};

// get all data for home
export const getInitialData = createAsyncThunk(
  "homeSlice/getInitialData",
  async (args, { getState }) => {
    const response = await axios.get(`/home/initial-data`);
    return response.data;
  }
);
export const getInitialVisaCountryList = createAsyncThunk(
  "homeSlice/getInitialVisaCountryList",
  async (args, { getState }) => {
    const response = await axios.get(`/b2b/visa/country/all`);

    return response.data;
  }
);
export const getSearchQuery = createAsyncThunk(
  "homeSlice/getSearchQuery",
  async (args, { getState }) => {
    const response = await axios.get(`/search/list?search=${args}`);

    return response.data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.selectedCurrency = {
        isocode: action.payload?.isocode,
        conversionRate: action.payload?.conversionRate,
        flag: action.payload?.flag,
      };
      localStorage.setItem("currency", JSON.stringify(state.selectedCurrency));
    },
  },
  extraReducers: {
    [getInitialData.pending]: (state, action) => {
      state.loading = true;
    },
    [getInitialData.fulfilled]: (state, action) => {
      state.countries = action.payload?.countries;
      state.destinations = action.payload?.destinations;
      state.currencies = action.payload?.currencies;

      const localCurrency = localStorage.getItem("currency")
        ? JSON.parse(localStorage.getItem("currency"))
        : "";
      if (localCurrency) {
        const objIndex = state.currencies?.findIndex((currency) => {
          return (
            currency?.isocode?.toUpperCase() ===
            localCurrency?.isocode?.toUpperCase()
          );
        });
        if (objIndex !== -1) {
          state.selectedCurrency = {
            isocode: state.currencies[objIndex]?.isocode,
            conversionRate: state.currencies[objIndex]?.conversionRate,
            flag: state.currencies[objIndex]?.country?.flag,
          };
        } else {
          state.selectedCurrency = {
            isocode: "AED",
            conversionRate: 1,
            flag: UAE_FLAG,
          };
        }
      } else {
        state.selectedCurrency = {
          isocode: "AED",
          conversionRate: 1,
          flag: UAE_FLAG,
        };
      }
      state.loading = false;
    },
    [getInitialVisaCountryList.pending]: (state, action) => {
      state.loading = true;
    },
    [getInitialVisaCountryList.fulfilled]: (state, action) => {
      state.visaCountries = action.payload;
      state.loading = false;
    },
    [getSearchQuery.fulfilled]: (state, action) => {
      state.searchQuery = action.payload;
      state.loading = false;
    },
  },
});

export const { changeCurrency } = homeSlice.actions;

export default homeSlice.reducer;
