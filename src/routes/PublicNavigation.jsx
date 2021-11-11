import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../views/screens/public/WelcomeScreen';
import OnBoardingScreen from '../views/screens/public/OnboardingScreen';
import LoginScreen from '../views/screens/public/LoginScreen';
import ForgottenPasswordScreen from '../views/screens/public/ForgotPasswordScreen';
import colors from '../constants/colors';

const { Navigator, Screen } = createStackNavigator();

const PublicNavigation = () => {
    return (
        <Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerLeftContainerStyle: {
                    paddingLeft: 22,
                },
                // headerShown: false,
                headerTintColor: colors.aquamarine,
                headerTitle: null,
                headerTitleStyle: {
                    fontWeight: '500',
                },
                headerTransparent: true,
            }}
        >
            <Screen name='welcome' component={WelcomeScreen} />
            <Screen name='on-boarding' component={OnBoardingScreen} />
            <Screen name='login' component={LoginScreen} />
            <Screen
                name='forgotten-password'
                component={ForgottenPasswordScreen}
            />
        </Navigator>
    );
};

export default PublicNavigation;
