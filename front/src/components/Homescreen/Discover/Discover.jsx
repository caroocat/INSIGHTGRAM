import React from "react";
import { View, ScrollView} from "react-native";
import { DiscoverGrid, ItemText } from "./style";

import FeedIconContainer from "../../Common/FeedIcon/FeedIconContainer";
export default ({ feeds, handleStory }) => {
  return (
    <View>
      <ItemText>Discover</ItemText>
      <ScrollView horizontal scrollEnabled={false}>
        <DiscoverGrid
          numColumns={4}
          scrollEnabled={false}
          data={feeds}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(feed) => {
            return (
              <FeedIconContainer
                disableTick={true}
                feed={feed.item}
                handleStory={handleStory}
                section={"discover"}
              />
            );
          }}
        />
      </ScrollView>
    </View>
  );
};
