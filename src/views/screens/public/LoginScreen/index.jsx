import React from 'react';
import { View } from 'react-native';

import MainLayout from '../../../layouts/MainLayout';
import TextApp from '../../../components/TextApp';
// import ButtonMain from '../../../components/ButtonMain';
import ContainerVertical from '../../../components/ContainerVertical';
import ContainerHorizontal from '../../../components/ContainerHorizontal';
import ButtonAlt from '../../../components/ButtonAlt/index';
import Logo from '../../../components/Logo/index';
import FormLoginAnimation from '../../../components/FormLoginAnimation/index';

const LoginScreen = () => {
    return (
        <MainLayout>
            <ContainerVertical>
                <ContainerHorizontal>
                    <View
                        style={{
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'flex-start',
                            width: '100%',
                        }}
                    >
                        <View style={{ marginBottom: 76 }}>
                            <Logo />
                            <TextApp fw='800' fs={28}>
                                Welcome back !
                            </TextApp>
                            <TextApp>Sign in</TextApp>
                        </View>
                        <View style={{ width: '100%' }}>
                            <FormLoginAnimation />
                            <View style={{ marginTop: 16 }}>
                                <ButtonAlt
                                    action={() => {
                                        console.log('connect');
                                    }}
                                    text='Connect with Facebook'
                                />
                            </View>
                            <View style={{ marginTop: 16 }}>
                                <ButtonAlt
                                    action={() => {
                                        console.log('connect');
                                    }}
                                    text='Connect with Gmail'
                                />
                            </View>
                            <View style={{ marginTop: 16 }}>
                                <ButtonAlt
                                    action={() => {
                                        console.log('connect');
                                    }}
                                    text='Connect with Apple'
                                />
                            </View>
                        </View>
                    </View>
                </ContainerHorizontal>
            </ContainerVertical>
        </MainLayout>
    );
};

export default LoginScreen;
