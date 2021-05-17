import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Thumbnail from "../../components/NewsComponents/Thumbnail";
import ScreenContainer from "../../components/SreenContainer";
import LoadingIcon from "../../components/LoadingIcon";
import { fetchData } from "../../functions/miscFunctions";
import { SceneMap } from "react-native-tab-view";

const AllPostScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setisFetching] = useState(false);
  // const cat = route.params?.cat.item.id;
  // const catName = route.params?.cat.item.name;

  // const link = `https://unitednews.sr/wp-json/wp/v2/posts?_embed&per_page=5&page=${page}&categories=${cat}`;
  const link = `https://unitednews.sr/wp-json/wp/v2/posts?_embed&per_page=5&page=${page}`;

  useEffect(() => {
    fetchData(link, posts, setPosts, setisFetching);
  }, [page]);

  // const renderScene = SceneMap(catName);

  if (posts.length === 0) {
    return <LoadingIcon type="small" />;
  } else {
    return (
      <ScreenContainer>
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
        <StatusBar style="auto" />
        {isFetching === true && <LoadingIcon type="bottom" />}
      </ScreenContainer>
    );
  }
};

export default AllPostScreen;

export const screenOptions = ({ navigation, route }) => ({
  headerTitle: "News",
  // headerTitle: route.params?.cat.item.name,
});
