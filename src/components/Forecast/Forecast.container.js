// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Forecast } from "./Forecast.component";
import { getRandomWeather } from "../../lib/getRandomWeather";

const FORECAST_LENGTH = 20;

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

type StateType = { forecasts: ForecastType[] };

type PropsType = {};

export class ForecastContainer extends Component<PropsType, StateType> {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // simulate network request
    setTimeout(() => {
      const today = new Date();
      const forecasts = new Array(FORECAST_LENGTH).fill(0).map((_, i) => ({
        ...getRandomWeather(),
        date: addDays(today, i + 1).toDateString()
      }));
      this.setState({ forecasts });
    }, 1000);
  }

  render() {
    return <Forecast forecasts={this.state.forecasts} />;
  }
}
