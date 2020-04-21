import styled from "styled-components";
import { HEADER_BUTTOM_COLOR, HEADER_FONT_BUTTOM } from "../styles/index";
const styles = {};

styles.Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

styles.HeaderButtomText = styled.Text`
  font-size: 18px;
  font-family: ${HEADER_FONT_BUTTOM};
  color: ${HEADER_BUTTOM_COLOR};
  padding-right: 22px;
  padding-left: 10px;
`;

export default styles;
