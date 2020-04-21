import React from "react";
import { FlatList, View } from "react-native";
import styles from "./style";
import FeedList from "../../Common/FeedList/FeedList";
import { connect } from "react-redux";
import { BACKGROUND } from "../../../styles";
import Spinner from "react-native-loading-spinner-overlay";


const AllFeedsToggle = ({ feeds }) => {
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
    <View style={{ flex: 1, backgroundColor: BACKGROUND }}>{render()}</View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    feeds: state.feeds.feeds.feeds,
  };
};



export default connect(mapStateToProps, null)(AllFeedsToggle);
