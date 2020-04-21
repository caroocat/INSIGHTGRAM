import React from "react";
import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import {
  IconContainer,
  GreyBackgroud,
  PreviewImage,
  IconCard,
  Avatar,
  AvatarBorder,
  AvatarBorderGradient,
  TickBorder,
  TopContainer,
  CardName,
} from "./style.js";
import { AntDesign } from "@expo/vector-icons";

export default function FeedIcon({handlePress, tick, name, hasPendingStories, thumbnail, preview, disableTick, size}) {
  const cardname = (name.length>15)? `${name.slice(0,15)}...` : name
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <IconContainer
        size={size}>
          {disableTick? <PreviewImage source={{uri:preview}} size={size}/>: <GreyBackgroud size={size}></GreyBackgroud>}
          <IconCard size={size} preview={preview}>
                <TopContainer>
                  {hasPendingStories? 
                    (<AvatarBorderGradient 
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    colors={['#ffff32', '#75f84d', '#368deb']}
                    >
                        <Avatar
                        hasPendingStories={hasPendingStories}
                        source={{uri:thumbnail}}/>
                    </AvatarBorderGradient>):
                    (<AvatarBorder>
                          <Avatar
                          hasPendingStories={hasPendingStories}
                          source={{uri:thumbnail}}/>
                      </AvatarBorder>)}
                    {disableTick? null: <TickBorder tick={tick}>
                      {tick? ( <AntDesign name="checkcircle" size={27} color="#007aff" style={{marginTop:"2%"}}/>  ): null}  
                    </TickBorder>}
                </TopContainer>
                <CardName>{cardname}</CardName>
          </IconCard>
      </IconContainer>
    </TouchableWithoutFeedback>
  );
}

<AntDesign name="pluscircle" size={35} color="#01ADED" />;
