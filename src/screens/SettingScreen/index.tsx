import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import ScreenContainer from '../../components/ScreenContainer';
import { Text, View } from '../../components/Themed';

export default function SettingsScreen() {
  return (
    <ScreenContainer>
      <View style={styles.container}>
       <Text>Setting Screen</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
