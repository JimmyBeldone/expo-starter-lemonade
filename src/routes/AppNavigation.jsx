import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../views/screens/WelcomeScreen';
import LoginScreen from '../views/screens/LoginScreen/index';

function AppNavigation() {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <NavigationContainer>
            <Navigator>
                <Screen name='Welcome' component={WelcomeScreen} />
                <Screen name='Login' component={LoginScreen} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
