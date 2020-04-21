import React, { Component } from "react";
import { View } from "react-native";
import styles from "./style";
import FeedIconContainer from "../Common/FeedIcon/FeedIconContainer";

export default ({ feeds, handleStory }) => {
  return (
    <View>
      {feeds.length !== 0 ? (
        <styles.Grid
          numColumns={3}
          data={feeds}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(feed) => {
            return (
              <FeedIconContainer
                size={"big"}
                disableTick={true}
                feed={feed.item}
                handleStory={handleStory}
                section={"all"}
              />
            );
          }}
        />
      ) : (
        <styles.ViewMessage>
          <styles.TextMessage>No se encontraron resultados</styles.TextMessage>
        </styles.ViewMessage>
      )}
    </View>
  );
};
