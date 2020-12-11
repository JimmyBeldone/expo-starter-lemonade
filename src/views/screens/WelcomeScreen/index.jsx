import React from 'react';
import PropTypes from 'prop-types';

import ButtonMain from '../../components/ButtonMain';
import TextApp from '../../components/TextApp';
import MainLayout from '../../layouts/MainLayout';

function WelcomeScreen({ navigation }) {
    return (
        <MainLayout>
            <TextApp>Welcome Screen</TextApp>
            <ButtonMain
                action={() => navigation.navigate('Login')}
                text='Go to login page'
                large
            />
        </MainLayout>
    );
}

WelcomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default WelcomeScreen;
