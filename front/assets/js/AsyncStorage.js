import { AsyncStorage } from "react-native";

export const setItemStorage = (key, value) => {
  return AsyncStorage.setItem(key, value)
    .then(() => {
      console.log("Guardado en AsyncStorage");
    })
    .catch(err => console.log("No se puedo guardar en AsyncStorage"));
};

export const getItemStorage = key => {
  return AsyncStorage.getItem(key)
    .then(data => {
      return data;
    })
    .catch(err => console.log("Fallo"));
};

export const removeItemStorage = key => {
  return AsyncStorage.removeItem(key)
    .then(() => {
      console.log("Item removido del AsyncStorage");
    })
    .catch(err => console.log("No se puedo remover el item del AsyncStorage"));
};
