import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  loading: false,
  excursion: {},
  categories: [],
  excursions: [],
  excursionAll: [],
  recievedActivities: [],
  selectedActivities: [],
  favourites: localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites"))|| [] : [],
  excursionCart: localStorage.getItem("excursionCart") ? JSON.parse(localStorage.getItem("excursionCart")) || [] : [],
};

export const excursionall = createAsyncThunk(
  "excursion/excursionall",
  async (args, { getState }) => {
    // const { token } = getState().users
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    const response = await axios.get(`/attractions/all?limit=20`);
    return response.data;
  }
);

export const getAllExcursions = createAsyncThunk(
  "excursion/getAllExcursions",
  async (args, { getState }) => {
    if (args.isOffer) {
      const response = await axios.get(
        `/attractions/all?search=${args.search}&limit=100&isOffer=${args.isOffer}&category=${args.category}&rating=${args.rating}&duration=${args.duration}`
      );
      return response.data;
    }
    if (args.isCombo) {
      const response = await axios.get(
        `/attractions/all?search=${args.search}&limit=100&isCombo=${args.isCombo}&category=${args.category}&rating=${args.rating}&duration=${args.duration}`
      );
      return response.data;
    }
    if (args.destination) {
      const response = await axios.get(
        `/attractions/all?search=${args.search}&limit=100&destination=${args.destination}&category=${args.category}&rating=${args.rating}&duration=${args.duration}`
      );
      return response.data;
    }
  }
);
export const getExcursion = createAsyncThunk(
  "excursion/getExcursion",
  async (args, { getState }) => {
    const response = await axios.get(`/attractions/single/${args}`);
    return response.data;
  }
);


export const getCategories = createAsyncThunk(
  "excursion/getCategories",
  async (args, { getState }) => {
    const response = await axios.get("/attractions/categories/all");
    return response.data;
  }
);



const excursionSlice = createSlice({
  name: "excursion",
  initialState,
  reducers: {
    setActivities: (state, action) => {
      state.recievedActivities[action.payload.index][action.payload.name] =
        action.payload.value;
    },
    setSum: (state, action) => {
      state.recievedActivities[action.payload.index][action.payload.sum] =
        action.payload.value;
    },
    setFavourites: (state, action) => {
      var array = [];
      array = JSON.parse(localStorage.getItem("favourites")) || [];
      const isItemExist = array.find(
        (item) => item?._id === action.payload._id
      );
      if (isItemExist) {
        const result = array.filter((item) => item?._id !== action.payload._id);
        array = result;
        state.favourites = array;
        localStorage.setItem("favourites", JSON.stringify(array));
      } else {
        array = [action.payload, ...array];
        state.favourites = array;
        localStorage.setItem("favourites", JSON.stringify(array));
      }
    },
    stateFavourites: (state, action) => {
      state.favourites = localStorage.getItem("favourites")
        ? JSON.parse(localStorage.getItem("favourites"))
        : [];
    },

    setSelectionArray: (state, action) => {
      state.selectedActivities = action.payload;
    },
    addToCart: (state, action) => {
      var excursionArray = [];
      var selectedArray = action.payload;
      excursionArray = JSON.parse(localStorage.getItem("excursionCart")) || [];
      console.log('excursion array:',excursionArray);
      // merge two array
      let data = [...selectedArray,...excursionArray]

      let array = []
      let uniqueObj = {}
      for(let i in data) {
        let id = data[i]['_id']
        uniqueObj[id] = data[i]
      }

      // unique object of array
      for(let i in uniqueObj) {
        array.push(uniqueObj[i])
      }

      localStorage.setItem("excursionCart", JSON.stringify(array))

      state.excursionCart =
        JSON.parse(localStorage.getItem("excursionCart")) || [];
    },
    removeFromCart: (state, action) => {
      state.excursionCart = state.excursionCart.filter((item) => {
        return item._id !== action.payload
      })
      localStorage.setItem("excursionCart", JSON.stringify(state.excursionCart))
    }
  },
  extraReducers: {
    [getExcursion.pending]: (state, action) => {
      state.loading = true;
    },
    [getExcursion.fulfilled]: (state, action) => {
      state.loading = false;
      state.excursion = action.payload;
      let array = [];
      for (let i = 0; i < state.excursion.activities.length; i++) {
        state.excursion.activities[i].isChecked = i === 0 ? true : false;
        state.excursion.activities[i].date = "";
        state.excursion.activities[i].transfer = "without";
        state.excursion.activities[i].adult = 1;
        state.excursion.activities[i].child = 0;
        state.excursion.activities[i].infant = 0;
        state.excursion.activities[i].sum = 0;
        array.push(state.excursion.activities[i]);
      }
      state.recievedActivities = array;
    },
    [getCategories.pending]: (state, action) => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    [getAllExcursions.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllExcursions.fulfilled]: (state, action) => {
      state.loading = false;
      state.excursions = action.payload;
    },
    [excursionall.pending]: (state, action) => {
      state.loading = true;
    },
    [excursionall.fulfilled]: (state, action) => {
      state.loading = false;
      state.excursionAll = action.payload;
    },
  },
});

export const {
  setActivities,
  setFavourites,
  stateFavourites,
  setSelectionArray,
  addToCart,
  removeFromCart,
} = excursionSlice.actions;

export default excursionSlice.reducer;
