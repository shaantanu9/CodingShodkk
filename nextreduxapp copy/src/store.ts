import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import counterReducer from "./features/counter/counterSlice";
import loginReducer from "./features/login/loginSlice";
import snipsReducer from "./features/snips/snipsSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      loginData: loginReducer,
      snipsData: snipsReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
