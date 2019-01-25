/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { type NavigationScreenProps } from "react-navigation";
import { Overview, Forecast } from "../../components";
import { theme } from "../../theme";

type PropsType = NavigationScreenProps;
export class Weather extends Component<PropsType> {
  navigateToGrid = () => this.props.navigation.navigate("images");

  renderGoToGridPageButton = () => {
    return (
      <TouchableOpacity onPress={this.navigateToGrid}>
        <View style={styles.button}>
          <Text style={[theme.typo.mediumText, styles.buttonLabel]}>Next</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Overview />
        <Forecast />
        {this.renderGoToGridPageButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    backgroundColor: "#1050AA",
    borderWidth: 4,
    borderColor: "#00308A",
    alignItems: "center",
    left: 64,
    right: 64,
    position: "absolute",
    bottom: 32
  },
  buttonLabel: {
    color: "white"
  }
});
