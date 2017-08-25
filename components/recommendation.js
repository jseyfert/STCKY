import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, } from 'react-native';
import Picker from 'react-native-picker';
import Button from 'react-native-button';
import {fonts} from '../styles/fonts.js';
var GlueDetails = require('../data/glueDetails');

export default class Recommendation extends Component {

    mapGlueDetails = (glueId) => {
        var tips = []
        var tipsRows = []
        var priceRating = null
        var glueName = null
        var url = null

        GlueDetails.map(function(obj){
            if (obj.glueId === glueId){
                tips = obj.tips
                priceRating = obj.priceRating
                glueName = obj.glueName
                url = obj.url
            }
        })

        tips.map(function(arr){
            tipsRows.push(<Text style={fonts.tipsText} key={arr}>• {arr}</Text>)
        })

        return (
            <View style={layout.parentContainer}>


                <View style={[layout.topContainer,  testBorder('green')]}>
                    <Text style={fonts.glueName}>{glueName}</Text>
                    <Text style={[{fontFamily: 'DINCondensed-Bold', color: 'white', fontSize: 30},  testBorder('blue')]}>...</Text>
                </View>


                <View style={[layout.middleContainer,  testBorder('blue')]}>
                    <View style={[layout.leftMiddleContainer,  testBorder('pink')]}>
                    </View>

                    <View style={[layout.middleMiddleContainer,  testBorder('blue')]}>
                        {tipsRows}
                    </View>

                    <View style={[layout.rightMiddleContainer,  testBorder('pink')]}>
                    </View>
                </View>


                <View style={[layout.bottomContainer,  testBorder('brown')]}>
                    <View style={[layout.leftBottomContainer,  testBorder('red')]}>
                    </View>
                    <View style={[layout.middleBottomContainer,  testBorder('yellow')]}>
                        <View style={[layout.topMiddleBottomContainer,  testBorder('green')]}>
                            <View style={[layout.dollarContainer,  testBorder('pink')]}>
                                <Text style={[{color: 'white', fontSize: 30,}, testBorder('green')]}>{priceRating}</Text>
                            </View>
                            <View style={[layout.buttonContainer,  testBorder('purple')]}>
                                <Button
                                containerStyle={fonts.recommendButtonContainerStyle}
                                style={fonts.recommendButtonStyle}
                                onPress={() => this.props.handleBuyOnlineButton(url)}>
                                BUY ONLINE
                                </Button>
                                <Button
                                containerStyle={fonts.recommendButtonContainerStyle}
                                style={fonts.recommendButtonStyle}
                                onPress={() => this.props.handleGlueAgainButton()}>
                                GLUE AGAIN
                                </Button>
                            </View>
                        </View>
                        <View style={[layout.bottomMiddleBottomContainer,  testBorder('red')]}>
                        </View>
                    </View>
                    <View style={[layout.rightBottomContainer,  testBorder('green')]}>
                    </View>
                </View>


            </View>
        )
    }

    render() {
        if (this.props.reccomendedGlueRegular){
            return (
                <View style={layout.parentContainer}>
                    {this.mapGlueDetails(this.props.reccomendedGlueRegular)}
                </View> 
            )
        } else if (this.props.surfaceSize === "large"){
            return (
                <View style={layout.parentContainer}>
                    {this.mapGlueDetails(this.props.reccomendedGlueLarge)}
                </View>
            )
        } else {
            return (
                <View style={layout.parentContainer}>
                    {this.mapGlueDetails(this.props.reccomendedGlueSmall)}
                </View>
            )
        }
    }
}

const layout = StyleSheet.create({
    parentContainer: {
        flex: 1, 
        backgroundColor: '#FF9117',
    },
    
    ///////////////////

    topContainer: {
        flex: 1, 
        justifyContent: "flex-end",
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
        flex: 6,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius:2,
    },
    rightMiddleContainer: {
        flex: 1,
    },

    //////////////////////

    bottomContainer: {
        flex: 2,
        flexDirection: 'row',
    },
    leftBottomContainer: {
        flex: 1,
    },
    middleBottomContainer: {
        flex: 4,
    },
    topMiddleBottomContainer: {
        flex: 3,
    },
    bottomMiddleBottomContainer: {
        flex: 1,
    },
    rightBottomContainer: {
        flex: 1,
    },
    buttonContainer: {
        flex: 2,
        justifyContent: "space-around",
    },
    dollarContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

});

var testBorder = function(color){
    return {
        borderColor: color,
        borderWidth: 0,
    }
}

module.exports = Recommendation;

