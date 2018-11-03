import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';

class Calculator extends Component {
  state = {};

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter Your Vice Here"
          placeholderTextColor="#F20B70"
          autoCapitalize="none"
          onChangeText={this.props.handleVice}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Amount You Spend"
          placeholderTextColor="#F20B70"
          autoCapitalize="none"
          onChangeText={this.handleAmount}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.props.handleSubmitButton}
        >
          <Text style={styles.submitButtonText}> SUBMIT </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Calculator;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 80,
    borderColor: '#F20B70',
    borderWidth: 2,
    color: 'white',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 30
  },
  submitButton: {
    backgroundColor: '#F20B70',
    padding: 30,
    margin: 30,
    marginTop: 130,
    marginBottom: 125,
    justifyContent: 'center',
    borderRadius: 10
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  }
});
