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
    async (args, { getState }) => {
        const { token } = getState().agents;
        if (token) {
            const response = await axios.get(`/b2b/resellers/client/attraction/listall?search=${args||''}`, {
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
export const removeClientMarkup = createAsyncThunk(
    "markupSlice/removeClientMarkup",
    async (args, { getState }) => {
        const { token } = getState().agents;
        if (token) {
            const response = await axios.delete(`/b2b/resellers/client/markup/delete/${args.id}`, {
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
export const removeSubagentMarkup = createAsyncThunk(
    "markupSlice/removeSubagentMarkup",
    async (args, { getState }) => {
        const { token } = getState().agents;
        if (token) {
            const response = await axios.delete(`/b2b/resellers/subagent/markup/delete/${args.id}`, {
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
  reducers: {
      setClientMarkup: (state, action) => {
          state.clientMarkup = action.payload;
      },
      setAgentMarkup: (state, action) => {
          state.agentMarkup = action.payload;
      },
  },
  extraReducers: {
    [fetchMarkups.fulfilled]: (state, action) => {
      state.markups = action.payload?.attractions;
      state.loading = false;
    },
    [removeClientMarkup.fulfilled]: (state, action) => {
      state.clientMarkup = {
        _id: action?.payload?._id,
        name: action?.payload?.name
      }
      state.loading = false;
    },
    [removeSubagentMarkup.fulfilled]: (state, action) => {
      state.agentMarkup = {
        _id: action?.payload?._id,
        name: action?.payload?.name
      }
      state.loading = false;
    },
  },
});


export const {setClientMarkup, setAgentMarkup } = markupSlice.actions;

export default markupSlice.reducer;
