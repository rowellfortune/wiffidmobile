import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import HTML, { contentWidth } from "react-native-render-html";
import { useNavigation, useRoute } from "@react-navigation/native";
import Navigation from "./navigation";
// import Moment from "moment";

export default function Thumbnail(props) {
  
  const { data, touched, route } = props;
  const navigation = useNavigation();
  const Container = touched ? TouchableOpacity : View;

  console.log(route);
 
    return (
      <Container
        style={
          touched ? styles.thumbnailContainer : styles.thumbnailContainerSingle
        }
        onPress={() => {
          navigation.navigate("Single", { data });
        }}
      >
        <View>
          <Image
            style={styles.imageContainer}
            source={{
              uri: data.item?.images.landscape.url,
            }}
          />
        </View>
        <View>
          <Text
            style={
              touched ? styles.titleContainer : styles.titleContainerSingle
            }
          >
            {data.item?.title.rendered.replace(/<\/?[^>]+(>|s)/g, "")}
          </Text>
          <Text style={styles.date}>
            {/* On {Moment(data.item?.date).format("MMM D YYYY")} */}
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <HTML
            source={{
              html: touched
                ? data.item?.excerpt.rendered
                : data.item?.link,
            }}
            contentWidth={contentWidth}
          />
        </View>
      </Container>
    );
}

const styles = StyleSheet.create({
  thumbnailContainer: {
    width: "95%",
    backgroundColor: "#fff",
    marginVertical: 10,
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#fdb500",
  },
  thumbnailContainerSingle: {
    // width: "100%",
    backgroundColor: "#fff",
    marginVertical: 10,
    elevation: 4,
    paddingHorizontal: 4,
  },
  titleContainer: {
    fontSize: 18,
    paddingHorizontal: 10,
    marginVertical: 4,
  },
  titleContainerSingle: {
    fontSize: 24,
    paddingHorizontal: 10,
  },
  contentContainer: { paddingHorizontal: 10 },
  imageContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    borderRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  date: {
    fontSize: 12,
    color: "#ccc",
    paddingHorizontal: 10,
  },
});
