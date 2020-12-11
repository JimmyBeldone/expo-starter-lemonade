import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import MainLayout from '../../layouts/MainLayout';
import TextApp from '../../components/TextApp';

// const style = StyleSheet.create({
//     container: {
//         alignItems: 'center',
//         backgroundColor: '#aaa',
//         flex: 1,
//         justifyContent: 'center',
//     },
// });

function LoginScreen() {
    return (
        <MainLayout>
            <TextApp>Login Screen</TextApp>
            <StatusBar style='auto' />
        </MainLayout>
    );
}

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default LoginScreen;
