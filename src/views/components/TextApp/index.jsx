import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

import colors from '../../../constants/colors';

const TextApp = ({ children, fs, fw, style, textColor }) => {
    const baseStyle = {
        color: colors[textColor],
        fontSize: fs,
        fontWeight: fw,
        ...style,
    };

    return <Text style={baseStyle}>{children}</Text>;
};

TextApp.defaultProps = {
    fs: 16,
    fw: 'normal',
    style: {},
    textColor: 'white',
};

TextApp.propTypes = {
    children: PropTypes.string.isRequired,
    fs: PropTypes.number,
    fw: PropTypes.string,
    style: PropTypes.object,
    textColor: PropTypes.string,
};

export default TextApp;
