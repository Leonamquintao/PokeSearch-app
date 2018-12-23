import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Item, Icon, Input } from 'native-base';

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { pokeSearch: '' };
  }

  render() {
    return (
      <Header searchBar rounded >
        <Item>
          <Icon name="ios-search" onPress={ this.props.propMethod } />
          <Input value={  this.state.pokeSearch } 
            onChangeText={(pokeSearch) => this.setState({ pokeSearch })}
            placeholder="search pokemon..." />
        </Item>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  
});
