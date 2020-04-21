import React, { useState } from "react";
import FeedIcon from "./FeedIcon";
import { addFeed } from "../../../../redux/actions/subscribe";
import {setCurrentFeedId} from "../../../../redux/actions/feeds";
import { connect } from "react-redux";

const FeedIconContainer = ({
  feed,
  disableTick,
  handleStory,
  section,
  size,
  addFeed,
  userFeeds,
  setCurrentFeedId,
  subscribe,
  seenFeeds
}) => {
  let selectedValue = subscribe[feed.id]? 
  ((subscribe[feed.id]==="subscribe")? true: false): feed.is_suscribed
  let seen = seenFeeds[feed.id]? false: feed.has_pending_stories

  const handlePress = () => {
    let subs
    if (feed.is_suscribed) {
      subs = selectedValue ? "unsubscribe" : false;
    } else {
      subs = selectedValue ? false : "subscribe";
    }
    addFeed(feed.id, subs);
  };

  const handleOpenStory = () => {
    setCurrentFeedId(feed.id)
    handleStory({ index: getFeedIndex(userFeeds[section], feed.id), section, startStory: 0})
  }

  return (
    <FeedIcon
      handlePress={
        disableTick ? handleOpenStory : handlePress
      }
      tick={selectedValue}
      name={feed.name}
      hasPendingStories={seen}
      thumbnail={feed.thumbnail}
      preview={disableTick ? feed.stories[0].thumbnail : null}
      disableTick={disableTick}
      size={size}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    subscribe: state.subscribe,
    userFeeds: state.feeds.homeUser.feeds,
    seenFeeds: state.feeds.seenFeeds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFeed: (feed_id, subs) => dispatch(addFeed(feed_id, subs)),
    setCurrentFeedId: (feedId) => dispatch(setCurrentFeedId(feedId))
  };
};

const getFeedIndex = (feeds, id) => {
  return feeds.findIndex((feed) => feed.id === id);
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedIconContainer);
