import { SUBSCRIBE_FEED, CLEAR_SUBSCRIBE } from "../constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE_FEED:
      return {
        ...state,
        ...action.feed,
      };
    case CLEAR_SUBSCRIBE:
      return initialState;
    default:
      return state;
  }
};
