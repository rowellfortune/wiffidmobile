/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: "home",
            },
          },
          Search: {
            screens: {
              Search: "search",
            },
          },
          Movies: {
            screens: {
              Movies: "movies",
            },
          },
          Settings: {
            screens: {
              Settings: "settings",
            },
          },
          Single: {
            screens: {
              Single: "single",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
