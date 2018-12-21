import React, { Component } from 'react';
import { StyleSheet, Platform, View, Image, Text, Button } from 'react-native';

var backgroundImage = require('.././assets/img/landing.jpg');

export default class Landing extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Image source={ backgroundImage } style={styles.bkContainer} />
          <View style={ styles.innerView }>
            <Text style={ styles.title }>Welcome to Pokesearch </Text>
            <Button onPress={ this.redirect.bind(this) } title="Enter Here!" color="#3544a3" />
          </View>
      </View>
    );
  }

  /* METHODS */
  redirect() {
    alert('Clicked Here!!!')
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24: 4
  },
  innerView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#3544a3',
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
    height: '100%',
  }
});