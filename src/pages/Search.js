import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';

import SearchBody from './SearchBody';
import Loader from '.././components/Loader';
import HeaderComponent from '.././components/HeaderComponent';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { pokeSearch: '', loading: false, };
  }

  render() {
    return (
      <View style={ styles.container }>
        <HeaderComponent propMethod={ () => this.searchPokemon() } />
        { this.renderBody() }
      </View>
    );
  }

  /* METHODS */
  renderBody() {
    if(this.state.loading) {
      return ( <Loader /> )
    } else {
      return ( <SearchBody /> )
    }
  }

  searchPokemon() {
    let pokemon = this.state.pokeSearch.toLowerCase()
    console.log('pokemon => ', pokemon);
    this.setState({ loading: true })
    axios.get(`http://pokeapi.co/api/v2/pokemon/${this.state.pokemon.toLowerCase()}/`)
    .then((res) => {
      console.log('res ', res);
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});