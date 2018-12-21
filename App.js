import React, { Component } from 'react';
import { View } from 'react-native';
import Landing from './src/pages/Landing';
import Search from './src/pages/Search';

export default class App extends Component {
  state = { rootPage: 'landing' }
  render() {
    return (
      <View style={{ flex: 1 }}>
        { this.redirectPage() }
      </View>
    );
  }

  /* METHODS */
  navigate = (rootPage) => {
    this.setState({ rootPage });
  }

  redirectPage = () => {
    if(this.state.rootPage === 'landing') {
      return (<Landing navigate={ this.navigate } />);
    } else if (this.state.rootPage === 'search') {
      return (<Search navigate={ this.navigate } />);
    }
  }
}

