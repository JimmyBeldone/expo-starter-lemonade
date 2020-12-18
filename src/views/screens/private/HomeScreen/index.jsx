// import PropTypes from 'prop-types';
import React from 'react';

import MainLayout from '../../../layouts/MainLayout';
import TextApp from '../../../components/TextApp';

function HomeScreen() {
    return (
        <MainLayout>
            <TextApp>Home Screen</TextApp>
        </MainLayout>
    );
}

HomeScreen.propTypes = {
    // navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
