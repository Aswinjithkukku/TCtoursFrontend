import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
   walletloading: false,
   balance: 0,
   pendingBalance: 0,
   transaction: [],
};

export const getWalletBalance = createAsyncThunk(
   "walletSlice/getWalletBalance",
   async (args, { getState }) => {
      const { token } = getState().agents;
      if (token) {
         const response = await axios.get(`/b2b/transactions/balance`, {
            headers: {
               authorization: `Bearer ${token}`,
            },
         });
         return response.data;
      } else {
         throw Error("cant find Wallet balance");
      }
   }
);

const walletSlice = createSlice({
   name: "Wallet",
   initialState,
   reducers: {
      reduceWalletManipulation: (state, action) => {
         state.balance = state.balance - action.payload;
      },
      addWalletManipulation: (state, action) => {
         state.balance = state.balance + action.payload;
      },
      setTransaction: (state, action) => {
         state.transaction = action.payload;
      },
   },
   extraReducers: {
      [getWalletBalance.pending]: (state, action) => {
         state.loading = true;
      },
      [getWalletBalance.fulfilled]: (state, action) => {
         state.loading = false;
         state.balance = action.payload?.balance;
         state.pendingBalance = action.payload?.pendingBalance;
      },
   },
});

export const {
   reduceWalletManipulation,
   addWalletManipulation,
   setTransaction,
} = walletSlice.actions;

export default walletSlice.reducer;
