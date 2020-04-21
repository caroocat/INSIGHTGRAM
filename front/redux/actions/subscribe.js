import { SUBSCRIBE_FEED, CLEAR_SUBSCRIBE } from "../constants";
import axios from "axios";
import { ip, allFeedsUrl } from "../../config";
import Promise from "bluebird";

export const addFeed = (feedId, subs) => ({
  type: SUBSCRIBE_FEED,
  feed: {
    [feedId]: subs,
  },
});

export const clearSubscribe = () => ({
  type: CLEAR_SUBSCRIBE,
});

export const subscribeFeeds = (feeds) => {
  let feedsToSubscribe = filterFeeds(feeds, "subscribe");
  let feedsToUnsubscribe = filterFeeds(feeds, "unsubscribe");
  let subscribedFeeds = axios.put(`http://${ip}/api/user/feeds`, {
    ids: feedsToSubscribe,
  });
  let unsubscribedFeeds = axios.delete(`http://${ip}/api/user/feeds`, {
    data: {
      ids: feedsToUnsubscribe,
    },
  });
  return Promise.props({ subscribedFeeds, unsubscribedFeeds }).then(
    ({ subscribedFeeds, unsubscribedFeeds }) => {
      return {
        subscribedFeeds: subscribedFeeds.data,
        unsubscribedFeeds: unsubscribedFeeds.data,
      };
    }
  );
};

const filterFeeds = (feeds, string) => {
  let arr = [];
  for (let key in feeds) {
    if (feeds[key] === string) arr.push(key);
  }
  return arr;
};
