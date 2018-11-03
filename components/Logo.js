import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>VICE</Text>
        <Text style={styles.tag}>Beat Your Vice</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 180
  },
  title: {
    color: '#F20B70',
    fontSize: 80,
    paddingTop: 40,
    fontWeight: 'bold'
  },
  tag: {
    color: '#F2E90B',
    fontSize: 20
  }
});

export default Logo;
