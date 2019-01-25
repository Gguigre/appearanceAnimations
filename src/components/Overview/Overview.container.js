// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Overview } from "./Overview.component";
import { getRandomWeather } from "../../lib/getRandomWeather";

type StateType = {
  forecast: ?ForecastType
};

type PropsType = {};

export class OverviewContainer extends Component<PropsType, StateType> {
  constructor() {
    super();
    this.state = { forecast: null };
  }

  componentDidMount() {
    // simulate network request
    setTimeout(() => {
      this.setState({ forecast: getRandomWeather() });
    }, 500);
  }

  render() {
    return <Overview forecast={this.state.forecast} />;
  }
}
