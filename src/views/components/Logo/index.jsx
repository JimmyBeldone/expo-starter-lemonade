import React from 'react';
import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

function Logo() {
    return (
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <FontAwesome5 name='lemon' size={64} color='white' />
        </View>
    );
}

export default Logo;
