import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios";

const initialState = {
  loading: true,
  resellers: [],
};

export const fetchResellers = createAsyncThunk(
    "resellerSlice/fetchResellers",
    async (args, { getState }) => {
        const { token } = getState().agents;
        if (token) {
            const response = await axios.get(`/b2b/resellers/listAll`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } else {
            throw Error("Cant find resellers");
        }
    }
);


const resellerSlice = createSlice({
  name: "reseller",
  initialState,
  // reducers: {
  //     setClientMarkup: (state, action) => {
  //         state.clientMarkup = action.payload;
  //     },
  //     setAgentMarkup: (state, action) => {
  //         state.agentMarkup = action.payload;
  //     },
  // },
  extraReducers: {
    [fetchResellers.fulfilled]: (state, action) => {
      state.resellers = action.payload;
      state.loading = false;
    },
  },
});


// export const { } = resellerSlice.actions;

export default resellerSlice.reducer;
