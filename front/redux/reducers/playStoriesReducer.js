import { SET_PLAY } from "../constants";
const initialState = {
  value: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAY:
      return { ...state, value: action.play };
    default:
      return state;
  }
};
