import React, {useState, useEffect} from 'react';
import { StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Browse from '../../components/Browse/';
import { fetchData } from "../../functions/api";
import LoadingIcon from '../../components/LoadingIcon';
import NetworkConnection from '../../components/NetworkConnection';
import ScreenContainer from "../../components/ScreenContainer";
const HomeScreen = ()=> {
  const [browse, setBrowse] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setisFetching] = useState(false);

  const link = `http://54.167.235.101/wp-json/wp/v2/browse?per_page=30&page=${page}`;

   useEffect(() => {
    fetchData(link, browse, setBrowse, setisFetching);
   }, [page]);
  if (browse.length === 0) {
    return <LoadingIcon type="small" />;
  } else {
    return (
      <ScreenContainer>
          <FlatList
            data={browse}
            renderItem={(item) => (
              <View>
                <Browse data={item} key={item.id} touched={true} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={() => {
              setisFetching(true);
              setPage(page + 1);
            }}
            onEndReachedThreshold={0.9}
          />
          <StatusBar style="auto" />
          {/* {isFetching === true && <LoadingIcon type="buttom" />} */}
      </ScreenContainer>
    );
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 100,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 20,
    margin: 5,
  }
});
