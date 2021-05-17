//import liraries
import React, { Component } from 'react';
import styles from "./styles";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Thumbnail from "../../components/Thumbnail";
import ScreenContainer from '../../components/ScreenContainer';
// import SignlePost from "../../components/NewsComponents/SingnlPost";

// create a component
const MovieDetailScreen = (props) => {
    const { route } = props;
    const data = route.params.data;
    const post = "Movie Deatil";

    return (
      <ScreenContainer>
        <View style={styles.container}>
          <ScrollView>
            <Thumbnail data={data} touched={false} />
          </ScrollView>
        </View>
      </ScreenContainer>
    );
};


//make this component available to the app
export default MovieDetailScreen;

export const screenOptions = ({ navigation, route }) => ({
  headerTitle: route.params?.data.item.title.rendered,
});
