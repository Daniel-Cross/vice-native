import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './Logo';
import Calculator from './Calculator';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vice: '',
      amount: 0,
      item: '',
      save: 0,
      viceInput: false,
      showItemResult: false,
      loading: true,
      showResult: false,
      yearTotal: 0,
      renderResult: null,
      renderItemResult: null,
      showMore: false,
      showMoreButton: false
    };
  }

  handleVice = text => {
    this.setState({ vice: text });
  };

  handleAmount = text => {
    this.setState({ amount: text });
  };

  handleSubmitButton = () => {
    if (
      this.state.amount && this.state.vice
        ? this.setState(state => ({ viceInput: state.viceInput }))
        : null
    );

    this.setState({ renderResult: true });

    this.setState({ yearTotal: this.state.amount * 52 });

    setTimeout(
      () => this.setState({ renderResult: false, showResult: false }),
      5000
    );

    setTimeout(
      () => this.setState({ showResult: true, showMoreButton: true }),
      5000
    );
  };

  render() {
    return (
      <View>
        <Logo />
        <Calculator
          handleAmount={this.handleAmount}
          handleVice={this.handleVice}
          handleSubmitButton={this.handleSubmitButton}
        />
      </View>
    );
  }
}

export default Home;
