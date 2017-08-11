import React, { Component } from 'react';
import Picker from 'react-native-picker';
import Button from 'react-native-button';
var GlueDetails = require('../data/glueDetails');

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';


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
            tipsRows.push(<Text style={testBorder('red')} key={arr}>• {arr}</Text>)
        })

        return (
            <View> 
                <Text style={testBorder('green')}>{glueName}</Text>
                <View> 
                    {tipsRows}
                </View>
                <Text style={testBorder('green')}>{priceRating}</Text>
                <Text style={testBorder('green')}>{url}</Text>

                <Button
                  containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                  style={{fontFamily: 'Helvetica', color: '#333F48'}}
                  onPress={() => this.props.handleGlueAgainButton()}>
                  BUY ONLINE
                </Button>

            </View>
        )
    }

    render() {
    // console.log("glueDetails", GlueDetails)
            if (this.props.reccomendedGlueRegular){
        return (
                <View style={[styles.mainContainer,  testBorder('red')]}>
                    <Text style={[styles.logoText,  testBorder('blue')]}>recommended glue</Text>
                    
                    {this.mapGlueDetails(this.props.reccomendedGlueRegular)}

                    <Button
                      containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                      style={{fontFamily: 'Helvetica', color: '#333F48'}}
                      onPress={() => this.props.handleGlueAgainButton()}>
                      GLUE AGAIN
                    </Button>


                </View> )
            } else if (this.props.surfaceSize === "large"){
        return (
                <View style={[styles.mainContainer,  testBorder('red')]}>
                    <Text style={[styles.logoText,  testBorder('blue')]}>recommended glue</Text>
                    {this.mapGlueDetails(this.props.reccomendedGlueLarge)}

                    <Button
                      containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                      style={{fontFamily: 'Helvetica', color: '#333F48'}}
                      onPress={() => this.props.handleGlueAgainButton()}>
                      GLUE AGAIN
                    </Button>

                </View>
                )
            } else {
        return (
                <View style={[styles.mainContainer,  testBorder('red')]}>
                    <Text style={[styles.logoText,  testBorder('blue')]}>recommended glue</Text>
                    {this.mapGlueDetails(this.props.reccomendedGlueSmall)}

                    <Button
                      containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                      style={{fontFamily: 'Helvetica', color: '#333F48'}}
                      onPress={() => this.props.handleGlueAgainButton()}>
                      GLUE AGAIN
                    </Button>
                    
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
        fontSize: 50,
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




