import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../views/screens/WelcomeScreen';
import LoginScreen from '../views/screens/LoginScreen';
import LoggedinNavigation from './LoggedinNavigation';
import colors from '../constants/colors';

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
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
                <Screen name='Welcome' component={WelcomeScreen} />
                <Screen name='Login' component={LoginScreen} />
                <Screen
                    name='LoggedinNavigation'
                    options={{
                        headerBackTitleVisible: false,
                        title: 'Dashboard',
                    }}
                    component={LoggedinNavigation}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
