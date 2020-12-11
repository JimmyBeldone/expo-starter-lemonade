import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import colors from '../../../constants/colors';
import TextApp from '../TextApp';

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: colors.aquamarine,
        borderRadius: 12,
        height: 50,
        justifyContent: 'center',
        marginTop: 50,
        minWidth: 150,
        paddingHorizontal: 25,
    },
    large: { width: 300 },
});

function ButtonMain({ action, large, text }) {
    return (
        <TouchableOpacity onPress={action}>
            <View style={[styles.button, large && styles.large]}>
                <TextApp fw='600'>{text}</TextApp>
            </View>
        </TouchableOpacity>
    );
}

ButtonMain.defaultProps = {
    large: false,
};

ButtonMain.propTypes = {
    action: PropTypes.func.isRequired,
    large: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

export default ButtonMain;
