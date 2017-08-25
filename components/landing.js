import React, { Component } from 'react';
import Picker from 'react-native-picker';
import Button from 'react-native-button';
import Header from './partial/header.js';
import {fonts} from '../styles/fonts.js';
import {AppRegistry, StyleSheet, Text, View, } from 'react-native';

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
            <View style={layout.parentContainer}>


                <View style={[layout.topBuffer,  testBorder('red')]}>
                </View>


                <View style={[layout.topContainer,  testBorder('green')]}>
                    <Header />
                </View>



                <View style={[layout.middleContainer,  testBorder('blue')]}>
                    <View style={[layout.leftMiddleContainer,  testBorder('pink')]}>
                    </View>
                    <View style={[layout.middleMiddleContainer,  testBorder('blue')]}>

                        <Button
                        containerStyle={fonts.materialSelectorContainer}
                        style={fonts.materialSelectorStyle}
                        onPress={() => this.picker1()}>
                        {this.props.material1}
                        </Button>
                        
                        <View style={[layout.middleMiddlePlusSign,  testBorder('blue')]}>
                            <Text style={[{color: 'white', fontSize: 30,},  testBorder('red')]}>+</Text>
                        </View>

                        <Button
                        containerStyle={fonts.materialSelectorContainer}
                        style={fonts.materialSelectorStyle}
                        onPress={() => this.picker2()}>
                        {this.props.material2}
                        </Button>

                    </View>
                    <View style={[layout.rightMiddleContainer,  testBorder('pink')]}>
                    </View>
                </View>
                


                <View style={[layout.bottomContainer,  testBorder('brown')]}>
                    <View style={[layout.leftBottomContainer,  testBorder('red')]}>
                    </View>
                    <View style={[layout.middleBottomContainer,  testBorder('yellow')]}>
                        <View style={[layout.topMiddleBottomContainer,  testBorder('green')]}>
                            <Button
                            containerStyle={{padding:18, height:75, overflow:'hidden', borderRadius:2, backgroundColor: '#FF9117'}}
                            style={{fontFamily: 'DINCondensed-Bold', fontSize: 50, color: 'white'}}
                            onPress={() => this.props.handleGlueItButton()}
                            >
                            GLUE IT!
                            </Button>
                        </View>
                        <View style={[layout.bottomMiddleBottomContainer,  testBorder('red')]}>
                        </View>
                    </View>
                    <View style={[layout.rightBottomContainer,  testBorder('green')]}>
                    </View>
                </View>
   

            </View>
        );
    }
}

const layout = StyleSheet.create({
    parentContainer: {
        flex: 1, 
        backgroundColor: '#E1592A'
    },
    ///////////////////

    topBuffer: {
        flex: .1,
    },
    
    ///////////////////


    topContainer: {
        flex: 1.5, 
        justifyContent: "center",
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
        flex: 4,
        justifyContent: "space-around",
    },
    rightMiddleContainer: {
        flex: 1,
    },

    middleMiddlePlusSign: {
        alignItems: "center",
    },

    //////////////////////

    bottomContainer: {
        flex: 1.5,
        flexDirection: 'row',
    },
    leftBottomContainer: {
        flex: 1,
    },
    middleBottomContainer: {
        flex: 4,
        justifyContent: "center",
    },
    topMiddleBottomContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    bottomMiddleBottomContainer: {
        flex: 1,
    },
    rightBottomContainer: {
        flex: 1,
    },
});


var testBorder = function(color){
    return {
        borderColor: color,
        borderWidth: 0
    }
}

module.exports = Landing;
