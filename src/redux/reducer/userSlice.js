import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UseAPI from "../../API/UserAPI";

export const register = createAsyncThunk(
  "register/fetchAuth",
  async (payload) => {
    // call API đăng ký tài khoản.
    const response = await UseAPI.register(payload);
    return response;
  }
);

export const login = createAsyncThunk("login/fetchAuth", async (payload) => {
  const response = await UseAPI.login(payload);
  response && localStorage.setItem("users", JSON.stringify(response.user));
  response &&
    localStorage.setItem(
      "accessTokenRegister",
      JSON.stringify(response.accessToken)
    );
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("users")) || {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
    [login.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
  },
});

const { actions, reducer } = userSlice;

export default reducer;
