import React from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
  ItemText,
  Subscribe,
  SeeAllButton,
  SeeAllText,
  SubscribeTxt,
  Align,
  ViewMessage,
  TextMessage,
} from "./style";
import Discover from "./Discover/Discover";
import FeedList from "../Common/FeedList/FeedList";
import Search from "../Common/Search/Search";
import { BACKGROUND } from "../../styles";

export default ({
  refreshing,
  onRefresh,
  handlePress,
  feeds,
  handleStory,
  handleMyFeeds,
  handleSearch,
  handleTarget,
  value,
}) => {
  const listAll = () => {
    if (feeds.all.length !== 0) {
      return (
        <FeedList
          feeds={feeds.all}
          disableTick={true}
          handleStory={handleStory}
          section={"all"}
        />
      );
    } else if (!listDiscover()) {
      return (
        <ViewMessage>
          <TextMessage>No se encontraron resultados</TextMessage>
        </ViewMessage>
      );
    }
  };

  const listDiscover = () => {
    if (feeds.discover.length !== 0) {
      return <Discover feeds={feeds.discover} handleStory={handleStory} />;
    } else {
      return null;
    }
  };

  return (
    <View style={{ backgroundColor: BACKGROUND, height: "100%" }}>
      <Search
            handleSearch={handleSearch}
            handleTarget={handleTarget}
            value={value}
          />
      <ScrollView 
      refreshControl={
        <RefreshControl
          style={{
            paddingTop: "13%",
            flex: 2,
            zIndex: 10,
            position: "absolute",
            top: 0,
          }}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      showsVerticalScrollIndicator={false}>
        <View >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: -10,
              zIndex: 2,
            }}
          >
            {feeds.all.length !== 0 ? (
              <ItemText>My feeds</ItemText>
            ) : (
              <ItemText></ItemText>
            )}
            {feeds.all.length > 3? (
              <TouchableWithoutFeedback onPress={handleMyFeeds}>
              <SeeAllButton>
                <SeeAllText>See all</SeeAllText>
              </SeeAllButton>
            </TouchableWithoutFeedback>
            ) : (
              <View style={{height:35}}></View>
            )}
          </View>
          {listAll()}
          {listDiscover()}
        </View>
      </ScrollView>

      <Align>
        <TouchableWithoutFeedback onPress={handlePress}>
          <Subscribe>
            <AntDesign name="pluscircle" size={15} color="white" />
            <SubscribeTxt>Subscribe</SubscribeTxt>
          </Subscribe>
        </TouchableWithoutFeedback>
      </Align>

      <View
        style={{
          flex: 1,
          width: "100%",
          position: "absolute",
          top: 0,
          marginTop: -5,
        }}
      >
        {/* <ScrollView
          refreshControl={
            <RefreshControl
              style={{
                paddingTop: "13%",
                flex: 2,
                zIndex: 10,
                position: "absolute",
                top: 0,
              }}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <Search
            handleSearch={handleSearch}
            handleTarget={handleTarget}
            value={value}
          />
        </ScrollView> */}
      </View>
    </View>
  );
};
