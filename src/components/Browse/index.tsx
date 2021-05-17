//import liraries
import React, { Component,  } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

// create a component
const Browse = (props) => {
  const { data, route } = props;
  const navigation = useNavigation();
//   console.log(data.item.id);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Movies", { cat: data });
      }}
      style={styles.container}
    >
      <Text style={styles.title}>{data.item?.name}</Text>
      <FlatList
        data={route}
        renderItem={(item) => (
          <View >
              <Text>Image</Text>
            {/* <View data={item} key={item.id} touched={true} /> */}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </TouchableOpacity>
  );
};;

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 
        // justifyContent: 'center',
        marginVertical: 20,
        // alignItems: 'center',
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        paddingLeft: 15
    }
});

//make this component available to the app
export default Browse;
