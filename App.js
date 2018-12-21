import React, { Component } from 'react';
import { StyleSheet, Platform, View, Image, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Image source={ require('./src/assets/img/landing.jpg') } style={styles.bkContainer} />
          <View style={ styles.innerView}>
            <Text style={ styles.title }>Welcome to Pokesearch </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24: 10
  },
  innerView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'blue',
    alignItems: 'center' 
  },
  bkContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, 
    justifyContent: 'center',
    alignItems: 'center',
  }
});