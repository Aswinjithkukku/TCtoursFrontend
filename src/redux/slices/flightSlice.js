import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  tripType: "oneWay",
  travellers: { adult: 1, children: 0, infant: 0 },
  flightsData: [
    {
      cityFrom: "",
      cityTo: "",
      departureDate: "",
      returnDate: "",
    },
  ],
  row: {
    cityFrom: "",
    cityTo: "",
    departureDate: "",
    returnDate: "",
  },
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setTripType: (state, { payload }) => {
      state.tripType = payload;
    },
    addFlightRow: (state, action) => {
      state.flightsData = [
        ...state.flightsData,
        {
          ...state.row,
          cityFrom: state.flightsData[state.flightsData.length - 1]?.cityTo,
        },
      ];
    },
    removeFlightRow: (state, action) => {
      const prevRows = [...state.flightsData];
      if (action.payload.index === "notMultiCity") {
        state.flightsData = [prevRows[0]];
      } else {
        prevRows.splice(action.payload.index, 1);
        state.flightsData = prevRows;
      }
    },
    handleTravellersChange: (state, { payload }) => {
      state.travellers = payload.data;
    },

    handleFlightDeatilsChange: (state, { payload }) => {
      const currentData = [...state.flightsData];
      const { name, value, index } = payload;
      currentData[index] = { ...currentData[index], [name]: value };

      if (
        state.tripType === "multiCity" &&
        index < state.flightsData?.length - 1 &&
        name === "cityTo"
      ) {
        currentData[index + 1] = { ...currentData[index + 1], cityFrom: value };
      }
      console.log(currentData);
      state.flightsData = currentData;
    },
  },
  // extraReducers: {
  //   [fetchVisas.fulfilled]: (state, action) => {
  //     state.visa = action.payload;
  //     state.loading = false;
  //   },
  // },
});

export const {
  setTripType,
  addFlightRow,
  removeFlightRow,
  handleTravellersChange,
  handleFlightDeatilsChange,
} = flightSlice.actions;

export default flightSlice.reducer;
