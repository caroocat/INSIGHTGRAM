import { SHOW_STORIES_HEADER, SET_PENDING_STORY } from "../constants";

const initialState = {
  showHeader: true,
  pendingStories: {},
  currentFeedIndex: -1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_STORIES_HEADER:
      return { ...state, showHeader: action.value };
    case SET_PENDING_STORY:
      return {...state, pendingStories: {...state.pendingStories, ...action.data}}
    default:
      return state;
  }
};