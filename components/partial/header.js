import React, { Component } from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {fonts} from '../../styles/fonts.js';

const Header = () => {
    return (
        <View style={[layout.logoContainer,  testBorder('red')]}>


            <View style={[layout.leftSide,  testBorder('pink')]}>
            </View>


            <View style={[layout.middle,  testBorder('green')]}>
                <View style={[layout.title,  testBorder('red')]}>
                    <Text style={[fonts.logoText,  testBorder('red')]}>STCKY</Text>
                </View>
                <View style={[layout.subtitle,  testBorder('blue')]}>
                    <Text style={[fonts.subLogoText,  testBorder('red')]}>see what sticks</Text>
                </View>
            </View>


            <View style={[layout.rightSide,  testBorder('yellow')]}>
            </View>


        </View>
        );
};

const layout = StyleSheet.create({
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    leftSide: {
        flex: 1,
    },
    middle: {
        flex: 4,
    },
    rightSide: {
        flex: 1,
    },
    title: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    subtitle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});


var testBorder = function(color){
    return {
        borderColor: color,
        borderWidth: 0
    }
}

module.exports = Header;

