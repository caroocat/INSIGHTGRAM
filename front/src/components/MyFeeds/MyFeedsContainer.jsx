import React, { useState, useEffect } from "react";
import MyFeeds from "./MyFeeds";
import { View } from "react-native";
import { connect } from "react-redux";
import Search from "../Common/Search/Search";
import {
  filterHomeFeeds,
  fetchFeedsByUser,
} from "../../../redux/actions/feeds";
import { getItemStorage } from "../../../assets/js/AsyncStorage";
import { BACKGROUND } from "../../styles";

const MyFeedsContainer = ({
  feeds,
  navigation,
  filterHomeFeeds,
  fetchFeedsByUser,
}) => {
  const [filteredMyFeeds, setFilteredMyFeeds] = useState({});
  const [myFeeds, setMyFeeds] = useState({});
  useEffect(() => {
    if (Object.keys(filteredMyFeeds).length == 0) {
      getItemStorage("@Token").then((token) => {
        fetchFeedsByUser(token).then((data) => {
          setMyFeeds(data);
          setFilteredMyFeeds(JSON.parse(JSON.stringify(data)));
        });
      });
    }
  }, [filteredMyFeeds]);

  const handleStory = (storyprops) => {
    navigation.navigate("Stories", {origin:"MyFeeds", ...storyprops})
  };
  const handleSearch = (evt, target) => {
    if (target === "myFeeds") {
      let input = evt.nativeEvent.text.toLowerCase();
      let searchMyFeeds = myFeeds.feeds.all;
      let filteredFeeds = searchMyFeeds.filter((elemento) =>
        elemento.name.toLowerCase().includes(input)
      ); 
      let newfilteredMyFeeds = Object.assign({}, filteredMyFeeds, {
        ...(filteredMyFeeds.feeds["all"] = filteredFeeds),
      });
      setFilteredMyFeeds(newfilteredMyFeeds);
      filterHomeFeeds(filteredMyFeeds);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: BACKGROUND }}>
      {filteredMyFeeds && filteredMyFeeds.feeds ? (
        <View>
          <Search handleSearch={handleSearch} handleTarget={"myFeeds"} />
          <View style={{ height: 10 }}></View>
          <MyFeeds
            feeds={filteredMyFeeds.feeds.all}
            handleStory={handleStory}
          />
        </View>
      ) : null}
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    feeds: state.feeds.homeUser,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFeedsByUser: (token) => dispatch(fetchFeedsByUser(token)),
    filterHomeFeeds: (data) => dispatch(filterHomeFeeds(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyFeedsContainer);
