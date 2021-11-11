import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import colors from '../../../constants/colors';
import TextApp from '../TextApp';

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 12,
        height: 50,
        justifyContent: 'center',
        minWidth: 150,
        paddingHorizontal: 25,
    },
    large: { width: '100%' },
    primary: {
        backgroundColor: colors.aquamarine,
    },
    secondary: {
        backgroundColor: 'transparent',
        borderColor: colors.aquamarine,
        borderWidth: 1,
    },
});

const ButtonMain = ({ action, isLarge, isSecondary, text }) => {
    const { button, large, primary, secondary } = styles;
    return (
        <TouchableOpacity onPress={action}>
            <View
                style={[
                    button,
                    isLarge && large,
                    isSecondary ? secondary : primary,
                ]}
            >
                <TextApp fw='600'>{text}</TextApp>
            </View>
        </TouchableOpacity>
    );
};

ButtonMain.defaultProps = {
    isLarge: false,
    isSecondary: false,
};

ButtonMain.propTypes = {
    action: PropTypes.func.isRequired,
    isLarge: PropTypes.bool,
    isSecondary: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

export default ButtonMain;
