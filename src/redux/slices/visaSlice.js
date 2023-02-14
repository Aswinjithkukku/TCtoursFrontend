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
      contactNo: "",
      passportNo: "",
      passportExpiry: {
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
  imageRows: [
    {
      passportFistPagePhoto: "",
      passportLastPagePhoto: "",
      passportSizePhoto: "",
      supportiveDoc1: "",
      supportiveDoc2: "",
    },
  ],
  visa: [],
  visaApplyResponse: {},
};

export const fetchVisas = createAsyncThunk(
  "visaSlice/fetchVisas",
  async (args, { getState }) => {
    const { token } = getState().agents;
    const response = await axios.get(`/b2b/visa/list/${args}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

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
      ];
      state.imageRows = [
        {
          passportFistPagePhoto: "",
          passportLastPagePhoto: "",
          passportSizePhoto: "",
          supportiveDoc1: "",
          supportiveDoc2: "",
        },
      ];

      for (let i = 1; i < Number(state.visaEnquiry?.traveller); i++) {
        state.rows.push({
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
        });

        state.imageRows.push({
          passportFistPagePhoto: "",
          passportLastPagePhoto: "",
          passportSizePhoto: "",
          supportiveDoc1: "",
          supportiveDoc2: "",
        });
      }
    },
    b2bhandleRowItemChange: (state, action) => {
      state.rows[action.payload.index][action.payload.name] =
        action.payload.value;
    },
    b2bhandleDOBChange: (state, action) => {
      state.rows[action.payload.index].dateOfBirth[action.payload.name] =
        action.payload.value;
    },
    b2bhandleExpiryChange: (state, action) => {
      state.rows[action.payload.index].expiryDate[action.payload.name] =
        action.payload.value;
    },
    setVisaEnquiry: (state, action) => {
      state.visaEnquiry = JSON.parse(localStorage.getItem("visaEnquiry"));
    },
    setVisaResponseData: (state, action) => {
      state.visaApplyResponse = action.payload?.visaApplication;
    },
  },
  extraReducers: {
    [fetchVisas.fulfilled]: (state, action) => {
      state.visa = action.payload;
      state.loading = false;
    },
  },
});

export const {
  addRows,
  b2bhandleRowItemChange,
  setVisaEnquiry,
  b2bhandleDOBChange,
  setVisaResponseData,
  b2bhandleExpiryChange,
} = visaSlice.actions;

export default visaSlice.reducer;
