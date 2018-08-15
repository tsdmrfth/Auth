// Import the libraries for making a component
import React from 'react';
import {ReactNative, Text, View} from 'react-native';

// Create the component
const Header = (props) => {

    const {viewStyle, textStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );

};

const styles = {
    viewStyle: {
        backgroundColor: '#f9f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.4,
        elevation: 0,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30,
        color: '#000'
    }
};

// Make the component available to other parts of the app
export default Header;