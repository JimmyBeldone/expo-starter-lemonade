import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'expo-status-bar';

import ButtonMain from '../../components/ButtonMain';
import TextApp from '../../components/TextApp';
import MainLayout from '../../layouts/MainLayout';

function WelcomeScreen({ navigation }) {
    const goTo = () => {
        navigation.navigate('Login');
    };

    return (
        <MainLayout>
            <TextApp>Welcome Screen</TextApp>
            <StatusBar style='auto' />
            <ButtonMain action={goTo} text='Login' large />
        </MainLayout>
    );
}

WelcomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default WelcomeScreen;
