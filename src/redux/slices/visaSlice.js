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
      dateOfBirth: {
        day: "",
        month: "",
        year: "",
      },
    },
  ],
  imageRows: [{}],
  visa: [],
};

export const fetchVisas = createAsyncThunk(
  "visaSlice/fetchVisas",
  async (args, { getState }) => {
    const { token } = getState().agents;
    if (token) {
      const response = await axios.get(`/b2b/visa/list/${args}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } else {
      throw Error("Cannot Find Visa Types");
    }
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
          dateOfBirth: {
            day: "",
            month: "",
            year: "",
          },
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
          dateOfBirth: {
            day: "",
            month: "",
            year: "",
          },
        });
      }
    },
    handleRowItemChange: (state, action) => {
      state.rows[action.payload.index][action.payload.name] =
        action.payload.value;
    },
    addImageRows: (state, action) => {
      state.imageRows = [{}];

      const data = localStorage.getItem("visaOrder")
        ? JSON.parse(localStorage.getItem("visaOrder"))
        : {};

      for (let i = 1; i < Number(state.visaEnquiry?.traveller); i++) {
        state.imageRows.push({});
      }
    },
    handleRowImageChange: (state, action) => {
      state.imageRows[action.payload.index][action.payload.name] =
        action.payload.file;
    },
    handleDOBChange: (state, action) => {
      state.rows[action.payload.index].dateOfBirth[action.payload.name] =
        action.payload.value;
    },
    setVisaEnquiry: (state, action) => {
      state.visaEnquiry = JSON.parse(localStorage.getItem("visaEnquiry"));
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
  handleRowItemChange,
  setVisaEnquiry,
  handleDOBChange,
  addImageRows,
  handleRowImageChange,
} = visaSlice.actions;

export default visaSlice.reducer;
