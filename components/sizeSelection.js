import React, { Component } from 'react';
import Picker from 'react-native-picker';
import Button from 'react-native-button';
import Header from './partial/header.js';
import {AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import {fonts} from '../styles/fonts.js';


export default class SizeSelection extends Component {

    render() {
        return (
            <View style={layout.parentContainer}>


                <View style={[layout.topContainer,  testBorder('green')]}>
                    <Header />
                </View>


                <View style={[layout.middleContainer,  testBorder('blue')]}>
                    <View style={[layout.leftMiddleContainer,  testBorder('pink')]}>
                    </View>
                    <View style={[layout.middleMiddleContainer,  testBorder('blue')]}>
                        <Text style={[fonts.whiteTextTop,  testBorder('blue')]}>Is the gluing area</Text>
                        <Button
                        containerStyle={fonts.sizeButtonContainerStyle}
                        style={fonts.sizeButtonStyle}
                        onPress={() => this.props.handleBiggerButton()}>
                        BIGGER
                        </Button>
                        <Button
                        containerStyle={fonts.sizeButtonContainerStyle}
                        style={fonts.sizeButtonStyle}
                        onPress={() => this.props.handleSmallerButton()}>
                        SMALLER
                        </Button>
                    </View>
                    <View style={[layout.rightMiddleContainer,  testBorder('pink')]}>
                    </View>
                </View>


                <View style={[layout.bottomContainer,  testBorder('brown')]}>
                    <View style={[layout.leftBottomContainer,  testBorder('red')]}>
                    </View>
                    <View style={[layout.middleBottomContainer,  testBorder('yellow')]}>
                        <View style={[layout.topMiddleBottomContainer,  testBorder('green')]}>
                            <Text style={[fonts.whiteTextBottom,  testBorder('blue')]}>than a $1 bill?</Text>
                            <Image
                            style={{flex:1, height: undefined, width: undefined}}
                            source={require('../img/dollar.jpg')}
                            resizeMode="contain"
                            />
                        </View>
                        <View style={[layout.bottomMiddleBottomContainer,  testBorder('red')]}>
                        </View>
                    </View>
                    <View style={[layout.rightBottomContainer,  testBorder('green')]}>
                    </View>
                </View>


            </View>

        );
    }
}

const layout = StyleSheet.create({
    parentContainer: {
        flex: 1, 
        backgroundColor: '#E1592A',
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
        borderWidth: 0,
    }
}

module.exports = SizeSelection;
