import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Me extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Me</Text>
            </View>
        )
    }
}

export default Me;