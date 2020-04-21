import {SHOW_STORIES_HEADER, SET_PENDING_STORY} from "../constants"

export const showStoriesHeader = value => ({
    type: SHOW_STORIES_HEADER,
    value
  });

export const setPendingStories = (feedId, storyIndex) => ({
  type: SET_PENDING_STORY,
  data: {
    [feedId]: storyIndex
  }
})
  