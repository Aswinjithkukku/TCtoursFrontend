import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripType: "oneway",
  travellerDetails: [
    {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      contactNo: "",
      passportNo: "",
      expiryDate: {
        day: "",
        month: "",
        year: "",
      },
      dateOfBirth: {
        day: "",
        month: "",
        year: "",
      },
    },
  ],
  travellers: { adult: 1, children: 0, infant: 0 },
  selectedFlight: {},
  selectedAddOns: {
    seats: [],
    meal: [],
    luggage: [],
  },
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
    handleAddDetailsRows: (state, { payload }) => {
      const totalTravellers =
        state.travellers.adult + state.travellers.children;
      const row = state.travellerDetails[0];
      const detailsRows = [row];
      if (totalTravellers > 1) {
        for (let i = 1; i < totalTravellers; i++) {
          detailsRows.push(row);
        }
      }
      state.travellerDetails = detailsRows;
    },
    handleTravellerRowChange: (state, { payload }) => {
      const prev = state.travellerDetails[payload?.index];

      prev[payload?.value?.name] = payload?.value?.value;

      state.travellerDetails[payload?.index] = prev;
    },
    handleTravellerRowDobChange: (state, { payload }) => {
      const prev = state.travellerDetails[payload?.index];

      prev.dateOfBirth[payload?.value?.name] = payload?.value?.value;

      state.travellerDetails[payload?.index] = prev;
    },
    handleTravellerRowExpiryChange: (state, { payload }) => {
      const prev = state.travellerDetails[payload?.index];

      prev.expiryDate[payload?.value?.name] = payload?.value?.value;

      state.travellerDetails[payload?.index] = prev;
    },

    handleFlightDeatilsChange: (state, { payload }) => {
      const currentData = [...state.flightsData];
      const { name, value, index } = payload;
      currentData[index] = { ...currentData[index], [name]: value };

      if (
        state.tripType === "multicity" &&
        index < state.flightsData?.length - 1 &&
        name === "cityTo"
      ) {
        currentData[index + 1] = { ...currentData[index + 1], cityFrom: value };
      }
      console.log(currentData);
      state.flightsData = currentData;
    },
    handleRescentSearchCardClick: (state, { payload }) => {
      state.flightsData = payload?.flightsData;
      state.travellers = payload?.travellers;
      state.tripType = payload?.tripType;
    },
    setSelectedFlight: (state, { payload }) => {
      state.selectedFlight = payload;
    },
    handleFlightAddOnsChange: (state, { payload }) => {
      state.selectedAddOns = {
        ...state.selectedAddOns,
        [payload.name]: [
          ...state.selectedAddOns?.[payload?.name],
          payload?.value,
        ],
      };
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
  handleFlightAddOnsChange,
  handleTravellerRowChange,
  handleTravellerRowDobChange,
  handleTravellerRowExpiryChange,
  setSelectedFlight,
  handleRescentSearchCardClick,
} = flightSlice.actions;

export default flightSlice.reducer;
