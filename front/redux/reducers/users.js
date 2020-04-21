import { LOGIN_USER } from "../constants";

const initialState = { token: "" };
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.token };
    default:
      return state;
  }
};
