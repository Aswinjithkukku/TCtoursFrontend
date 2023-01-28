import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  walletloading: false,
  balance: {},
  transaction: [],
};

export const getWalletBalance = createAsyncThunk(
  "walletSlice/getWalletBalance",
  async (args, { getState }) => {
    const { token } = getState().agents
    if( token ) {

      const response = await axios.get(`/b2b/transactions/balance`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
      console.log(response.data);
      return response.data;
    } else {
      throw Error("cant find Wallet balance");
    }
  }
);

export const getTransaction = createAsyncThunk(
  "walletSlice/getTransaction",
  async (args, { getState }) => {
    const { token } = getState().agents
    if( token ) {

      const response = await axios.get(`/b2b/transactions/all`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
      console.log(response.data);
      return response.data;
    } else {
      throw Error("cant find Transactions");
    }
  }
);


const walletSlice = createSlice({
  name: "Wallet",
  initialState,
  // reducers: {
  //   setActivities: (state, action) => {
  //     state.agentRecievedActivities[action.payload.index][action.payload.name] =
  //       action.payload.value;
  //   },
  // },
  extraReducers: {
    [getWalletBalance.pending]: (state, action) => {
      state.loading = true;
    },
    [getWalletBalance.fulfilled]: (state, action) => {
      state.loading = false;
      state.balance = action.payload;
    },
    [getTransaction.fulfilled]: (state, action) => {
      state.loading = false;
      state.transaction = action.payload;
    },
  },
});

// export const {
// setActivities,
// } = walletSlice.actions;

export default walletSlice.reducer;
