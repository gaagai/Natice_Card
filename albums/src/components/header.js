import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>

    )
}

const styles = {
    viewStyle: {
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 22
    }
}

export default Header;