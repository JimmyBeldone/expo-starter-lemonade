import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
        height: '100%',
        width: '100%',
    },
});

function MainLayout({ children }) {
    return (
        <View style={styles.container}>
            <View style={styles.container}>{children}</View>
            <StatusBar style='light' />
        </View>
    );
}

MainLayout.propTypes = { children: PropTypes.node.isRequired };

export default MainLayout;
