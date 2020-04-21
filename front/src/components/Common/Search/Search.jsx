import React from "react";
import { View } from "react-native";
import { Input, SearchContainer } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { BACKGROUND, TEXT, PLACEHOLDER_COLOR } from "../../../styles";

export default ({ handleSearch, handleTarget, value }) => {
  return (
    <View style={{ backgroundColor: BACKGROUND, paddingBottom: "1%" }}>
      <SearchContainer>
        <AntDesign
          name="search1"
          style={{ color: TEXT, opacity: 0.32 }}
          size={20}
        />
        <Input
          placeholder="Search"
          placeholderTextColor={PLACEHOLDER_COLOR}
          onChange={(evt) => handleSearch(evt, handleTarget)}
          defaultValue={value}
        />
      </SearchContainer>
    </View>
  );
};
