import React from "react";
import Header from "./Header";
import Indicator from "./Indicator";
import { View } from "react-native";
import { connect } from "react-redux";
import { setPlay } from "../../../../../redux/actions/play";

const HeaderContainer = ({ play, handleClose, setPlay, name, stories, showHeader, index}) => {
  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    // <View>
    <Header
      play={play}
      handleClose={handleClose}
      handlePlay={handlePlay}
      name={name}
      stories={stories}
      showHeader={showHeader}
      index={index}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    play: state.play.value,
    showHeader: state.stories.showHeader
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPlay: (value) => dispatch(setPlay(value)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
