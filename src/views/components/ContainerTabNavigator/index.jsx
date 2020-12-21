import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});

function ContainerTabNavigator({ children }) {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView
            style={[styles.container, { paddingBottom: insets.bottom }]}
        >
            <View style={styles.container}>{children}</View>
        </SafeAreaView>
    );
}

ContainerTabNavigator.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContainerTabNavigator;
