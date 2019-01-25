// @flow

import React, { Component } from "react";
import { View, FlatList, Image, StyleSheet, Slider } from "react-native";
import { NavigationScreenProps } from "react-navigation";

import { theme } from "../../theme";
import { TransitionView } from "../../components";

type PropsType = NavigationScreenProps;
type StateType = {
  numColumns: number
};

export class ImagesGrid extends Component<PropsType, StateType> {
  constructor() {
    super();
    this.state = {
      numColumns: 2
    };
  }

  renderImage = ({ item, index }: { item: any, index: number }) => {
    return (
      <TransitionView index={index} style={styles.imageContainer}>
        <Image
          source={theme.images[item]}
          resizeMode="contain"
          style={styles.image}
        />
      </TransitionView>
    );
  };

  imageKeyExtractor = (item: any) => item;

  onNumColumnsChange = (numColumns: number) => {
    this.setState({
      numColumns: Math.floor(numColumns)
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          key={this.state.numColumns}
          numColumns={this.state.numColumns}
          keyExtractor={this.imageKeyExtractor}
          data={Object.keys(theme.images)}
          renderItem={this.renderImage}
        />
        <View style={styles.sliderContainer}>
          <Slider
            maximumValue={5}
            minimumValue={2}
            step={0}
            onValueChange={this.onNumColumnsChange}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: "#F5FCFF",
    borderWidth: 1,
    borderColor: "#1050AA",
    alignItems: "center",
    justifyContent: "center"
  },
  sliderContainer: { position: "absolute", bottom: 32, left: 32, right: 32 },
  container: {
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
