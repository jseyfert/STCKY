import React, { Component } from 'react';
import Picker from 'react-native-picker';
import Button from 'react-native-button';
import Header from './partial/header.js';
import {AppRegistry, StyleSheet, Text, View, } from 'react-native';


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
                      containerStyle={{padding:10, height:70, overflow:'hidden', borderRadius:4, backgroundColor: '#FF9117'}}
                      style={{fontFamily: 'DINCondensed-Bold', fontSize: 60, color: 'white'}}
                        onPress={() => this.props.handleBiggerButton()}>
                        BIGGER
                      </Button>
                      <Button
                      containerStyle={{padding:10, height:70, overflow:'hidden', borderRadius:4, backgroundColor: '#FF9117'}}
                      style={{fontFamily: 'DINCondensed-Bold', fontSize: 60, color: 'white'}}
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
                        <Text style={[{textAlign: "center", fontFamily: 'DINCondensed-Bold', color: 'white', fontSize: 23},  testBorder('blue')]}>than a $1 bill?</Text>
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
      flex: 2, 
      justifyContent: "center",
      alignItems: "center", 
  },

  ///////////////////

  middleContainer: {
      flex: 2,
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
      flex: 1.5,
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
      flex: 1,
      justifyContent: "flex-end",
  },
  bottomMiddleBottomContainer: {
      flex: 1,
      // justifyContent: "center",
  },

  rightBottomContainer: {
      flex: 1,
  },





  // old
    // mainContainer: {
    //     flex: 1, 
    //     backgroundColor: '#DF7357'
    // },
    // topContainer: {
    //     flex: 1, 
    // },
    // middleContainer: {
    //     flex: 1,
    //     justifyContent: "space-around",
    // },
    // bottomContainer: {
    //     flex: 1,
    //     justifyContent: "center",
    // },
    // logoContainer: {
    //     flex: 1,
    // },
    // logoText: {
    //     // justifyContent: "flex-end",
    //     fontFamily: 'DINCondensed-Bold',
    //     fontSize: 80,
    //     color: 'white'
    // },
    // textHelvetica: {
    //     fontFamily: 'Helvetica',
    //     fontSize: 30,
    //     color: '#FF9351'
    // },
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

