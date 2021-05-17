import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ term, onTermChange, onTermSubmit, placeholder }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconSearch} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder={placeholder}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
      <TouchableOpacity
        onPress={() => {
          console.warn("Search Menu");
        }}
      >
        <Feather name="menu" style={styles.iconMenu} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    // marginVertical: 10,
    backgroundColor: "#f0eeee",
    height: 50,
    // top: 60,
    borderRadius: 50,
    marginHorizontal: 15,
    flexDirection: "row",
    elevation: 5,
  },
  inputStyle: {
    width: "95%",
    flex: 1,
    fontSize: 20,
  },
  iconSearch: {
    fontSize: 30,
    alignSelf: "center",
    justifyContent: "center",
    margin: 10,
  },
  iconMenu: {
    fontSize: 30,
    alignSelf: "center",
    justifyContent: "center",
    margin: 8,
    marginEnd: 20,
  },
});

export default SearchBar;
