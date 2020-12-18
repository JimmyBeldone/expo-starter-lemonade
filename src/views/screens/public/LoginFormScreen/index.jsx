import PropTypes from 'prop-types';
import React from 'react';

import MainLayout from '../../../layouts/MainLayout';
import TextApp from '../../../components/TextApp';
import ButtonMain from '../../../components/ButtonMain';
import ContainerVertical from '../../../components/ContainerVertical';
import ContainerHorizontal from '../../../components/ContainerHorizontal';

function LoginFormScreen({ navigation }) {
    return (
        <MainLayout>
            <ContainerVertical>
                <ContainerHorizontal>
                    <TextApp>Login Form Screen</TextApp>
                    <ButtonMain
                        action={() => {
                            navigation.navigate('welcome');
                        }}
                        text='Go to Home'
                        isLarge
                    />
                </ContainerHorizontal>
            </ContainerVertical>
        </MainLayout>
    );
}

LoginFormScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default LoginFormScreen;
