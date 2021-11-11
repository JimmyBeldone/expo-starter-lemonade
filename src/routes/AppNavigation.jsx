import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import LoggedinNavigation from './LoggedinNavigation';
// import colors from '../constants/colors';
import PublicNavigation from './PublicNavigation';
import LoggedinNavigation from './LoggedinNavigation';

const AppNavigation = () => {
    const isSignedIn = false;
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {isSignedIn ? <LoggedinNavigation /> : <PublicNavigation />}

                {/* <Navigator>
                    <Screen name='Welcome' component={WelcomeScreen} />
                    <Screen name='OnBoarding' component={OnBoardingScreen} />
                    <Screen name='Login' component={LoginScreen} />
                    <Screen
                        name='LoggedinNavigation'
                        options={{
                            headerBackTitleVisible: false,
                            title: 'Dashboard',
                        }}
                        component={LoggedinNavigation}
                    />
                </Navigator> */}
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default AppNavigation;
