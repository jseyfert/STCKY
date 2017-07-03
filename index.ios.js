import React, { Component } from 'react';
import {AppRegistry, } from 'react-native';

var Landing = require('./components/landing.js');
var SizeSelection = require('./components/sizeSelection.js');
var Recommendation = require('./components/recommendation.js');
var GlueData = require('./data/glueData');


export default class STCKY extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            showWhichComp: 'landing',
            material1: 'paper', 
            material2: 'plastic',
            reccomendedGlueRegular: null,
            reccomendedGlueSmall: null,
            reccomendedGlueLarge: null,
            surfaceSize: null,
        };
    }

    handleGlueItButton = () => {
        if (this.state.reccomendedGlueRegular !== null){
            this.setState({
                showWhichComp: "recommendation"
            });
        } else {
            this.setState({
                showWhichComp: "sizeSelection"
            });
        }
    }

    !!!! figure out how to write glueSelector in es6 and get it to setState !!!

    glueSelector = () => {
        // console.log("glueSelector", GlueData)
        // console.log("material1", material1)
        // console.log("material2", material2)
        // console.log("surfaceSize", surfaceSize)

        // GlueData.map(function(obj){
        //     if (obj.material1 === material1){
        //         // console.log(obj.material1)
        //         if (obj.material2 === material2){
        //             // console.log(obj.material2)
        //             if (obj.surfaceSize.regular){
        //                 console.log('regular', obj.surfaceSize.regular)
        //             }
        //             if (obj.surfaceSize.small){
        //                 console.log('small', obj.surfaceSize.small)
        //             }
        //             if (obj.surfaceSize.large){
        //                 console.log('large', obj.surfaceSize.large)
        //             }
        //         }
        //     }
        // })
        // console.log("reccomendedGlueRegular", this.state.reccomendedGlueRegular)
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
                glueSelector = { this.glueSelector }
                />
            );
        } else if (this.state.showWhichComp === 'sizeSelection'){
            return (
                <SizeSelection />
            );
        } else if (this.state.showWhichComp === 'recommendation'){
            return (
                <Recommendation />
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




