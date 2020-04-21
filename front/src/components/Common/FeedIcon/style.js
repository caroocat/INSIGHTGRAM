import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { WHITE, HEADER_FONT_CARD, CARD_COLOR } from "../../../styles";

const pt = 1.15;

export const IconContainer = styled.View`
  margin: ${(props) => (props.size === "big" ? 3 * pt : 2 * pt)}px;
`;

export const PreviewImage = styled.Image`
  height: ${(props) =>
    props.size === "big"
      ? 195 * pt
      : props.size === "medium"
      ? 181 * pt
      : 148 * pt}px;
  width: ${(props) =>
    props.size === "big"
      ? 107 * pt
      : props.size === "medium"
      ? 101 * pt
      : 82 * pt}px;
  border-radius: ${(props) => (props.size === "big" ? 9 * pt : 9 * pt)}px;
`;
export const GreyBackgroud = styled.View`
  height: ${(props) =>
    props.size === "big"
      ? 195 * pt
      : props.size === "medium"
      ? 181 * pt
      : 148 * pt}px;
  width: ${(props) =>
    props.size === "big"
      ? 107 * pt
      : props.size === "medium"
      ? 101 * pt
      : 82 * pt}px;
  border-radius: ${(props) => (props.size === "big" ? 9 * pt : 9 * pt)}px;
  background-color: ${CARD_COLOR};
`;

export const IconCard = styled.View`
  height: ${(props) =>
    props.size === "big"
      ? 195 * pt
      : props.size === "medium"
      ? 181 * pt
      : 148 * pt}px;
  width: ${(props) =>
    props.size === "big"
      ? 107 * pt
      : props.size === "medium"
      ? 101 * pt
      : 82 * pt}px;
  border-radius: ${(props) => (props.size === "big" ? 9 * pt : 9 * pt)}px;
  background-color: ${(props) =>
    props.preview ? "rgba(0,0,0, 0.5)" : CARD_COLOR};
  flex-direction: column;
  justify-content: space-between;
  margin: 0px;
  position: absolute;
  padding-top: ${(props) => (props.size === "big" ? 8 * pt : 6 * pt)}px;
  padding-left: ${(props) => (props.size === "big" ? 8 * pt : 6 * pt)}px;
  padding-right: ${(props) => (props.size === "big" ? 8 * pt : 6 * pt)}px;
  padding-bottom: ${(props) => (props.size === "big" ? 8 * pt : 6 * pt)}px;
`;

export const Avatar = styled.Image`
  height: ${(props) => (props.size === "big" ? 29 * pt : 27 * pt)}px;
  width: ${(props) => (props.size === "big" ? 29 * pt : 27 * pt)}px;
  border-radius: ${(props) =>
    props.size === "big" ? (29 / 2) * pt : (27 / 2) * pt}px;
`;

export const AvatarBorderGradient = styled(LinearGradient)`
  height: ${(props) => (props.size === "big" ? 24 * pt : 32 * pt)}px;
  width: ${(props) => (props.size === "big" ? 24 * pt : 32 * pt)}px;
  border-radius: ${(props) =>
    props.size === "big" ? (24 / 2) * pt : (32 / 2) * pt}px;
  align-items: center;
  justify-content: center;
`;

export const AvatarBorder = styled.View`
  height: ${32 * pt}px;
  width: ${32 * pt}px;
  border-radius: ${(32 * pt) / 2}px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

export const CardName = styled.Text`
  font-family: ${HEADER_FONT_CARD};
  text-align: left;
  margin-top: 25%;
  margin-left: 4px;
  margin-bottom: 1px;
  font-size: ${13 * pt}px;
  color: ${WHITE};
  shadow-color: #000;
  text-shadow-color: #000;
  text-shadow-offset: 0px 2px;
  text-shadow-radius: 4px;
  elevation: 0;
`;
export const TickBorder = styled.View`
  height: ${27 * pt}px;
  width: ${27 * pt}px;
  border-radius: ${(27 * pt) / 2}px;
  background-color: ${(props) => (props.tick ? WHITE : "transparent")};
  border: ${1 * pt}px solid ${WHITE};
  margin-top: 4px;
  margin-right: 4px;
  align-items: center;
  justify-content: center;
`;

export const TopContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
