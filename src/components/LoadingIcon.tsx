//import liraries
import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const LoadingIcon = (props) => {
  const loadingStyle =
    props.type == "normal"
      ? styles.loadingContainer
      : styles.loadingButtomContainer;
  return (
    <View style={loadingStyle}>
      <ActivityIndicator size="small" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  loadingButtomContainer: {
    flex: 1,
    // justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginBottom: 20,
  },
});

//make this component available to the app
export default LoadingIcon;
