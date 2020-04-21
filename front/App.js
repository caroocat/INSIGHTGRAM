import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet, SafeAreaView} from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from "@react-navigation/stack";
import * as Font from "expo-font";


import configureStore from "./redux/index";
import LoginForm from "./src/components/Login/LoginForm";
import HomescreenContainer from "./src/components/Homescreen/HomescreenContainer";
import FeedsStoriesContainer from "./src/components/Stories/FeedsStoriesContainer";
import MyFeedsContainer from "./src/components/MyFeeds/MyFeedsContainer";
import SubscribeContainer from "./src/components/Subscribe/SubscribeContainer";
import {
  Appearance,
  AppearanceProvider,
  useColorScheme,
} from "react-native-appearance";
import styles from "./src/styles/appStyles";
import { BACKGROUND, TEXT, HEADER_FONT_TITLE } from "./src/styles/index";

const store = configureStore();
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function FeedsStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomescreenContainer}
        options={{
          title: "Insightgram",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: TEXT,
            fontFamily: HEADER_FONT_TITLE,
          },
          transparentCard: true,
          headerStyle: {
            borderBottomColor: "#fff",
            backgroundColor: BACKGROUND,
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen
        name="MyFeeds"
        component={MyFeedsContainer}
        options={{
          title: "My Feeds",
          headerTitleAlign: "center",
          transparentCard: true,
          headerTitleStyle: {
            color: TEXT,
            fontFamily: HEADER_FONT_TITLE,
          },
          headerStyle: {
            borderBottomColor: "#fff",
            backgroundColor: BACKGROUND,
            borderBottomWidth: 0,
          },
          headerLeft: () => (
            <View>
              <styles.Container>
                <Ionicons
                  name="ios-arrow-back"
                  color="#007aff"
                  size={25}
                  onPress={() => navigation.navigate({ name: "Home" })}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate({ name: "Home" })}
                >
                  <styles.HeaderButtomText>Cancel</styles.HeaderButtomText>
                </TouchableOpacity>
              </styles.Container>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Feeds"
        component={SubscribeContainer}
        options={{
          title: "Subscribe",
          headerTitleAlign: "center",
          headerTitleStyle: { color: TEXT, fontFamily: HEADER_FONT_TITLE },
          headerStyle: {
            borderBottomColor: "#a3a3a34d",
            borderBottomWidth: 0.5,
            backgroundColor: BACKGROUND,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate({ name: "Home" })}
            >
              <styles.HeaderButtomText>Cancel</styles.HeaderButtomText>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <View>
              <styles.Container>
                <Ionicons
                  name="ios-arrow-back"
                  color="#007aff"
                  size={25}
                  onPress={() => navigation.navigate({ name: "Home" })}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate({ name: "Home" })}
                >
                  <styles.HeaderButtomText>Home</styles.HeaderButtomText>
                </TouchableOpacity>
              </styles.Container>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      "SFProText-bold": require("./assets/fonts/SFProText-Bold.ttf"),
      "SFProText-regular": require("./assets/fonts/SFProText-Regular.ttf"),
      "SFProText-semi-bold": require("./assets/fonts/SFProText-Semibold.ttf"),
      "SFProText-medium": require("./assets/fonts/SFProText-Medium.ttf"),
    });

    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <Provider store={store}>
      <AppearanceProvider>
          <NavigationContainer>
            <RootStack.Navigator headerMode="none" initialRouteName="Login">
              <RootStack.Screen
                name="Login"
                component={LoginForm}
                options={{ transparentCard: true }}
              />
              <RootStack.Screen
                name="Stories"
                component={FeedsStoriesContainer}
                options={{
                  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                }}
              />
              <RootStack.Screen
                name="FeedsStack"
                component={FeedsStack}
                options={{ transparentCard: true }}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </AppearanceProvider>
    </Provider>
  );
}

export default () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: BACKGROUND,
    },
  });
  return <App style={styles} />;
};


const config = {
  animation: 'spring',
  config: {
    timing: 5000,
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};