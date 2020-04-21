import { SET_FEEDS, SET_HOME_USER, UPDATE_HOME_DATA, SET_CURRENT_FEED, SET_SEEN } from "../constants";
const initialState = {
  feeds: {},
  homeUser: {},
  originData: {},
  originFeeds: {},
  seenFeeds: {},
  currentStoryIndex: 0,
  currentFeedId: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FEEDS:
      return { ...state, feeds: action.feeds, originFeeds: action.originFeeds };
    case SET_HOME_USER:
      return { ...state, homeUser: action.data, originData: action.originData };
    case UPDATE_HOME_DATA: {
      return {
        ...state,
        homeUser: { ...state.homeUser, feeds: action.data },
      };
    }
    case SET_CURRENT_FEED: {
      return { ...state, currentFeedId: action.feedId };
    }
    case SET_SEEN: {
      return { ...state, seenFeeds: {
        ...state.seenFeeds,
        ...action.feed,
      }};
    }
    case "UPDATE_STORY_INDEX": {
      return {
        ...state,
        currentStoryIndex: {
          ...state.currentStoryIndex,
          currentStoryIndex: action.data,
        },
      };
    }
    default:
      return state;
  }
};
