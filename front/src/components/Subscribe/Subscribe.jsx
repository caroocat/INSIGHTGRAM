import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./style";
import Navigation from "./Content/Navigation";
import Search from "../Common/Search/Search";

export default ({ feeds, handlePress, loading, handleSearch }) => {
  return (
    <View style={{ flex: 1 }}>
      <Search handleSearch={handleSearch} handleTarget={"feeds"} />
      <Navigation feeds={feeds} />
      <styles.Done activeOpacity={1} onPress={() => handlePress()}>
        {loading ? (
          <ActivityIndicator color={"#fff"} size={"small"} />
        ) : (
          <styles.ButtonText>Done</styles.ButtonText>
        )}
      </styles.Done>
    </View>
  );
};
