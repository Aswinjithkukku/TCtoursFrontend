import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios";

const initialState = {
  loading: true,
  markups: [],
  agentMarkup: {},
  clientMarkup: {}
};

export const fetchMarkups = createAsyncThunk(
    "markupSlice/fetchMarkups",
    async (_, { getState }) => {
        const { token } = getState().agents;
        if (token) {
            const response = await axios.get("/b2b/resellers/client/attraction/listall", {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } else {
            throw Error("Cant find markups");
        }
    }
);

const markupSlice = createSlice({
  name: "markup",
  initialState,
  // reducers: {
  //     setAgent: (state, action) => {
  //         state.agent = action.payload?.reseller;
  //         state.token = action.payload?.jwtToken;
  //         state.isLoggedIn = true;

  //         localStorage.setItem("agent-string", action.payload?.jwtToken);
  //     },
  // },
  extraReducers: {
    [fetchMarkups.fulfilled]: (state, action) => {
      state.markups = action.payload?.attractions;
      state.loading = false;
    },
  },
});


// export const {  } = markupSlice.actions;

export default markupSlice.reducer;
