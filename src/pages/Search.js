import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';

import SearchBody from './SearchBody';
import Loader from '.././components/Loader';
import { Header, Item, Icon, Input } from 'native-base';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { pokeSearch: '', loading: false, data: { } };
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header searchBar rounded >
          <Item>
            <Icon name="ios-search" onPress={ () => this.searchPokemon() } />
            <Input value={  this.state.pokeSearch } 
              onChangeText={(pokeSearch) => this.setState({ pokeSearch })}
              placeholder="search pokemon..." />
          </Item>
      </Header>
        { this.renderBody() }
      </View>
    );
  }

  /* METHODS */
  renderBody() {
    if(this.state.loading) {
      return ( <Loader /> )
    } else {
      return ( <SearchBody data={ this.state.data }/> )
    }
  }

  searchPokemon() {
    this.setState({ loading: true })
    let self = this;
    axios.get(`http://pokeapi.co/api/v2/pokemon/${this.state.pokeSearch.toLowerCase()}/`)
    .then((res) => {
      // console.log('res ', res.data);
      self.setState({ data: res.data, loading: false });
    }).catch((err) => console.log(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});