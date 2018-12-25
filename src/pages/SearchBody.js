import React, { Component } from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';

export default class SearchBody extends Component {
  constructor(props) {
    super(props);
    console.log('this.props.data ', this.props.data)
  }
  render() {

    var pokemon = this.props.data;
    console.log('pokemon ', pokemon)
    if(Object.getOwnPropertyNames(pokemon).length === 0) { return <View /> }
    
    return (
      <ScrollView>
        <Text style={styles.header}> 
          #:{ pokemon.id } - { pokemon.name.toUpperCase() }
        </Text>
        <View style={styles.bodyStyle}>
          <Image style={styles.sprite} source={{ uri: pokemon.sprites.front_default }} />
        </View>
      </ScrollView>
    );
   
  }

  /* METHODS */
  

}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center'
  },
  bodyStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  sprite: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center'
  }
});