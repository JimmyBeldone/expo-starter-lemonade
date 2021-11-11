import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../constants/colors';
import TextApp from '../TextApp';

const styles = {
    input: {
        backgroundColor: colors.paleGrey,
        borderRadius: 25,
        fontSize: 14,
        fontWeight: '300',
        height: 50,
        paddingHorizontal: 20,
    },
    inputError: {
        borderColor: colors.strongPink,
        borderWidth: 2,
        color: colors.strongPink,
    },
    wrapper: { marginBottom: 16, width: '100%' },
};

const InputBloc = ({ errors, name, ...props }) => {
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={[styles.input, errors[name] && styles.inputError]}
                placeholderTextColor={
                    errors[name] ? colors.strongPink : colors.slate
                }
                {...props}
            />
            {errors[name] && (
                <View style={{ alignItems: 'flex-end', marginTop: 9 }}>
                    <TextApp fs={13} textColor='strongPink'>
                        {errors[name].message}
                    </TextApp>
                </View>
            )}
        </View>
    );
};

InputBloc.defaultProps = {
    errors: null,
};

InputBloc.propTypes = {
    errors: PropTypes.object,
    name: PropTypes.string.isRequired,
};

export default InputBloc;
