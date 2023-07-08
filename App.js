import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { KeyBoard } from './src/components/KeyBoard';
import { Display } from './src/components/Display';

export default function App() {
  return (
    <View style={styles.container}>
      <Display />
      <KeyBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
