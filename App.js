import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(32, 32, 32)'
  }
});
