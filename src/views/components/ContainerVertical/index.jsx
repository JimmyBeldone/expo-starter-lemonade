import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import {
    SafeAreaView,
    // useSafeAreaInsets,
} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});

function ContainerVertical({ children, hasHeader }) {
    const headerHeight = useHeaderHeight();
    console.log('🚀 ~ ContainerVertical ~ headerHeight', headerHeight);
    // const insets = useSafeAreaInsets();
    return hasHeader ? (
        <View style={[styles.container, { paddingTop: headerHeight }]}>
            {children}
        </View>
    ) : (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>{children}</View>
        </SafeAreaView>
    );
}

ContainerVertical.defaultProps = {
    hasHeader: true,
};

ContainerVertical.propTypes = {
    children: PropTypes.node.isRequired,
    hasHeader: PropTypes.bool,
};

export default ContainerVertical;
