import styled from "styled-components";
import { TEXT, LINE_COLOR } from "../../../styles";

const styles = {};

styles.TabContainer = styled.View`
  width: 100%;
  margin-vertical: 12px;
  flex-direction: row;
  justify-content: center;
  padding-horizontal: 10px;
  align-items: center;
`;

styles.ItemText = styled.Text`
  font-size: 17px;
  padding-top: 15px;
  margin-bottom: -11px;
  padding-left: 16px;
  color: ${TEXT};
`;

styles.Separator = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 1px;
  background-color: ${LINE_COLOR};
`;

styles.ToggleSeparator = styled.View`
  width: 20%;
  height: 1px;
  background-color: ${(props) => (props.show ? TEXT : "transparent")};
`;

styles.TabText = styled.Text`
  font-family: "SFProText-medium";
  font-size: 14px;
  color: ${(props) => props.color};
  padding-left: 15px;
  padding-right: 15px;
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
