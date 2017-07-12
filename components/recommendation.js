import React, { Component } from 'react';
import Picker from 'react-native-picker';
import Button from 'react-native-button';


import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Recommendation extends Component {

    render() {
            if (this.props.reccomendedGlueRegular){
        return (
                <View style={[styles.mainContainer,  testBorder('red')]}>
                    <Text style={[styles.logoText,  testBorder('blue')]}>REG glue id:{this.props.reccomendedGlueRegular}</Text>
                </View> )
            } else if (this.props.surfaceSize === "large"){
        return (
                <View style={[styles.mainContainer,  testBorder('red')]}>
                    <Text style={[styles.logoText,  testBorder('blue')]}>LARGE glue id:{this.props.reccomendedGlueLarge}</Text>
                </View>
                )
            } else {
        return (
                <View style={[styles.mainContainer,  testBorder('red')]}>
                    <Text style={[styles.logoText,  testBorder('blue')]}>SMALL glue id:{this.props.reccomendedGlueSmall}</Text>
                </View>
                )
            }
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        backgroundColor: '#DF7357'
    },
    topContainer: {
        flex: 1, 
        // justifyContent: "center", // vertical: flex-start(top),  flex-end(bottom), space-around, space-between
        // alignItems: "center",  //  horizontal: flex-start(left), flex-end(right)
    },
    middleContainer: {
        flex: 1,
        justifyContent: "space-around",
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "center",
    },
    logoContainer: {
        flex: 1,
        // justifyContent: "flex-end",
    },
    logoText: {
        // flex: 1,
        // justifyContent: "flex-end",
        fontFamily: 'DINCondensed-Bold',
        fontSize: 67,
        color: 'white'
    },
    textHelvetica: {
        // flex: 1,
        // justifyContent: "flex-end",
        fontFamily: 'Helvetica',
        fontSize: 30,
        color: '#FF9351'
    },
});

// AppRegistry.registerComponent('STCKY', () => STCKY);

var testBorder = function(color){
    return {
        borderColor: color,
        borderWidth: 1
    }
}

module.exports = Recommendation;

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




