// -HEADER
// -CARD
//   -CARD SECTION
//   -CARD SECTION
//   -CARD SECTION

import React, { Component } from 'react';
import Picker from 'react-native-picker';
import Button from 'react-native-button';
import Header from './partial/header.js';

import {AppRegistry, StyleSheet, Text, View, } from 'react-native';

export default class Landing extends Component {

    picker1 = () => {

        let data = ["paper", "plastic", "glass", "wood", "styrofoam", "ceramic", "rubber", "fabric", "stone", "metal", "vinyl"]

        Picker.init({
            pickerTitleText: 'Select Material 1',
            pickerData: data,
            selectedValue: ["paper"],
            onPickerConfirm: data => {
                this.props.handlePicker1(data)
            },
            onPickerCancel: data => {
              console.log('onPickerCancel',data);
            },

        });

    }

    picker2 = () => {

        let data = ["paper", "plastic", "glass", "wood", "styrofoam", "ceramic", "rubber", "fabric", "stone", "metal", "vinyl"]

        Picker.init({
            pickerTitleText: 'Select Material 2',
            pickerData: data,
            selectedValue: ["paper"],
            onPickerConfirm: data => {
                this.props.handlePicker2(data)
            },
            onPickerCancel: data => {
              console.log('onPickerCancel',data);
            },

        });

    }

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
                        <Button
                          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                          style={{fontSize: 18, fontFamily: 'Helvetica', color: '#54575A'}}
                          onPress={() => this.picker1()}>
                          {this.props.material1}
                        </Button>
                        
                        <View style={[styles.middleMiddlePlusSign,  testBorder('blue')]}>
                            <Text style={[{color: 'white', fontSize: 30,},  testBorder('red')]}>+</Text>
                        </View>

                        <Button
                          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                          style={{fontSize: 18, fontFamily: 'Helvetica', color: '#54575A'}}
                          onPress={() => this.picker2()}>
                          {this.props.material2}
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
                            <Button
                              containerStyle={{padding:10, height:70, overflow:'hidden', borderRadius:4, backgroundColor: '#FF9117'}}
                              style={{fontFamily: 'DINCondensed-Bold', fontSize: 60, color: 'white'}}
                              onPress={() => this.props.handleGlueItButton()}
                              >
                              GLUE IT!
                            </Button>
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
    topContainer: {
        flex: 1.5, 
        justifyContent: "center",
        alignItems: "center", 
    },

    ///////////////////

    middleContainer: {
        flex: 1,
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

});

// justifyContent: "center", // vertical: flex-start(top),  flex-end(bottom), space-around, space-between
// alignItems: "center",  //  horizontal: flex-start(left), flex-end(right)
// AppRegistry.registerComponent('STCKY', () => STCKY);

var testBorder = function(color){
    return {
        borderColor: color,
        borderWidth: 0
    }
}

module.exports = Landing;

// NEW
// ========================================
// ========================================
// pantone 7579 C = '#E1592A'
// pantone 425 C  = '#54575A'
// pantone 1495 C = '#FF9117'
// pantone 429 C  = '#A3A9AE'

// fontFamily: 'DINCondensed-Bold'
// fontFamily: 'Helvetica'
// ========================================
// ========================================




// OLD
// ========================================
// ========================================
// pantone 7579 C = '#DF7357'
// pantone 425 C  = '#333F48'
// pantone 1495 C = '#FF9351'
// pantone 429 C  = '#A2AAAD'

// fontFamily: 'DINCondensed-Bold'
// fontFamily: 'Helvetica'
// ========================================
// ========================================




