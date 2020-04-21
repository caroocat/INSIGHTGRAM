import styled from "styled-components/native";
import {
  HEADER_FONT_GROUP_TITLE,
  INPUT_BACKGROUND,
  INPUT_COLOR,
} from "../../../styles/index";

export const SearchContainer = styled.View`
  margin: 13px 14px 0px 18px;
  border-radius: 13px;
  height: 35px;
  padding-horizontal: 13px;
  background-color: ${INPUT_BACKGROUND};
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  font-size: 17px;
  padding-left: 10px;
  font-family: ${HEADER_FONT_GROUP_TITLE};
  color: ${INPUT_COLOR};
`;
