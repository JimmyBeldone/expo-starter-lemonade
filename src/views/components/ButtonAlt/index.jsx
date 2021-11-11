import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import colors from '../../../constants/colors';
import TextApp from '../TextApp';

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 20,
        borderWidth: 2,
        height: 40,
        justifyContent: 'center',
        minWidth: 150,
        paddingHorizontal: 25,
        width: '100%',
    },
    primary: {
        borderColor: colors.white,
    },
    secondary: {
        borderColor: colors.aquamarine,
    },
});

const ButtonAlt = ({ action, icon, isSecondary, text }) => {
    console.log('🚀 ~ ButtonAlt ~ icon', icon);
    const { button, primary, secondary } = styles;
    return (
        <TouchableOpacity onPress={action}>
            <View style={[button, isSecondary ? secondary : primary]}>
                <TextApp fs={14}>{text}</TextApp>
            </View>
        </TouchableOpacity>
    );
};

ButtonAlt.defaultProps = {
    icon: null,
    isSecondary: false,
};

ButtonAlt.propTypes = {
    action: PropTypes.func.isRequired,
    icon: PropTypes.string,
    isSecondary: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

export default ButtonAlt;
