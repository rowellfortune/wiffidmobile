/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button } from "react-native-paper";

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen  from '../screens/Home/HomeScreen';
import MoviesScreen, {
  screenOptions as movieOptions
} from "../screens/Movies/";
import SingleMovieScreen from '../screens/SignleMovieScreen'
import SettingScreen from "../screens/SettingScreen";
import SearchScreen from "../screens/SearchScreen";

import MovieDetailScreen from "../screens/MovieDetailsScreen";
import {
  BottomTabParamList,
  HomeParamList,
  SettingParamList,
  SearchParamList,
} from "../../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const defaultOptions = ({ navigation, route }) => ({
  headerStyle: {
    backgroundColor: "#fdb500",
  },
  headerTitleStyle: {
    color: "#000",
  },
  headerRight: () => (
    <Button title="Zoeken" onPress={() => navigation.navigate("Search")}>
      <Ionicons name="search-outline" color={"#000"} size={20} />
    </Button>
  ),
});
export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" color={color} size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
      <HomeStack.Screen
        name="Movies"
        component={MoviesScreen}
        options={movieOptions}
      />
      <HomeStack.Screen
        name="Single"
        component={SingleMovieScreen}
        options={{ headerTitle: "Movies" }}
      />
    </HomeStack.Navigator>
  );
}

const SettingStack = createStackNavigator<SettingParamList>();

function SettingNavigator() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="Settings"
        component={SettingScreen}
        options={{ headerTitle: "Settings" }}
      />
    </SettingStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerTitle: "Search" }}
      />
      <SearchStack.Screen
        name="Single"
        component={MovieDetailScreen}
        options={{ headerTitle: "Details" }}
      />
    </SearchStack.Navigator>
  );
}
