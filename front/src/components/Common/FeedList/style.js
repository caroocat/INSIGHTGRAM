import styled from "styled-components/native";
import { HEADER_FONT_GROUP_TITLE, TEXT } from "../../../styles/index";

export const Title = styled.Text`
  font-family: ${HEADER_FONT_GROUP_TITLE};
  padding-top: 5px;
  padding-bottom: 2px;
  font-size: 15px;
  padding-left: 10px;
  color: ${TEXT};
`;

export const List = styled.VirtualizedList`
  margin-left: 10px;
`;
