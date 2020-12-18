import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import MainLayout from '../../../layouts/MainLayout';
import TextApp from '../../../components/TextApp';
// import ButtonMain from '../../../components/ButtonMain';
import ContainerVertical from '../../../components/ContainerVertical';
import ContainerHorizontal from '../../../components/ContainerHorizontal';
import ButtonAlt from '../../../components/ButtonAlt/index';

function LoginScreen({ navigation }) {
    return (
        <MainLayout>
            <ContainerVertical>
                <ContainerHorizontal>
                    <View>
                        <TextApp fw='800' fs={28}>
                            Welcome back !
                        </TextApp>
                        <TextApp>Sign in</TextApp>
                    </View>
                    <View>
                        <ButtonAlt
                            action={() => {
                                navigation.navigate('login/form');
                            }}
                            text='Connect with email'
                            isSecondary
                        />
                        <ButtonAlt
                            action={() => {
                                navigation.navigate('login/form');
                            }}
                            text='Connect with Facebook'
                        />
                        <ButtonAlt
                            action={() => {
                                navigation.navigate('login/form');
                            }}
                            text='Connect with Gmail'
                        />
                        <ButtonAlt
                            action={() => {
                                navigation.navigate('login/form');
                            }}
                            text='Connect with Apple'
                        />
                    </View>
                </ContainerHorizontal>
            </ContainerVertical>
        </MainLayout>
    );
}

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default LoginScreen;
