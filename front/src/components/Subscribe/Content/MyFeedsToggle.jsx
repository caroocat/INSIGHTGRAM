import React, { useEffect } from "react";
import { SafeAreaView, FlatList, View, Text } from "react-native";
import styles from "./style";
import FeedList from "../../Common/FeedList/FeedList";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { BACKGROUND } from "../../../styles";

const MyFeedsToggle = ({ feedsUnfiltered }) => {
  const feeds = feedsUnfiltered ? filter(feedsUnfiltered) : null;

  const List = (item) => {
    if (item.feeds.length) {
      return (
        <View>
          <styles.ItemText>{item.group}</styles.ItemText>
          <FeedList feeds={item.feeds} />
        </View>
      );
    } else {
      return null;
    }
  };

  const render = () => {
    if (feeds) {
      if (feeds.length !== 0) {
        return (
          <FlatList
            data={feeds}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => List(item)}
          />
        );
      } else {
        return (
          <styles.ViewMessage>
            <styles.TextMessage color={"#fff"}>
              No se encontraron resultados
            </styles.TextMessage>
          </styles.ViewMessage>
        );
      }
    } else {
      return <Spinner visible={true} />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: BACKGROUND }}>
      {render()}
    </SafeAreaView>
  );
};
const filter = (feeds) => {
  let filteredFeeds = [];
  for (let i = 0; i < feeds.length; i++) {
    let filteredFeed = {};
    filteredFeed.group = feeds[i].group;
    filteredFeed.feeds = feeds[i].feeds.filter((feed) => {
      return feed.is_suscribed;
    });
    if (filteredFeed.feeds.length !== 0) {
      filteredFeeds.push(filteredFeed);
    }
  }

  return filteredFeeds;
};

const mapStateToProps = (state, ownProps) => {
  return {
    feedsUnfiltered: state.feeds.feeds.feeds,
  };
};



export default connect(mapStateToProps, null)(MyFeedsToggle);
