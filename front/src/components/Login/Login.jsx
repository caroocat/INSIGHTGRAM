import React, { Component } from "react";
import { Input, Button, ButtonText, ContainerForm, Title } from "./styles";
import { PLACEHOLDER_COLOR } from "../../styles";

export default ({
  changeEmail,
  changePassword,
  buttonPressed,
  email,
  password,
}) => {
  return (
    <ContainerForm>
      <Title>INSIGHTGRAM</Title>
      <Input
        autoCapitalize="none"
        onChangeText={(emailVal) => changeEmail(emailVal)}
        placeholder="Email"
        value={email}
        placeholderTextColor={PLACEHOLDER_COLOR}
        style={{ opacity: 0.32 }}
      />
      <Input
        secureTextEntry={true}
        onChangeText={(passwordVal) => changePassword(passwordVal)}
        placeholder="Contraseña"
        value={password}
        placeholderTextColor={PLACEHOLDER_COLOR}
        style={{ opacity: 0.32 }}
      />
      <Button onPress={() => buttonPressed()}>
        <ButtonText>Confirmar</ButtonText>
      </Button>
    </ContainerForm>
  );
};
