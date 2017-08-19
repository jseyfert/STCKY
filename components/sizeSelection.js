import React, { Component } from 'react';
import Picker from 'react-native-picker';
import Button from 'react-native-button';
import Header from './partial/header.js';
import {AppRegistry, StyleSheet, Text, View, Image } from 'react-native';


export default class SizeSelection extends Component {

    render() {
        return (
          <View style={styles.parentContainer}>


              <View style={[styles.topContainer,  testBorder('green')]}>
                  <Header />
              </View>



              <View style={[styles.middleContainer,  testBorder('blue')]}>
                  <View style={[styles.leftMiddleContainer,  testBorder('pink')]}>
                  </View>
                  <View style={[styles.middleMiddleContainer,  testBorder('blue')]}>

                  <Text style={[{textAlign: "center", fontFamily: 'DINCondensed-Bold', color: 'white', fontSize: 23},  testBorder('blue')]}>Is the gluing area</Text>
                        
                      <Button
                      containerStyle={{padding:18, height:75, overflow:'hidden', borderRadius:2, backgroundColor: '#FF9117'}}
                      style={{fontFamily: 'DINCondensed-Bold', fontSize: 50, color: 'white'}}
                        onPress={() => this.props.handleBiggerButton()}>
                        BIGGER
                      </Button>
                      <Button
                      containerStyle={{padding:18, height:75, overflow:'hidden', borderRadius:2, backgroundColor: '#FF9117'}}
                      style={{fontFamily: 'DINCondensed-Bold', fontSize: 50, color: 'white'}}
                        onPress={() => this.props.handleSmallerButton()}>
                        SMALLER
                      </Button>
                  </View>
                  <View style={[styles.rightMiddleContainer,  testBorder('pink')]}>
                  </View>
              </View>
              


              <View style={[styles.bottomContainer,  testBorder('brown')]}>
                  <View style={[styles.leftBottomContainer,  testBorder('red')]}>
                  </View>
                  <View style={[styles.middleBottomContainer,  testBorder('yellow')]}>
                      <View style={[styles.topMiddleBottomContainer,  testBorder('green')]}>
                        <Text style={[{paddingTop:15, textAlign: "center", fontFamily: 'DINCondensed-Bold', color: 'white', fontSize: 23},  testBorder('blue')]}>than a $1 bill?</Text>
                        <Image
                          style={{flex:1, height: undefined, width: undefined}}
                          source={require('../img/dollar.jpg')}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={[styles.bottomMiddleBottomContainer,  testBorder('red')]}>
                      </View>
                  </View>
                  <View style={[styles.rightBottomContainer,  testBorder('green')]}>
                  </View>
              </View>
          

          </View>

        );
    }
}

const styles = StyleSheet.create({
  parentContainer: {
      flex: 1, 
      backgroundColor: '#E1592A'
  },
  
  ///////////////////

  topContainer: {
      flex: 1.8, 
      justifyContent: "center",
      alignItems: "center", 
  },

  ///////////////////

  middleContainer: {
      flex: 1.8,
      flexDirection: 'row',
  },

  leftMiddleContainer: {
      flex: 1,
  },
  middleMiddleContainer: {
      flex: 4,
      justifyContent: "space-around",
  },
  rightMiddleContainer: {
      flex: 1,
  },

  middleMiddlePlusSign: {
      alignItems: "center",
  },

  //////////////////////

  bottomContainer: {
      flex: 1.7,
      flexDirection: 'row',
  },
  leftBottomContainer: {
      flex: 1,
  },
  middleBottomContainer: {
      flex: 4,
      justifyContent: "center",
  },
  topMiddleBottomContainer: {
      flex: 5,
      // justifyContent: "center",
      // alignItems: "center",
      // justifyContent: "flex-start",
  },
  bottomMiddleBottomContainer: {
      flex: 1,
  },
  rightBottomContainer: {
      flex: 1,
  },
});


var testBorder = function(color){
    return {
        borderColor: color,
        borderWidth: 0
    }
}

module.exports = SizeSelection;

// NEW
// ========================================
// ========================================
// pantone 7579 C = #E1592A
// pantone 425 C  = #54575A
// pantone 1495 C = #FF9117
// pantone 429 C  = #A3A9AE

// fontFamily: 'DINCondensed-Bold'
// fontFamily: 'Helvetica'
// ========================================
// ========================================

