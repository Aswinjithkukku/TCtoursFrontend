import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import Swal from "sweetalert2";

const initialState = {
  loading: true,
  agentExcursion: {},
  agentExcursions: [],
  agentRecievedActivities: [],
  agentSelectedActivities: [],
  ticketCount: 0,
  ticketStatus: false,
  // favourites: localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites"))|| [] : [],
  agentExcursionCart: localStorage.getItem("agentExcursionCart")
    ? JSON.parse(localStorage.getItem("agentExcursionCart")) || []
    : [],
};

export const getAllAgentExcursions = createAsyncThunk(
  "agentExcursionSlice/getAllAgentExcursions",
  async (args, { getState }) => {
    const { token } = getState().agents;
    if (token) {
      const response = await axios.get(
        `/b2b/resellers/client/attraction/all?search=${args.search}&limit=100&destination=${args.destination}&category=${args.category}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } else {
      throw Error("cant find attractions");
    }
  }
);
export const getAgentExcursion = createAsyncThunk(
  "agentExcursionSlice/getAgentExcursion",
  async (args, { getState }) => {
    const { token } = getState().agents;
    if (token) {
      const response = await axios.get(
        `/b2b/resellers/client/attraction/single/${args}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      return response?.data;
    } else {
      throw Error("cant find attraction");
    }
  }
);

const agentExcursionSlice = createSlice({
  name: "agentExcursion",
  initialState,
  reducers: {
    setActivities: (state, action) => {
      state.agentRecievedActivities[action.payload.index][action.payload.name] =
        action.payload.value;
    },
    setSum: (state, action) => {
      state.agentRecievedActivities[action.payload.index][action.payload.sum] =
        action.payload.value;
    },

    setSelectionArray: (state, action) => {
      state.agentSelectedActivities = action.payload;
    },
    addToCart: (state, action) => {
      var excursionArray = [];
      var selectedArray = action.payload;
      excursionArray =
        JSON.parse(localStorage.getItem("agentExcursionCart")) || [];
      console.log("excursion array:", excursionArray);
      // merge two array
      let data = [...selectedArray, ...excursionArray];

      let array = [];
      let uniqueObj = {};
      for (let i in data) {
        let id = data[i]["_id"];
        uniqueObj[id] = data[i];
      }

      // unique object of array
      for (let i in uniqueObj) {
        array.push(uniqueObj[i]);
      }

      localStorage.setItem("agentExcursionCart", JSON.stringify(array));

      state.agentExcursionCart =
        JSON.parse(localStorage.getItem("agentExcursionCart")) || [];
    },
    removeFromCart: (state, action) => {
      state.agentExcursionCart = state.agentExcursionCart.filter((item) => {
        return item._id !== action.payload;
      });
      localStorage.setItem(
        "agentExcursionCart",
        JSON.stringify(state.agentExcursionCart)
      );
    },
    emptyCart: (state, action) => {
      state.agentExcursionCart = [];
      localStorage.setItem(
        "agentExcursionCart",
        JSON.stringify(state.agentExcursionCart)
      );
    },
  },
  extraReducers: {
    [getAgentExcursion.fulfilled]: (state, action) => {
      state.loading = false;
      state.agentExcursion = action.payload?.attraction;
      // state.ticketCount = action.payload?.ticketCount;
      state.ticketStatus = action.payload?.ticketStatus
      let array = [];
      for (let i = 0; i < state.agentExcursion.activities.length; i++) {
        state.agentExcursion.activities[i].isChecked = i === 0 ? true : false;
        state.agentExcursion.activities[i].date = "";
        state.agentExcursion.activities[i].transfer = "without";
        state.agentExcursion.activities[i].adult = 1;
        state.agentExcursion.activities[i].child = 0;
        state.agentExcursion.activities[i].infant = 0;
        state.agentExcursion.activities[i].sum = 0;
        array.push(state.agentExcursion.activities[i]);
      }
      state.agentRecievedActivities = array;
    },
    [getAllAgentExcursions.fulfilled]: (state, action) => {
      state.loading = false;
      state.agentExcursions = action.payload;
    },
  },
});

export const {
  setActivities,
  setSelectionArray,
  addToCart,
  removeFromCart,
  emptyCart,
} = agentExcursionSlice.actions;

export default agentExcursionSlice.reducer;
