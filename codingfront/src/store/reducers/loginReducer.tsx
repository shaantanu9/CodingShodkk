import { LOGIN, LOGOUT } from "../actions/types";

type initialStateType = {
  isAuthenticated: boolean;
  user: string;
};

const initialState: initialStateType = {
  isAuthenticated: false,
  user: "",
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
