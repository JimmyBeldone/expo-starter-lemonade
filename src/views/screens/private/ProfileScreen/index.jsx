import React from 'react';
import PropTypes from 'prop-types';

import TextApp from '../../../components/TextApp';
import MainLayout from '../../../layouts/MainLayout';
import ContainerTabNavigator from '../../../components/ContainerTabNavigator';
import ContainerHorizontal from '../../../components/ContainerHorizontal';

const ProfileScreen = ({ navigation }) => {
    console.log('🚀 ~ ProfileScreen ~ navigation', navigation);

    return (
        <MainLayout>
            <ContainerTabNavigator>
                <ContainerHorizontal>
                    <TextApp>Profile Screen</TextApp>
                </ContainerHorizontal>
            </ContainerTabNavigator>
        </MainLayout>
    );
};

ProfileScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ProfileScreen;
