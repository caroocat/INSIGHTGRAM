import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import AllFeedsToggle from "./AllFeedsToggle";
import MyFeedsToggle from "./MyFeedsToggle";
import ToggleTab from "./ToggleTab";

const ToggleFeeds = createMaterialTopTabNavigator(
  {
    ["See all"]: {
      screen: AllFeedsToggle,
    },
    ["My Feeds"]: {
      screen: MyFeedsToggle,
    },
  },
  {
    tabBarComponent: ToggleTab,
    tabBarOptions: {
      activeTintColor: "#000000",
      inactiveTintColor: "#A3A3A3",
    },
    initialRouteName: "See all",
  }
);

const Navigation = createAppContainer(ToggleFeeds);

export default Navigation;
