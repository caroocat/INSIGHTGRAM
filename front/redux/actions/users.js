import { LOGIN_USER } from "../constants";
import axios from "axios";
import { ip, loginUrl, tokenUrl } from "../../config";

const setUser = token => {
  return { type: LOGIN_USER, token };
};

export const loginUser = (email, password) => dispatch => {
  return axios({
    method: "POST",
    url: `http://${ip + loginUrl}`,
    data: {
      email: email,
      password: password
    }
  })
    .then(response => {
      dispatch(setUser(response.data));
      return response.data;
    })
    .catch(error => error.response.status);
};

export const validateToken = token => dispatch => {
  return axios({
    method: "GET",
    url: `http://${ip + tokenUrl}`,
    headers: {
      token: token
    }
  })
    .then(response => {
      dispatch(setUser(response.data));
      return response.data;
    })
    .catch(error => error.response.status);
};
