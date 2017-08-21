import React, { Component } from 'react';
import {AppRegistry, Linking, Dimensions} from 'react-native';

var Landing = require('./components/landing.js');
var SizeSelection = require('./components/sizeSelection.js');
var Recommendation = require('./components/recommendation.js');
var GlueData = require('./data/glueData');

// TODO //
// add notification if they dont select two materials
// url: "get urlS again",

// react-native run-ios --simulator="iPhone 7 Plus"     h=736 w=414
// iPhone 7 Plus:
// LANDING:       BOOM  
// SIZESELECTION: BOOM
// RECOMMENDATION:BOOM

// react-native run-ios                                 h=667 w=375
// iPhone 6:
// LANDING:         BOOM
// SIZESELECTION:   BOOM
// RECOMMENDATION:  BOOM

// react-native run-ios --simulator="iPhone 5"          h=568 w=320
// iPhone 5:
// LANDING:         BOOM   
// SIZESELECTION:   BOOM
// RECOMMENDATION:


export default class STCKY extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            // PROD
            showWhichComp: 'landing',
            material1: 'material 1', 
            material2: 'material 2',
            reccomendedGlueRegular: null,
            reccomendedGlueSmall: null,
            reccomendedGlueLarge: null,
            surfaceSize: null,

            // TESTING
            // showWhichComp: 'sizeSelection',

            // TESTING 
            // showWhichComp: 'recommendation',
            // material1: 'paper', 
            // material2: 'paper',
            // reccomendedGlueRegular: 4, // 1 item 
            // reccomendedGlueRegular: 3, // 2 items & shortest
            // reccomendedGlueRegular: 2, // longest 1 item & longest total
            // reccomendedGlueRegular: 6, // 3 items  & longest total
            // reccomendedGlueRegular: 12, // longest glue name
            
        };
    }

    handleGlueItButton = () => {
        var material1 = this.state.material1
        var material2 = this.state.material2
        var surfaceSize = this.state.surfaceSize
        if (material1 === "material 1" || material2 === "material 2") {
            console.log("send error 'please sleect mat 1 & 2'")

        } else {
            // console.log("glueSelector", GlueData)
            // console.log("material1", material1)
            // console.log("material2", material2)
            // console.log("surfaceSize", surfaceSize)
            var self = this;
            GlueData.map(function(obj){
                if (obj.material1 === material1){
                    // console.log(obj.material1)
                    if (obj.material2 === material2){
                        // console.log(obj.material2)
                        if (obj.surfaceSize.regular){
                            self.setState({
                              showWhichComp: "recommendation",  
                              reccomendedGlueRegular: obj.surfaceSize.regular
                            });
                        } else {
                            self.setState({
                              showWhichComp: "sizeSelection",  
                              reccomendedGlueSmall: obj.surfaceSize.small,
                              reccomendedGlueLarge: obj.surfaceSize.large
                            });
                        }
                    }
                }
            })
        }
    }

    handleBuyOnlineButton = (url) => {
        Linking.openURL(url)
    }

    handleGlueAgainButton = (data) => {
        this.setState({
            showWhichComp: 'landing',
            material1: 'material 1', 
            material2: 'material 2',
            reccomendedGlueRegular: null,
            reccomendedGlueSmall: 1,
            reccomendedGlueLarge: null,
            surfaceSize: null,
        });
    }

    handleBiggerButton = (data) => {
        this.setState({
            showWhichComp: "recommendation",
            surfaceSize: "large",
        });
    }

    handleSmallerButton = (data) => {
        this.setState({
            showWhichComp: "recommendation",
            surfaceSize: "small",
        });
    }

    handlePicker1 = (data) => {
        // console.log("handlePicker1", data)
        this.setState({
            material1: data[0]
        });
    }

    handlePicker2 = (data) => {
        // console.log("handlePicker2", data)
        this.setState({
            material2: data[0]
        });
    }

    render() {

        // this.glueSelector(GlueData, this.state.material1, this.state.material2, this.state.surfaceSize)
        if (this.state.showWhichComp === 'landing'){
            return (
                <Landing  
                material1 = { this.state.material1 }
                material2 = { this.state.material2 }
                glueData = {GlueData}
                handleGlueItButton = { this.handleGlueItButton }
                handlePicker1 = { this.handlePicker1 }
                handlePicker2 = { this.handlePicker2 }
                glueSelector = { this.glueSelector }
                />
            );
        } else if (this.state.showWhichComp === 'sizeSelection'){
            return (
                <SizeSelection 
                    handleBiggerButton = { this.handleBiggerButton }
                    handleSmallerButton = { this.handleSmallerButton }
                />
            );
        } else if (this.state.showWhichComp === 'recommendation'){
            return (
                <Recommendation 
                reccomendedGlueRegular = { this.state.reccomendedGlueRegular }
                reccomendedGlueSmall = { this.state.reccomendedGlueSmall }
                reccomendedGlueLarge = { this.state.reccomendedGlueLarge }
                surfaceSize = { this.state.surfaceSize }
                handleBuyOnlineButton = { this.handleBuyOnlineButton }
                handleGlueAgainButton = { this.handleGlueAgainButton }
                />
            );
        }
    }
}

AppRegistry.registerComponent('STCKY', () => STCKY);


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





