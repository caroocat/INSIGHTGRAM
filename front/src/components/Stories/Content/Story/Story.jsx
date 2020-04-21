import React, { useEffect, useState } from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import { ToggleStory, Touchable, StoryContainer } from "./style";
import {FlingGestureHandler, Directions, State} from "react-native-gesture-handler"

export default ({ story, handleStoryChange, handleLongPress, handlePressOut, handleClose, }) => {
  return (
    // <FlingGestureHandler 
    //   direction={Directions.DOWN}
    //   onHandlerStateChange={({ nativeEvent }) => {
    //     if (nativeEvent.state === State.ACTIVE) {
    //       handleClose()
    //     }
    //   }}>
      <StoryContainer>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={{ uri: story.thumbnail }}
        />
        <ToggleStory>
          <TouchableWithoutFeedback onPress={() => handleStoryChange(-1)} onLongPress={handleLongPress} onPressOut={handlePressOut}>
            <Touchable flex={1}></Touchable>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleStoryChange(1)} onLongPress={handleLongPress} onPressOut={handlePressOut}> 
            <Touchable flex={2}></Touchable>
          </TouchableWithoutFeedback>
        </ToggleStory>
      </StoryContainer>
    // </FlingGestureHandler>
  );
};
