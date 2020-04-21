import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import {
  Header,
  ProgressBarContainer,
  TitleIconContainer,
  IconsContainer,
  TitleContainer,
  Title,
  Avatar,
  TitleAvatarContainer
} from "./style";

export default ({
  name,
  play,
  handleClose,
  handlePlay,
  stories,
  showHeader,
  index,
}) => {
  const feedName = (name.length > 23)? `${name.slice(0,23)}...`: name
  return (
    <Header showHeader={showHeader}>
      <ProgressBarContainer>
        <ProgressIndicator stories={stories} storyIndex={index} />
      </ProgressBarContainer>
      <TitleIconContainer>
        <TitleAvatarContainer>
        <Avatar source={{uri: "https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2"}}/>
          <TitleContainer>
            <Title>{feedName}</Title>
          </TitleContainer>
        </TitleAvatarContainer>
        <IconsContainer>
          <TouchableOpacity onPress={handlePlay}>
            {play ? (
              <Feather name="pause" color="#ffffff" size={25} />
            ) : (
              <Feather name="play" color="#ffffff" size={25} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClose}>
            <Feather
              name="x"
              color="#ffffff"
              size={30}
              style={{ paddingLeft: 20 }}
            />
          </TouchableOpacity>
        </IconsContainer>
      </TitleIconContainer>
    </Header>
  );
};
