// @flow

import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { theme } from "../../../../theme";
import { getImageFromWeatherType } from "../../../../lib/getImageFromWeatherType";
import { TransitionView } from "../../../TransitionView";

type PropsType = {
  forecast: ForecastType,
  index: number
};

export class ForecastItem extends Component<PropsType> {
  render() {
    const { forecast, index } = this.props;
    const image = getImageFromWeatherType(forecast.weatherType);
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Image source={image} style={styles.weatherTypeImage} />
          <View>
            <Text style={theme.typo.mediumText}>{forecast.date}</Text>
            <Text style={theme.typo.smallText}>
              {forecast.weatherType.replace(/^\w/, c => c.toUpperCase())}
            </Text>
          </View>
        </View>
        <View>
          <Text style={theme.typo.mediumText}>{`${
            forecast.maxTemperature
          }°`}</Text>
          <Text style={theme.typo.smallText}>{`${
            forecast.minTemperature
          }`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderBottomColor: "#aaaaaa",
    borderBottomWidth: 0.3,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  weatherTypeImage: {
    width: 50,
    height: 50,
    marginRight: 16
  }
});
