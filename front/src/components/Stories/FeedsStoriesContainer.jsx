import React, { useState } from "react";
import StoriesContainer from "./StoriesContainer";
import { connect } from "react-redux";
import { updateFeedsUser, setCurrentFeedId, setSeen} from "../../../redux/actions/feeds";


const FeedsStoriesContainer = ({
  route,
  navigation,
  allFeeds,
  updateFeedsUser,
  setCurrentFeedId,
  setSeen,
  seenFeeds
}) => {
  const { index, section, origin, startStory} = route.params;
  const feeds = allFeeds[section]

  const handleFeedChange = (moveFeed) => {
    setSeen(feeds[index].id)
    let newIndex = index + moveFeed;
    if (section == "discover") {
      handleClose();
    } else {
      if (newIndex >= 0 && newIndex < feeds.length) {
        changeHasPendingStories();
        setCurrentFeedId(feeds[newIndex].id)
        navigation.push("Stories",{origin, section, index: newIndex})
      } else {
        setCurrentFeedId(-1)
        handleClose();
      }
    }
  };

  const handleClose = () => {
    changeHasPendingStories();
    updateFeedsUser(allFeeds);
    setCurrentFeedId(-1)
    navigation.navigate(origin);
  };

  const changeHasPendingStories = () => {
    feeds[index].stories.filter(
      (story) => story.status == "not_seen"
    ).length == 0
      ? (feeds[index].has_pending_stories = false)
      : null;
  };

  return (
    <StoriesContainer
      handleClose={handleClose}
      handleFeedChange={handleFeedChange}
      feed={feeds[index]}
      startStory={startStory}
    />
  );
};


const mapStateToProps = (state, ownProps) => {
  return {
    allFeeds: state.feeds.homeUser.feeds,
    seenFeeds: state.feeds.seenFeeds
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateFeedsUser: (data) => dispatch(updateFeedsUser(data)),
    setCurrentFeedId: (feedId) => dispatch(setCurrentFeedId(feedId)),
    setSeen: (feedId) => dispatch(setSeen(feedId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedsStoriesContainer);
