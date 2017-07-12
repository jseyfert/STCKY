import React, { Component } from 'react';
import Picker from 'react-native-picker';
import Button from 'react-native-button';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Landing extends Component {

    picker1 = () => {

        let data = ["paper", "plastic", "glass", "wood", "styrofoam", "ceramic", "rubber", "fabric", "stone", "metal", "vinyl"]

        Picker.init({
            pickerTitleText: 'Select Material 1',
            pickerData: data,
            selectedValue: ["paper"],
            onPickerConfirm: data => {
                this.props.handlePicker1(data)
            },
            onPickerCancel: data => {
              console.log('onPickerCancel',data);
            },

        });

    }

    picker2 = () => {

        let data = ["paper", "plastic", "glass", "wood", "styrofoam", "ceramic", "rubber", "fabric", "stone", "metal", "vinyl"]

        Picker.init({
            pickerTitleText: 'Select Material 2',
            pickerData: data,
            selectedValue: ["paper"],
            onPickerConfirm: data => {
                this.props.handlePicker2(data)
            },
            onPickerCancel: data => {
              console.log('onPickerCancel',data);
            },

        });

    }

    render() {
        return (
            <View style={[styles.mainContainer,  testBorder('red')]}>
                <View style={[styles.topContainer,  testBorder('green')]}>
                    <View style={[styles.logoContainer,  testBorder('white')]}>
                        <Text style={[styles.logoText,  testBorder('blue')]}>STCKY</Text>
                    </View>
                    <Text style={[styles.textHelvetica,  testBorder('green')]}>see what sticks</Text>
                </View>

                <View style={[styles.middleContainer,  testBorder('blue')]}>

                    <Button
                      containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                      style={{fontFamily: 'Helvetica', color: '#333F48'}}
                      onPress={() => this.picker1()}>
                      {this.props.material1}
                    </Button>

                    <Button
                      containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                      style={{fontFamily: 'Helvetica', color: '#333F48'}}
                      onPress={() => this.picker2()}>
                      {this.props.material2}
                    </Button>

                </View>
                <View style={[styles.bottomContainer,  testBorder('brown')]}>
                    <Button
                      containerStyle={{padding:10, height:60, overflow:'hidden', borderRadius:4, backgroundColor: '#FF9351'}}
                      style={{fontFamily: 'DINCondensed-Bold', fontSize: 50, color: 'white'}}
                      onPress={() => this.props.handleGlueItButton()}
                      >
                      GLUE IT!
                    </Button>
                </View>
            </View>
   
        );
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
        fontSize: 100,
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

module.exports = Landing;

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




