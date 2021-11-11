import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet } from 'react-native';

import MainLayout from '../../../layouts/MainLayout';
import ButtonMain from '../../../components/ButtonMain';
import ButtonLink from '../../../components/ButtonLink/index';
import TextApp from '../../../components/TextApp/index';
import ContainerVertical from '../../../components/ContainerVertical';
import ContainerHorizontal from '../../../components/ContainerHorizontal';
import ImgBackground from '../../../components/ImgBackground';
import Logo from '../../../components/Logo/index';

const styles = StyleSheet.create({
    buttonContainer: { marginBottom: 32, width: '100%' },
    container: {
        alignItems: 'center',
        height: '100%',
        // flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 80,
        width: '100%',
    },
    title: {
        marginBottom: 'auto',
        marginTop: 80,
    },
});

const image = {
    uri: 'https://images.unsplash.com/photo-1554675427-1d637bdb5a12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=973&q=80',
};

const WelcomeScreen = ({ navigation }) => {
    const { buttonContainer, container, title } = styles;
    return (
        <MainLayout>
            <ImgBackground image={image}>
                <ContainerVertical>
                    <ContainerHorizontal>
                        <View style={container}>
                            <View style={title}>
                                <Logo />
                                <TextApp
                                    fw='800'
                                    fs={28}
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    Expo starter Lemonade
                                </TextApp>
                            </View>
                            <View style={buttonContainer}>
                                <ButtonMain
                                    action={() =>
                                        navigation.navigate('on-boarding')
                                    }
                                    text='Sign Up'
                                    isLarge
                                />
                            </View>
                            <ButtonLink
                                text='Already have an account ?'
                                action={() => navigation.navigate('login')}
                            />
                        </View>
                    </ContainerHorizontal>
                </ContainerVertical>
            </ImgBackground>
        </MainLayout>
    );
};

WelcomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default WelcomeScreen;
