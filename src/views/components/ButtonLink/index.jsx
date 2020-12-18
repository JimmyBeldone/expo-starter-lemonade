import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import TextApp from '../TextApp';

function ButtonLink({ action, text }) {
    return (
        <TouchableOpacity onPress={action}>
            <TextApp
                fw='600'
                fs={14}
                textColor='aquamarine'
                style={{
                    textDecorationLine: 'underline',
                }}
            >
                {text}
            </TextApp>
        </TouchableOpacity>
    );
}

ButtonLink.propTypes = {
    action: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default ButtonLink;
