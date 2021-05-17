//import liraries
import React, { Component, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  StatusBar,
} from "react-native";
import {fetchData} from '../../functions/api';
import SearchBar from '../../components/SearchBar';
import Thumbnail from "../../components/Thumbnail";
import LoadingIcon from "../../components/LoadingIcon";
import ScreenContainer from "../../components/ScreenContainer";
import { Searchbar } from "react-native-paper";
import NetworkConnection from '../../components/NetworkConnection';
// create a component, 
const SearchScreen = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setisFetching] = useState(false);
  const [term, setTerm] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);

    // const link = `https://unitednews.sr/wp-json/wp/v2/categories?per_page=30&page=${page}`;
    const link = `http://54.167.235.101/wp-json/wp/v2/content?_embed&per_page=20&page=${page}&search=${term}`;

    return (
      <ScreenContainer>
        <View style={styles.container}>
          <Searchbar
            placeholder="Zoeken"
            onChangeText={(text) => {
              if (searchTimeout) {
                clearTimeout(searchTimeout);
              }
              setTerm(text);
              setSearchTimeout(
                setTimeout(async () => {
                  const res = await fetch(link);
                  try {
                    const resData = await res.json();
                    setPosts(resData);
                  } catch (error) {
                    console.log(error);
                  }
                }, 3000)
              );
            }}
            value={term}
          />
          {/* <Text>Resulten voor {term}</Text> */}
          <FlatList
            data={posts}
            renderItem={(item) => (
              <View style={{ alignItems: "center" }}>
                <Thumbnail data={item} key={item.id} touched={true} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={() => {
              // setisFetching(true);
              // setPage(page + 1);
              // console.warn("Reached");
            }}
            onEndReachedThreshold={0.9}
          />
          <StatusBar style="dark" />
          {isFetching === true && <LoadingIcon type="bottom" />}
        </View>
      </ScreenContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },
  search: {
    width: "100%",
    // marginHorizontal: 50,
    top: 10,
    backgroundColor: "rgba(255,255,255, 0.9)",
    borderRadius: 50,
  },
});

//make this component available to the app
export default SearchScreen;
