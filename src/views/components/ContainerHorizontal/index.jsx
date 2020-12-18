import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 28,
        width: '100%',
    },
});

function ContainerHorizontal({ children }) {
    return <View style={styles.container}>{children}</View>;
}

ContainerHorizontal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContainerHorizontal;
