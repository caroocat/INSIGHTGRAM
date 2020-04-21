import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Subscribe from "./Subscribe";
import {
  fetchAllFeeds,
  fetchFeedsByUser,
  filterSubscribeFeeds,
} from "../../../redux/actions/feeds";
import { getItemStorage } from "../../../assets/js/AsyncStorage";
import {
  subscribeFeeds,
  clearSubscribe,
} from "../../../redux/actions/subscribe";
import { setLoading } from "../../../redux/actions/loading";

const SubscribeContainer = (props) => {
  const [allFeeds, setAllFeeds] = useState({});
  const [filterAllFeeds, setFilterAllFeeds] = useState({});

  useEffect(() => {
    if (Object.keys(allFeeds).length == 0) {
      getItemStorage("@Token").then((token) =>
        props.fetchAllFeeds(token).then((feeds) => {
          setAllFeeds(feeds);
          setFilterAllFeeds(JSON.parse(JSON.stringify(feeds)));
        })
      );
    } else {
      return;
    }
  }, [setAllFeeds]);

  const handleSearch = (evt, target) => {
    if (target === "feeds") {
      let input = evt.nativeEvent.text.toLowerCase();
      let searchFeeds = allFeeds.feeds;
      let searchFeeds2 = [];
      searchFeeds.forEach((group, index) => {
        let feedsFiltrados = group.feeds.filter((feed) =>
          feed.name.toLowerCase().includes(input)
        );
        if (feedsFiltrados.length > 0) {
          searchFeeds2.push({ group: group.group, feeds: feedsFiltrados });
        }
      });
      let newFilter = Object.assign({}, filterAllFeeds, {
        ...(filterAllFeeds.feeds = searchFeeds2),
      });
      setFilterAllFeeds(newFilter);
      props.filterSubscribeFeeds(filterAllFeeds);
    }
  };

  const handlePress = () => {
    props.setLoading(true);
    subscribeFeeds(props.subscribe)
      .then(() => {
        getItemStorage("@Token").then((token) => {
          return props.fetchFeedsByUser(token);
        });
      })
      .then(() => {
        props.clearSubscribe();
        props.setLoading(false);
        props.navigation.navigate("Home");
      });
  };

  return (
    <Subscribe
      feeds={allFeeds ? allFeeds.feeds : {}}
      handlePress={handlePress}
      loading={props.loading}
      handleSearch={handleSearch}
    />
  );
};
const mapStateToProps = function (state, ownProps) {
  return {
    subscribe: state.subscribe,
    loading: state.loading,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    fetchFeeds: (search) => dispatch(fetchFeeds(search)),
    fetchAllFeeds: (token) => dispatch(fetchAllFeeds(token)),
    fetchFeedsByUser: (token) => dispatch(fetchFeedsByUser(token)),
    clearSubscribe: () => dispatch(clearSubscribe()),
    setLoading: (value) => dispatch(setLoading(value)),
    filterSubscribeFeeds: (data) => dispatch(filterSubscribeFeeds(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeContainer);
