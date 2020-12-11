import React from 'react';
import PropTypes from 'prop-types';

import TextApp from '../../components/TextApp';
import MainLayout from '../../layouts/MainLayout';

function ProfileScreen({ navigation }) {
    console.log('🚀 ~ ProfileScreen ~ navigation', navigation);

    return (
        <MainLayout>
            <TextApp>Profile Screen</TextApp>
        </MainLayout>
    );
}

ProfileScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ProfileScreen;
