import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.dark,
        flex: 1,
        justifyContent: 'center',
    },
});

function MainLayout({ children }) {
    return <View style={style.container}>{children}</View>;
}

MainLayout.propTypes = { children: PropTypes.node.isRequired };

export default MainLayout;
