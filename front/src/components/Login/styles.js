import styled from "styled-components";
import {
  INPUT_BACKGROUND,
  INPUT_COLOR,
  WHITE,
  LIGHT_BLUE,
  TEXT,
  BACKGROUND,
} from "../../styles";

export const Container = styled.View`
  flex: 1;
  background-color: ${BACKGROUND};
`;

export const Input = styled.TextInput`
  height: 35px;
  background-color: ${INPUT_BACKGROUND};
  margin-bottom: 20px;
  color: #2c3e50;
  width: 280px;
  border-radius: 13px;
  padding-horizontal: 10px;
  color: ${INPUT_COLOR};
`;

export const Button = styled.TouchableHighlight`
  height: 35px;
  padding-top: 2%;
  background-color: ${LIGHT_BLUE};
  width: 280px;
  border-radius: 13px;
  padding-horizontal: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${WHITE};
  font-weight: 600;
  font-size: 15px;
  text-align: center;
`;

export const ContainerForm = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${TEXT};
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 15%;
`;
