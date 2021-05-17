//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Network from "expo-network";
import NetInfo from "@react-native-community/netinfo";

// create a component
const NetworkConnection = () => {
  const [contented, setContent] = useState(false);

  const unsubscribe = NetInfo.addEventListener((state) => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
  });

  // To unsubscribe to these update, just use:
//   unsubscribe();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connecting .....</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    bottom: 0,
    // marginTop: 20,
    // position: 'absolute',
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#f00",
  },
  title: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    backgroundColor: "#f00",
    color: 'white',
    // fontWeight: 'bold',
    padding: 5
  },
});

//make this component available to the app
export default NetworkConnection;
