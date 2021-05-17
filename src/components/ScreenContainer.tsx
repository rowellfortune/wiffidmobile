//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NetworkConnection from "./NetworkConnection/";

// create a component
const ScreenContainer = (props) => {
  return <SafeAreaProvider>{props.children}
  <NetworkConnection />
  </SafeAreaProvider>;
};

//make this component available to the app
export default ScreenContainer;

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  ACcontainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
});
