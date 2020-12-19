import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';

import TextApp from '../../../components/TextApp';
import MainLayout from '../../../layouts/MainLayout';
import ContainerVertical from '../../../components/ContainerVertical';
import ContainerHorizontal from '../../../components/ContainerHorizontal';

const ForgottenPasswordScreen = () => {
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
                        <TextApp>Forgotten password screen</TextApp>
                    </View>
                </ContainerHorizontal>
            </ContainerVertical>
        </MainLayout>
    );
};

ForgottenPasswordScreen.propTypes = {};

export default ForgottenPasswordScreen;
