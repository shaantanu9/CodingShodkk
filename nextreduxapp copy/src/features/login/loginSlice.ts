import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { AppState } from "../../store";
import { setLocalStorage } from "../../utils";
export interface LoginState {
  isAuth: boolean;
  token: string;
  status: "idle" | "loading" | "failed";
}

const initialState: LoginState = {
  isAuth: false,
  token: "",
  status: "idle",
};

export type LoginUser = {
  email: string;
  password: string;
  keepMeLogin: boolean;
};

export type LoginAction = {
  type: string;
  payload: LoginState;
};

export const loginAsync = createAsyncThunk(
  "counter/fetchCount",
  async (loginData: LoginUser) => {
    const response = await axios.post("/api/loginUser", loginData);
    // The value we return becomes the `fulfilled` action payload
    console.log("response.data.token", response);
    if (response.data && response.data.token)
      setLocalStorage("token", response.data.token);
    return response.data.token;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserData: (state, action: LoginAction) => {
      state.isAuth = action.payload.isAuth;
      state.token = action.payload.token;
    },
    ifToken: (state, action) => {
      state.isAuth = true;
      state.token = action.payload;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isAuth = true;
        state.token = action.payload;
      });
  },
});

export const { setUserData, ifToken, incrementByAmount } = loginSlice.actions;

export const loginUserData = (state: AppState) => state.loginData;
export default loginSlice.reducer;
