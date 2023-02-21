import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  visaLoading: false,
  visaEnquiry: 
  // localStorage.getItem("visaEnquiry")
  //   ? JSON.parse(localStorage.getItem("visaEnquiry"))
  //   : 
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

const b2cVisaSlice = createSlice({
  name: "visa",
  initialState,
  reducers: {
    addb2cRows: (state, action) => {
      state.rows = [
        {
          title: "",
          firstName: "",
          lastName: "",
          email: state?.visaEnquiry?.email || "",
          country: "",
          contactNo: state?.visaEnquiry?.contactNo || "",
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

      for (let i = 1; i < Number(state.visaEnquiry?.travellersCount); i++) {
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
    handleb2cRowItemChange: (state, action) => {
      state.rows[action.payload.index][action.payload.name] =
        action.payload.value;
    },
    // addImageRows: (state, action) => {
    //   state.imageRows = [
    //     {
    //       passportFistPagePhoto: "",
    //       passportLastPagePhoto: "",
    //       passportSizePhoto: "",
    //       supportiveDoc1: "",
    //       supportiveDoc2: "",
    //     },
    //   ];

    //   for (let i = 1; i < Number(state.visaEnquiry?.traveller); i++) {
    //     state.imageRows.push({
    //       passportFistPagePhoto: "",
    //       passportLastPagePhoto: "",
    //       passportSizePhoto: "",
    //       supportiveDoc1: "",
    //       supportiveDoc2: "",
    //     });
    //   }
    // },
    handleb2cRowImageChange: (state, action) => {
      state.imageRows[action.payload.index][action.payload.name] =
        action.payload.file;
    },
    handleb2cDOBChange: (state, action) => {
      state.rows[action.payload.index].dateOfBirth[action.payload.name] =
        action.payload.value;
    },
    handleb2cPEDChange: (state, action) => {
      state.rows[action.payload.index].expiryDate[action.payload.name] =
        action.payload.value;
    },
    setb2cVisaEnquiry: (state, action) => {
      state.visaEnquiry = {
        ...action.payload,
      };
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
  addb2cRows,
  handleb2cRowItemChange,
  setb2cVisaEnquiry,
  handleb2cDOBChange,
  handleb2cPEDChange,
  handleb2cRowImageChange,
} = b2cVisaSlice.actions;

export default b2cVisaSlice.reducer;
