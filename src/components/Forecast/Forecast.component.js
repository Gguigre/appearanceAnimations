// @flow

import React, { Component } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { theme } from "../../theme";
import { getImageFromWeatherType } from "../../lib/getImageFromWeatherType";
import { ForecastItem } from "./components";

type PropsType = {
  forecasts?: ?(ForecastType[])
};

export class Forecast extends Component<PropsType> {
  renderForecast = ({ item, index }: { item: ForecastType, index: number }) => (
    <ForecastItem forecast={item} index={index} />
  );
  forecastKeyExtractor = (item: ForecastType) => item.date;
  render() {
    const { forecasts } = this.props;
    return (
      <FlatList
        data={forecasts}
        renderItem={this.renderForecast}
        keyExtractor={this.forecastKeyExtractor}
      />
    );
  }
}
