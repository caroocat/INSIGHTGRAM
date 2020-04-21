import React from "react";
import { FlatList, View, Text } from "react-native";
import { Title, List } from "./style";
import FeedIconContainer from "../FeedIcon/FeedIconContainer";
import { compose } from "redux";
export default function FeedList({
  feeds,
  title,
  disableTick,
  handleStory,
  section,
}) {
  return (
    <View style={{ overFlow: "hidden" }}>
      <Title>{title}</Title>
      <List
        showsHorizontalScrollIndicator={false}
        initialNumberToRender={20}
        windowSize={21}
        data={feeds}
        horizontal={true}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => {
          return (
            <FeedIconContainer
              disableTick={disableTick}
              handleStory={handleStory}
              feed={item.item}
              section={section}
              size={"medium"}
            />
          );
        }}
      />
    </View>
  );
}
