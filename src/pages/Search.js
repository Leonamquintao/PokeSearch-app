import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import SearchBody from './SearchBody';
import Loader from '.././components/Loader';
import HeaderComponent from '.././components/HeaderComponent';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    return (
      <View style={ styles.container }>
        <HeaderComponent />
        { this.renderBody() }
      </View>
    );
  }

  /* METHODS */
  renderBody () {
    if(this.state.loading) {
      return ( <Loader /> )
    } else {
      return ( <SearchBody /> )
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});