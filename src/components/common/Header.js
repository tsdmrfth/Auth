// Import the libraries for making a component
import React from 'react';
import {ReactNative, Text, View} from 'react-native';

// Create the component
const Header = ({headerText}) => {

    const {viewStyle, textStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
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
        fontSize: 25,
        color: '#000',
        marginTop: 10
    }
};

// Make the component available to other parts of the app
export {Header};