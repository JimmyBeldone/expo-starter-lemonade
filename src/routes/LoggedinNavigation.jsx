import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../views/screens/HomeScreen';
import ProfileScreen from '../views/screens/ProfileScreen';

const { Navigator, Screen } = createStackNavigator();

function LoggedinNavigation() {
    return (
        <Navigator headerMode='none'>
            <Screen name='Home' component={HomeScreen} />
            <Screen name='Profile' component={ProfileScreen} />
        </Navigator>
    );
}

export default LoggedinNavigation;
