// @flow

import { createStackNavigator, createAppContainer } from "react-navigation";
import * as pages from "../pages";

const AppNavigator = createStackNavigator(
  {
    weather: {
      screen: pages.Weather,
      navigationOptions: {
        header: null
      }
    },
    images: {
      screen: pages.ImagesGrid
    }
  },
  {
    initialRouteName: "weather"
  }
);

export const RootContainer = createAppContainer(AppNavigator);
