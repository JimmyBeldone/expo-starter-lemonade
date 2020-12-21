// import PropTypes from 'prop-types';
import React from 'react';

import MainLayout from '../../../layouts/MainLayout';
import TextApp from '../../../components/TextApp';
import ContainerTabNavigator from '../../../components/ContainerTabNavigator';
import ContainerHorizontal from '../../../components/ContainerHorizontal';

function HomeScreen() {
    return (
        <MainLayout>
            <ContainerTabNavigator>
                <ContainerHorizontal>
                    <TextApp>Home Screen</TextApp>
                </ContainerHorizontal>
            </ContainerTabNavigator>
        </MainLayout>
    );
}

HomeScreen.propTypes = {
    // navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
