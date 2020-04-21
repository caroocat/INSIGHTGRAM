import React, { Component, useState, useEffect } from "react";
import { TabContainer, Separator, ToggleSeparator } from "./style";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import {
  BACKGROUND,
  INACTIVE_TAB_COLOR,
  TEXT,
  LINE_COLOR,
} from "../../../styles";
import styles from "./style";

export default ToggleTab = (props) => {
  const {
    navigationState,
    navigation,
    activeTintColor,
    inactiveTintColor
  } = props;
  const activeTabIndex = navigation.state.index;

  return (
    <View style={{ backgroundColor: BACKGROUND }}>
      <styles.TabContainer>
        {navigationState.routes.map((route, index) => {
          const isRouteActive = index === activeTabIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
          
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                
                navigation.navigate(route.routeName);
              }}
              key={route.routeName}
            >
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: `${isRouteActive ? TEXT : INACTIVE_TAB_COLOR}`,
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}
                >
                  {route.routeName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </styles.TabContainer>
      <styles.Separator>
        <styles.ToggleSeparator show={activeTabIndex===0} />
        <styles.ToggleSeparator show={activeTabIndex===1} />
      </styles.Separator>
    </View>
  );
};



