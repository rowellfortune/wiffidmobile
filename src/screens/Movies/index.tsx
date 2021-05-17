//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LoadingIcon from '../../components/LoadingIcon';
import {fetchData } from '../../functions/api';
import Thumbnail from '../../components/Thumbnail';
import NetworkConnection from '../../components/NetworkConnection';

// create a component
const MoviesScreen = ({route}) => {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [isFetching, setisFetching] = useState(false);
    const cat = route.params.cat.item.id;
   
    //   const link = `https://unitednews.sr/wp-json/wp/v2/posts?_embed&per_page=5&page=${page}&categories=${cat}`;
    const link = `http://54.167.235.101/wp-json/wp/v2/content?per_page=5&page=${page}&browse=${cat}`;

    useEffect(() => {
      fetchData(link, posts, setPosts, setisFetching);
    }, [page]);

    if (posts.length === 0) {
        return <LoadingIcon type="small" />;
    } else {
        return (
            <View>
                <Text>MoviesScreen{cat}</Text>
                <FlatList
                    data={posts}
                    renderItem={(item) => (
                        <View style={{ alignItems: "center" }}>
                        <Thumbnail data={item} key={item.id} touched={true} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReached={() => {
                        setisFetching(true);
                        setPage(page + 1);
                        // console.warn("Reached");
                    }}
                    onEndReachedThreshold={0.9}
                />
                
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MoviesScreen;

export const screenOptions = ({ navigation, route }) => ({
//   headerTitle: "News",
  headerTitle: route.params?.cat.item.name,
});
