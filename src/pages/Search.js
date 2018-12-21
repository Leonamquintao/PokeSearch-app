import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';

export default class Search extends Component {
 render() {
   return (
     <View style={ styles.container }>
       <Header headerText={'Search'} />
       <Button onPress={ () => this.props.navigate("landing") } title="Back" color="#3544a3" />
     </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    
  }
});