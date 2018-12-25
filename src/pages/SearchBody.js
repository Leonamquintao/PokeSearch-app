import React, { Component } from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'native-base';

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

        <View style={styles.info}>

          <ListItem itemDivider>
            <Text style={styles.title}>Size: </Text>
          </ListItem>

          <ListItem>
            <Text>Weight: {pokemon.weight}Kg</Text>
          </ListItem>

          <ListItem>
            <Text>Height: {pokemon.height/10}Mts</Text>
          </ListItem>

          <ListItem itemDivider>
            <Text style={styles.title}>Abilities:( Moves {pokemon.moves.length} )</Text>
          </ListItem>

          <List dataArray={pokemon.abilities} renderRow={(item) =>
            <ListItem>
              <Text>{item.ability.name}</Text>
            </ListItem>
          }>

          </List>
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
  },
  info: {
    flex: 1,
    backgroundColor: '#fff',
    opacity: 0.8
  },
  title: {
    fontWeight: 'bold'
  }
});