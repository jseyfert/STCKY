import React, { Component } from 'react';
import Picker from 'react-native-picker';
import Button from 'react-native-button';
import {AppRegistry, StyleSheet, Text, View, } from 'react-native';
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
            tipsRows.push(<Text style={[{fontSize: 19, fontFamily: 'Helvetica', color: '#54575A',
                paddingLeft: 0,
                marginLeft: 0,
                paddingRight: 0,
                marginRight: 0,
                textAlign: "center",
        },  testBorder('green')]}  key={arr}> • {arr}</Text>)
        })

        return (
            <View style={styles.parentContainer}>


                <View style={[styles.topContainer,  testBorder('green')]}>
                    <Text style={{textAlign: "center", fontFamily: 'DINCondensed-Bold', color: 'white', fontSize: 40}}>{glueName}</Text>
                    <Text style={{fontFamily: 'DINCondensed-Bold', color: 'white', fontSize: 30}}>...</Text>
                </View>


                <View style={[styles.middleContainer,  testBorder('blue')]}>
                    <View style={[styles.leftMiddleContainer,  testBorder('pink')]}>
                    </View>

                    <View style={[styles.middleMiddleContainer,  testBorder('blue')]}>
                           {tipsRows}
                    </View>

                    <View style={[styles.rightMiddleContainer,  testBorder('pink')]}>
                    </View>
                </View>


                <View style={[styles.bottomContainer,  testBorder('brown')]}>
                    <View style={[styles.leftBottomContainer,  testBorder('red')]}>
                    </View>
                    <View style={[styles.middleBottomContainer,  testBorder('yellow')]}>
                        <View style={[styles.topMiddleBottomContainer,  testBorder('green')]}>
                            <View style={[styles.dollarContainer,  testBorder('pink')]}>
                                <Text style={[{color: 'white', fontSize: 30,}, testBorder('green')]}>{priceRating}</Text>
                            </View>
                            <View style={[styles.buttonContainer,  testBorder('purple')]}>
                                <Button
                                  containerStyle={styles.buttonContainerStyle}
                                  style={styles.buttonStyle}
                                  onPress={() => this.props.handleGlueAgainButton()}>
                                  BUY ONLINE
                                </Button>
                                <Button
                                  containerStyle={styles.buttonContainerStyle}
                                  style={styles.buttonStyle}
                                  onPress={() => this.props.handleGlueAgainButton()}>
                                  GLUE AGAIN
                                </Button>
                            </View>
                        </View>
                        <View style={[styles.bottomMiddleBottomContainer,  testBorder('red')]}>
                        </View>
                    </View>
                    <View style={[styles.rightBottomContainer,  testBorder('green')]}>
                    </View>
                </View>


            </View>
        )
    }

    render() {
        if (this.props.reccomendedGlueRegular){
            return (
                    <View style={styles.parentContainer}>
                        {this.mapGlueDetails(this.props.reccomendedGlueRegular)}
                    </View> 
                    )
                } else if (this.props.surfaceSize === "large"){
            return (
                    <View style={styles.parentContainer}>
                        {this.mapGlueDetails(this.props.reccomendedGlueLarge)}
                    </View>
                    )
                } else {
            return (
                    <View style={styles.parentContainer}>
                        {this.mapGlueDetails(this.props.reccomendedGlueSmall)}
                    </View>
                    )
            }
    }
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1, 
        backgroundColor: '#FF9117'
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
        borderRadius:4,
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
        // justifyContent: "center",
    },

    topMiddleBottomContainer: {
        flex: 3,
        // justifyContent: "space-between",
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
    /////////////////////////////////////
    /////////////////////////////////////

    buttonContainerStyle: {
        padding:10,
        height:65,
        overflow:'hidden',
        borderRadius:4,
        backgroundColor: '#E1592A',
    },
    buttonStyle: {
        fontFamily: 'DINCondensed-Bold',
        color: 'white',
        fontSize: 55,
 },

});

// flexDirection: 'row',
// flexDirection: 'column',
// justifyContent: "center",  vertical: flex-start(top),  flex-end(bottom), space-around, space-between
// alignItems: "center",      horizontal: flex-start(left), flex-end(right)

var testBorder = function(color){
    return {
        borderColor: color,
        borderWidth: 0
    }
}

module.exports = Recommendation;

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



