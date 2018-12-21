import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={ styles.view }>
        <Text style={ styles.head }>{ this.props.headerText }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff1f4',
    height: Platform.OS === 'android' ? 60: 64,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
  },
  head: {
    fontSize: 22,
  },
});
