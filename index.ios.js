/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class STCKY extends Component {
  render() {
    return (
      <View style={[styles.topContainer,  testBorder('red')]}>
        <View style={[styles.middleContainer,  testBorder('blue')]}>
          <Text style={styles.textDINCondensed}>STCKY</Text>
        </View>
        <View style={[styles.topContainer,  testBorder('green')]}>
          <Text style={styles.textHelvetica}>Helvetica</Text>
        </View>
        <View style={[styles.bottomContainer,  testBorder('blue')]}>
          <Text>STCKY</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    topContainer: {
      flex: 1, 
      // justifyContent: "stretch", // vertical: flex-start(top),  flex-end(bottom)
      // alignItems: "stretch",  //  horizontal: flex-start(left), flex-end(right)
    },
    middleContainer: {
      flex: 1,
    },
    bottomContainer: {
      flex: 1,
    },
    textHelvetica: {
      fontSize: 60,
      fontFamily: 'Helvetica',
    },
    textDINCondensed: {
      fontSize: 90,
      fontFamily: 'DINCondensed-Bold',
      // fontStyle: 'italic',
      // fontWeight: 'bold',
    },
});

AppRegistry.registerComponent('STCKY', () => STCKY);

var testBorder = function(color){
  return {
    borderColor: color,
    borderWidth: 4
  }
}
