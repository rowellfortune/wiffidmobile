/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
  Search: undefined;
};

export type HomeParamList = {
  Home: undefined;
  Movies: undefined;
  Single: undefined;
};

export type SettingParamList = {
  Settings: undefined;
};


export type SearchParamList = {
  Search: undefined;
  Single: undefined;
};

export type ApiData = {
  link: undefined;
  data: undefined;
  setData: undefined;
  setisFetching: undefined;
};
