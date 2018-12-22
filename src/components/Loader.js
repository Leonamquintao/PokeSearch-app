import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Loader = () => {
  var loaderImg = require('../assets/img/loading.gif');
  return (
    <View style={ styles.loaderStyle }>
      <Image  source={ loaderImg } style={ styles.img } />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderStyle: {
    flex: 1
  },
  img: {
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default Loader;