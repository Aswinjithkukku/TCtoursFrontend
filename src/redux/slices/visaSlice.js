import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  visaLoading: false,
  visaEnquiry:
    (localStorage.getItem("visaEnquiry") &&
      JSON.parse(localStorage.getItem("visaEnquiry"))) ||
    {},
  rows: [
    {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      contactNumber: "",
      passportNumber: "",
      day: "",
      month: "",
      year: "",
    },
  ],
};

// export const getWalletBalance = createAsyncThunk(
//    visaSlice/getWalletBalance",
//   async (args, { getState }) => {
//     const { token } = getState().agents
//     if( token ) {

//       const response = await axios.get(`/b2b/transactions/balance`, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       }
//     );
//       return response.data;
//     } else {
//       throw Error("cant find Wallet balance");
//     }
//   }
// );

const visaSlice = createSlice({
  name: "visa",
  initialState,
  reducers: {
    addRows: (state, action) => {
      state.rows = [
        {
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          contactNumber: "",
          passportNumber: "",
          day: "",
          month: "",
          year: "",
        },
      ];

      const sum =
        Number(state.visaEnquiry?.adult) + Number(state.visaEnquiry?.children);

      for (let i = 1; i < sum; i++) {
        state.rows.push({
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          contactNumber: "",
          passportNumber: "",
          day: "",
          month: "",
          year: "",
        });
      }
    },
    handleRowItemChange: (state, action) => {
      state.rows[action.payload.index][action.payload.name] =
        action.payload.value;
    },
    setVisaEnquiry: (state, action) => {
      state.visaEnquiry = JSON.parse(localStorage.getItem("visaEnquiry"));
    },
  },
  // extraReducers: {
  // [getWalletBalance.pending]: (state, action) => {
  //   state.loading = true;
  // },
  // },
});

export const { addRows, handleRowItemChange, setVisaEnquiry } =
  visaSlice.actions;

export default visaSlice.reducer;
