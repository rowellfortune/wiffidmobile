//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Thumbnail from "../components/Thumbnail";
import { Audio, Video } from "expo-av";
import HTML from "react-native-render-html";
// import SignlePost from "../../components/NewsComponents/SingnlPost";

// create a component
const SignleMovieScreen = (props) => {
  const { route } = props;
  const data = route.params.data;
  const post = "Posts Deatil";
  return (
    <View style={styles.container}>
      <ScrollView>
        <Thumbnail data={data} touched={false} />
        {/* <SignlePost data={post} /> */}
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default SignleMovieScreen;

export const screenOptions = ({ navigation, route }) => ({
  headerTitle: route.params?.data.item.title.rendered,
});
