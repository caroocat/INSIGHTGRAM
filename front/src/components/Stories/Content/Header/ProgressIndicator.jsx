import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import Indicator from "./Indicator";
import { FlatList } from "react-native-gesture-handler";
import { StoryIndicator } from "./style";

const ProgressIndicator = ({ stories, storyIndex }) => {
  const opacity = useRef(new Animated.Value(1)).current;
  const windowWidth = Dimensions.get("window").width;
  const windowLength = Dimensions.get("window").length;

  const play = useSelector((state) => state.play.value);
  const currentIndex = useSelector(
    (state) => state.feeds.currentStoryIndex.currentStoryIndex
  );

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      timing: 3000,
    }).start();
  }, [stories.pause]);

  return (
    <FlatList
      horizontal
      data={stories}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        return (
          <StoryIndicator
            currentIndex={storyIndex}
            index={index}
            scale={windowWidth / stories.length}
          />
        );
      }}
    />
    // <Animated.View>
    //   {stories.map((i, index) => {
    //         return (
    //           <StoryIndicator currentIndex={currentIndex} index={index} scale={windowWidth/stories.length}/>
    //         );
    //   })}
    // </Animated.View>

    // <Animated.View style={[styles.progressBarArray, { opacity }]}>
    //   {stories.map((i, index) => {
    //     return (
    //       <Indicator
    //         index={index}
    //         duration={3000}
    //         currentIndex={index}
    //         length={stories.length}
    //         active={index === currentIndex ? 2 : index < currentIndex ? 1 : 0}
    //       />
    //     );
    //   })}
    // </Animated.View>
  );
};

const styles = StyleSheet.create({
  progressBarArray: {
    flexDirection: "row",
    position: "absolute",
    top: 30,
    width: "100%",
    height: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProgressIndicator;
