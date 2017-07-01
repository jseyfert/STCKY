import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Picker from 'react-native-picker';
import Button from 'react-native-button'


  let data = [];
  for(var i=0;i<100;i++){
      data.push(i);
  }

  Picker.init({
      pickerData: data,
      selectedValue: [59],
      onPickerConfirm: data => {
          console.log(data);
      },
      onPickerCancel: data => {
          console.log(data);
      },
      onPickerSelect: data => {
          console.log(data);
      }
  });

  Picker.hide();

export default class STCKY extends Component {

    constructor(props) {
      super(props);
      this.state = {
        material1: true,
        material2: true,
        };
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
                      onPress={() => Picker.show()}>
                      material 1
                    </Button>

                    <Button
                      containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                      style={{fontFamily: 'Helvetica', color: '#333F48'}}
                      onPress={() => Picker.show()}>
                      material 2
                    </Button>

                </View>
                <View style={[styles.bottomContainer,  testBorder('brown')]}>
                    <Button
                      containerStyle={{padding:10, height:60, overflow:'hidden', borderRadius:4, backgroundColor: '#FF9351'}}
                      style={{fontFamily: 'DINCondensed-Bold', fontSize: 50, color: 'white'}}
                      // onPress={() => Picker.show()}
                      >
                      GLUE IT!
                    </Button>
                </View>


            </View>
   
                // <Picker
                //     style={[styles.bottomContainer,  testBorder('brown')]}
                //     selectedValue={this.state.material2}
                //     onValueChange={(itemValue, itemIndex) => this.setState({material2: itemValue})}>
                //     <Picker.Item label="Java" value="java" />
                //     <Picker.Item label="JavaScript" value="js" />
                // </Picker>

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


// ========================================
// ========================================
// ========================================
// ========================================

// pantone 7579 C = '#DF7357'
// pantone 425 C  = '#333F48'
// pantone 1495 C = '#FF9351'
// pantone 429 C  = '#A2AAAD'

// fontFamily: 'DINCondensed-Bold'
// fontFamily: 'Helvetica'








