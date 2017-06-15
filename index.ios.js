import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class STCKY extends Component {
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
                    <Text>middleContainer</Text>
                    <Button
                      onPress={testButton}
                      title="Learn More"
                      color="#333F48"
                      backgroundColor="white"
                      accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View style={[styles.bottomContainer,  testBorder('brown')]}>
                    <Text>bottomContainer</Text>
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
        // justifyContent: "center", // vertical: flex-start(top),  flex-end(bottom)
        // alignItems: "center",  //  horizontal: flex-start(left), flex-end(right)
    },
    middleContainer: {
        flex: 1,
    },
    bottomContainer: {
        flex: 1,
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

AppRegistry.registerComponent('STCKY', () => STCKY);

var testBorder = function(color){
    return {
        borderColor: color,
        borderWidth: 1
    }
}
var testButton = function(color){
    console.log('in button')
}
