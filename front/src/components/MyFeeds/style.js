import styled from "styled-components";
import { TEXT } from "../../styles/index";

const styles = {};

styles.Grid = styled.FlatList`
  margin-left: 13px;
  margin-bottom: 10px;
`;

styles.ViewMessage = styled.View`
  display: flex;
  justify-content: center;
  text-align: center;
`;
styles.TextMessage = styled.Text`
  font-size: 24px;
  color: ${TEXT};
  margin-top: 45px;
  text-align: center;
`;

export default styles;
