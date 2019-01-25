// @flow

import React, { Component, Fragment } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { getImageFromWeatherType } from "../../lib/getImageFromWeatherType";
import { theme } from "../../theme";
import { TransitionView } from "../TransitionView";

type PropsType = {
  forecast: ?ForecastType
};

export class Overview extends Component<PropsType> {
  render() {
    const { forecast } = this.props;
    const today = new Date();
    return (
      <TransitionView style={styles.container} animation="slideInDown">
        {forecast && (
          <TransitionView style={styles.content}>
            <View>
              <Text style={[theme.typo.mediumText, styles.whiteText]}>
                {today.toDateString()}
              </Text>
              <Text style={[theme.typo.veryBigText, styles.whiteText]}>
                {`${forecast.maxTemperature}°`}
              </Text>
              <Text style={[theme.typo.bigText, styles.whiteText]}>
                {`${forecast.minTemperature}°`}
              </Text>
            </View>
            <View style={styles.weatherTypeContainer}>
              <Image
                source={getImageFromWeatherType(forecast.weatherType)}
                style={styles.weatherTypeImage}
              />
              <Text style={[theme.typo.mediumText, styles.whiteText]}>
                {forecast.weatherType.replace(/^\w/, c => c.toUpperCase())}
              </Text>
            </View>
          </TransitionView>
        )}
      </TransitionView>
    );
  }
}

const styles = StyleSheet.create({
  whiteText: {
    color: "white"
  },
  container: {
    paddingTop: 64,
    paddingBottom: 32,
    height: 250,
    backgroundColor: "#1050AA"
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  weatherTypeImage: {
    width: 130,
    height: 130
  },
  weatherTypeContainer: {
    alignItems: "center",
    justifyContent: "space-between"
  }
});
