import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../views/screens/private/HomeScreen';
import ProfileScreen from '../views/screens/private/ProfileScreen';
import colors from '../constants/colors';

const { Navigator, Screen } = createStackNavigator();

function LoggedinNavigation() {
    return (
        <Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: colors.aquamarine,
                headerTitleStyle: {
                    fontWeight: '500',
                },
                headerTransparent: true,
            }}
        >
            <Screen name='Home' component={HomeScreen} />
            <Screen name='Profile' component={ProfileScreen} />
        </Navigator>
    );
}

export default LoggedinNavigation;
