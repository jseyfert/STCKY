// -HEADER
// -CARD
//   -CARD SECTION
//   -CARD SECTION
//   -CARD SECTION

import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
    return (
        <View style={[styles.logoContainer,  testBorder('red')]}>

            <View style={[styles.leftSide,  testBorder('pink')]}>
            </View>

            <View style={[styles.middle,  testBorder('green')]}>

                <View style={[styles.title,  testBorder('red')]}>
                    <Text style={[styles.logoText,  testBorder('red')]}>STCKY</Text>
                </View>
                <View style={[styles.subtitle,  testBorder('blue')]}>
                    <Text style={[styles.helveticaText,  testBorder('red')]}>see what sticks</Text>
                </View>

            </View>

            <View style={[styles.rightSide,  testBorder('yellow')]}>
            </View>

        </View>
        );
};

const styles = StyleSheet.create({
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


    logoText: {
        fontFamily: 'DINCondensed-Bold',
        color: 'white',
        fontSize: 120,
        paddingTop: 150,
    },
    helveticaText: {
        fontFamily: 'Helvetica',
        color: '#FF9351',
        fontSize: 35,
    },
});
// paddingTop: 0,
// marginTop: 0,
// paddingBottom: 0,
// marginBottom: 0,
// flexDirection: 'row',
// flexDirection: 'column',
// justifyContent: "center", vertical:   flex-start(top),  flex-end(bottom), space-around, space-between
// alignItems: "center",     horizontal: flex-start(left), flex-end(right)

var testBorder = function(color){
    return {
        borderColor: color,
        borderWidth: 0
    }
}

module.exports = Header;

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




