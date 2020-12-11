import PropTypes from 'prop-types';
import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import TextApp from '../../components/TextApp';
import ButtonMain from '../../components/ButtonMain';

function LoginScreen({ navigation }) {
    return (
        <MainLayout>
            <TextApp>Login Screen</TextApp>
            <ButtonMain
                action={() => {
                    navigation.navigate('LoggedinNavigation');
                }}
                text='Go to Home'
                large
            />
        </MainLayout>
    );
}

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default LoginScreen;
