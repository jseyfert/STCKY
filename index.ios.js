import React, { Component } from 'react';
import {AppRegistry, } from 'react-native';

var Landing = require('./components/landing.js');
var SizeSelection = require('./components/sizeSelection.js');
var Recommendation = require('./components/recommendation.js');

export default class STCKY extends Component {
    constructor(props) {
      super(props);
      this.state = { showWhichComp: 'landing' };
    }

     // getInitialState: function(){
     //        return {
     //            activeComponent: 'landing',
     //        }
     //    },

    render() {
        if (this.state.showWhichComp === 'landing'){
            return (
                <Landing />
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




