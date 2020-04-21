import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import Login from "./Login";
import { Container } from "./styles";
import { connect } from "react-redux";
import { loginUser, validateToken } from "../../../redux/actions/users";
import {
  setItemStorage,
  getItemStorage,
} from "../../../assets/js/AsyncStorage";

const LoginForm = ({ loginUser, navigation, validateToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getItemStorage("@Token").then((token) => {
      validateToken(token).then((response) => {
        if (response == 401) {
          return;
        } else {
          navigation.replace("FeedsStack");
        }
      });
    });
  }, []);

  const changeEmail = (email) => {
    setEmail(email);
  };

  const changePassword = (password) => {
    setPassword(password);
  };

  const buttonPressed = () => {
    if (email && password) {
      loginUser(email, password).then((response) => {
        if (response == 401) {
          Alert.alert("Email o contraseña incorrecta");
        } else {
          setItemStorage("@Token", response).then(() => {
            navigation.replace("FeedsStack");
          });
        }
      });
    } else {
      Alert.alert("¡ERROR! Completá todos los campos");
    }
  };

  return (
    <Container>
      <Login
        changeEmail={changeEmail}
        changePassword={changePassword}
        buttonPressed={buttonPressed}
        email={email}
        password={password}
      />
    </Container>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    validateToken: (token) => dispatch(validateToken(token)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
