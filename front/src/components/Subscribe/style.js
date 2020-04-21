import styled from "styled-components/native";
import { TEXT, LIGHT_BLUE, WHITE } from "../../styles/index";

const styles = {};

styles.Title = styled.Text`
  padding-top: 60px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: ${TEXT};
`;

styles.Done = styled.TouchableOpacity`
  background-color: ${LIGHT_BLUE};
  height: 60px;
  justify-content: center;
`;

styles.ButtonText = styled.Text`
  color: ${WHITE};
  font-size: 18px;
  text-align: center;
`;

export default styles;
