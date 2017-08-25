import { StyleSheet, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');
// console.log("height", height)
// console.log("width", width)

if (width > 410){
    console.log("large screen")
    var fonts = StyleSheet.create({
        
        // HEADER
        logoText: {
            fontFamily: 'DINCondensed-Bold',
            color: 'white',
            fontSize: 140,
            paddingTop: 150,
        },
        subLogoText: {
            fontFamily: 'Helvetica',
            color: '#FF9351',
            fontSize: 40,
        },
        
        // LANDING
        materialSelectorContainer: {
            padding:13, 
            height:50, 
            overflow:'hidden', 
            borderRadius:2, 
            backgroundColor: 'white',
        },
        materialSelectorStyle: {
            fontSize: 20, 
            fontFamily: 'Helvetica', 
            color: '#54575A',
        },

        // SIZESELECTION
        whiteTextTop: {
            paddingBottom: -10,
            marginBottom: -10,
            textAlign: "center", 
            fontFamily: 'DINCondensed-Bold', 
            color: 'white', 
            fontSize: 28,
        },
        whiteTextBottom: {
            paddingTop:15, 
            textAlign: "center", 
            fontFamily: 'DINCondensed-Bold', 
            color: 'white', 
            fontSize: 28,
        },
        sizeButtonContainerStyle: {
            paddingTop:22,
            height:84,
            overflow:'hidden', 
            borderRadius:2, 
            backgroundColor: '#FF9117',
        },
        sizeButtonStyle: {
            fontFamily: 'DINCondensed-Bold', 
            fontSize: 52, 
            color: 'white',
        },

        // RECOMMENDATION
        glueName: {
            textAlign: "center", 
            fontFamily: 'DINCondensed-Bold', 
            color: 'white', 
            fontSize: 50,
            paddingTop: 45,
            marginTop: 45,
        },
        tipsText: {
            fontSize: 21, 
            fontFamily: 'Helvetica', 
            color: '#54575A', 
            paddingBottom:2,
            paddingRight: 3, 
            paddingLeft: 3, 
            textAlign: "center",
        },
        recommendButtonContainerStyle: {
            paddingTop:22,
            height:84,
            overflow:'hidden',
            borderRadius:2,
            backgroundColor: '#E1592A',
        },
        recommendButtonStyle: {
            fontFamily: 'DINCondensed-Bold',
            color: 'white',
            fontSize: 50,
        },
    });

} else if (width > 370) {
    console.log("medium screen")
    var fonts = StyleSheet.create({

        // HEADER
        logoText: {
            fontFamily: 'DINCondensed-Bold',
            color: 'white',
            fontSize: 127,
            paddingTop: 150,
        },
        subLogoText: {
            fontFamily: 'Helvetica',
            color: '#FF9351',
            fontSize: 35,
        },
        
        // LANDING
        materialSelectorContainer: {
            padding:10, 
            height:45, 
            overflow:'hidden', 
            borderRadius:2, 
            backgroundColor: 'white',
        },
        materialSelectorStyle: {
            fontSize: 18, 
            fontFamily: 'Helvetica', 
            color: '#54575A',
        },

        // SIZESELECTION
        whiteTextTop: {
            textAlign: "center", 
            fontFamily: 'DINCondensed-Bold', 
            color: 'white', 
            fontSize: 23,
        },
        whiteTextBottom: {
            paddingTop:15, 
            textAlign: "center", 
            fontFamily: 'DINCondensed-Bold', 
            color: 'white', 
            fontSize: 23,
        },
        sizeButtonContainerStyle: {
            paddingTop:22,
            height:84,
            overflow:'hidden', 
            borderRadius:2, 
            backgroundColor: '#FF9117',
        },
        sizeButtonStyle: {
            fontFamily: 'DINCondensed-Bold', 
            fontSize: 52, 
            color: 'white',
        },

        // RECOMMENDATION
        glueName: {
            textAlign: "center", 
            fontFamily: 'DINCondensed-Bold', 
            color: 'white', 
            fontSize: 40,
            paddingTop: 45,
            marginTop: 45,
        },
        tipsText: {
            fontSize: 20, 
            fontFamily: 'Helvetica', 
            color: '#54575A', 
            paddingRight: 2,
            paddingLeft: 2, 
            textAlign: "center",
        },
        recommendButtonContainerStyle: {
            paddingTop:20,
            height:77,
            overflow:'hidden',
            borderRadius:2,
            backgroundColor: '#E1592A',
        },
        recommendButtonStyle: {
            fontFamily: 'DINCondensed-Bold',
            color: 'white',
            fontSize: 50,
        },

    });

} else {
    console.log("small screen")
    var fonts = StyleSheet.create({

        // HEADER
        logoText: {
            fontFamily: 'DINCondensed-Bold',
            color: 'white',
            fontSize: 105,
            paddingTop: 120,
        },
        subLogoText: {
            fontFamily: 'Helvetica',
            color: '#FF9351',
            fontSize: 30,
        },
        
        // LANDING
        materialSelectorContainer: {
            paddingTop:9, 
            height:40, 
            overflow:'hidden', 
            borderRadius:2, 
            backgroundColor: 'white',
        },
        materialSelectorStyle: {
            fontSize: 17, 
            fontFamily: 'Helvetica', 
            color: '#54575A',
        },

        // SIZESELECTION
        whiteTextTop: {
            textAlign: "center", 
            fontFamily: 'DINCondensed-Bold', 
            color: 'white', 
            fontSize: 22,
        },
        whiteTextBottom: {
            paddingTop:15, 
            textAlign: "center", 
            fontFamily: 'DINCondensed-Bold', 
            color: 'white', 
            fontSize: 22,
        },
        sizeButtonContainerStyle: {
            paddingTop:21,
            height:75,
            overflow:'hidden', 
            borderRadius:2, 
            backgroundColor: '#FF9117',
        },
        sizeButtonStyle: {
            fontFamily: 'DINCondensed-Bold', 
            fontSize: 45, 
            color: 'white',
        },

        // RECOMMENDATION
        glueName: {
            textAlign: "center", 
            fontFamily: 'DINCondensed-Bold', 
            color: 'white', 
            fontSize: 35,
            paddingTop: 50,
            marginTop: 50,
            paddingBottom: -5,
            marginBottom: -5,
        },
        tipsText: {
            fontSize: 17, 
            fontFamily: 'Helvetica', 
            color: '#54575A', 
            paddingRight: 2, 
            paddingLeft: 2, 
            textAlign: "center",
        },
        recommendButtonContainerStyle: {
            paddingTop:16,
            height:65,
            overflow:'hidden',
            borderRadius:2,
            backgroundColor: '#E1592A',
        },
        recommendButtonStyle: {
            fontFamily: 'DINCondensed-Bold',
            color: 'white',
            fontSize: 45,
        },

    });
}

module.exports = {fonts}




