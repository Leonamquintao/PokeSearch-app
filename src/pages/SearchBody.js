import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { List, ListItem } from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export default class SearchBody extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var pokemon = this.props.data;

    if(Object.getOwnPropertyNames(pokemon).length === 0) { return <View /> }
    
    return (
      <ImageBackground style={styles.background} source={ require('.././assets/img/background.png')}>
      <ScrollView>
        <Text style={styles.header}> 
          #{ pokemon.id } - { pokemon.name.toUpperCase() }
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
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    height: height,
    width: width,
  }, 
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  bodyStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sprite: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
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