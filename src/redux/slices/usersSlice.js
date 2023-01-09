import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios";

const initialState = {
    isSiteLoading: true,
    user: {},
    countries: [],
    jwtToken: localStorage.getItem("random-string") || "",
    isLoggedIn: false,
};

const fetchUser = createAsyncThunk(
    "usersSlice/fetchUser",
    async (_, { getState }) => {
        const { jwtToken } = getState().users;
        if (jwtToken) {
            const response = await axios.get("/users/my-account", {
                headers: {
                    authorization: `Bearer ${jwtToken}`,
                },
            });
            return response.data;
        } else {
            throw Error("");
        }
    }
);

const logoutUser = createAsyncThunk(
    '/usersSlice/logoutUser',
    async (dispatch,  getState ) => {
        // const response = await axios.get('/user/logout');
        localStorage.removeItem('random-string')
    }
);

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload?.user;
            state.jwtToken = action.payload?.jwtToken;
            state.isLoggedIn = true;

            localStorage.setItem("random-string", action.payload?.jwtToken);
        },
    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isSiteLoading = false;
        },
        [fetchUser.rejected]: (state, action) => {
            state.isSiteLoading = false;
            localStorage.removeItem("random-string");
        },
        [logoutUser.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = {};
            state.jwtToken = '';

        localStorage.removeItem('random-string')
        },
    },
});

export { fetchUser, logoutUser };

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;
