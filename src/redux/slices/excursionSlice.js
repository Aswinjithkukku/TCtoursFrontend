import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  loading: false,
  excursion: {},
  reviews: [],
  categories: [],
  excursions: [],
  excursionAll: [],
  recievedActivities: [],

};

export const excursionall = createAsyncThunk(
  "excursion/excursionall",
  async (args, { getState }) => {
    // const { token } = getState().user
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
    const response = await axios.get(
      `/attractions/all?keyword=${args.keyword}&limit=100&destination=${args.destination}&category=${args.category}`
    );
    return response.data;
  }
);
export const getExcursion = createAsyncThunk(
  "excursion/getExcursion",
  async (args, { getState }) => {
    console.log(args);
    const response = await axios.get(`/attractions/single/${args}`);
    return response.data;
  }
);

export const getReviews = createAsyncThunk(
  "excursion/getReviews",
  async (args, { getState }) => {
    const response = await axios.get(`/attractions/reviews/single/${args}`);
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
      state.recievedActivities[action.payload.index][action.payload.name] = action.payload.value
    },
    // setSum : (state,action) => {
    //   state.recievedActivities[i].p
    // }
  },
  extraReducers: {
    [getExcursion.pending]: (state, action) => {
      state.loading = true;
    },
    [getExcursion.fulfilled]: (state, action) => {
      state.loading = false;
      state.excursion = action.payload;
      let array = []
      for(let i = 0 ; i < state.excursion.activities.length ; i++) {
        state.excursion.activities[i].isChecked = i === 0 ? true : false
        state.excursion.activities[i].date = ''
        state.excursion.activities[i].transfer = 'without'
        state.excursion.activities[i].adult = 1
        state.excursion.activities[i].child = 0
        state.excursion.activities[i].infant = 0
        array.push(state.excursion.activities[i])
      }
      state.recievedActivities = array
    },
    [getReviews.pending]: (state, action) => {
      state.loading = true;
    },
    [getReviews.fulfilled]: (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
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
  setActivities
} = excursionSlice.actions

export default excursionSlice.reducer;
