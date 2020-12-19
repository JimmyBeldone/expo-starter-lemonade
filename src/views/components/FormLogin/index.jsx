import React from 'react';
// import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import ButtonMain from '../ButtonMain/index';
import colors from '../../../constants/colors';
import InputBloc from '../Input';
import { EMAIL_REGEX } from '../../../utils/strings';
import ButtonLink from '../ButtonLink/index';

const styles = StyleSheet.create({
    container: {
        // height: '100%',
    },
    input: {
        backgroundColor: colors.paleGrey,
        borderRadius: 25,
        fontSize: 14,
        fontWeight: '300',
        height: 50,
        marginBottom: 16,
        paddingHorizontal: 20,
    },
});

function FormLogin() {
    const { control, errors, handleSubmit } = useForm();
    const navigation = useNavigation();

    const onSubmit = (data) => {
        console.log('🚀 ~ onSubmit ~ data', data);
    };

    return (
        <View style={styles.container}>
            <Controller
                name='email'
                defaultValue=''
                rules={{
                    pattern: {
                        message: 'Not a valid email',
                        value: EMAIL_REGEX,
                    },
                    required: { message: 'Email is required', value: true },
                }}
                control={control}
                render={({ onChange, value }) => (
                    <InputBloc
                        errors={errors}
                        onChangeText={(text) => onChange(text)}
                        value={value}
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        autoCompleteType='email'
                        placeholder='Email'
                        name='email'
                    />
                )}
            />
            <Controller
                name='password'
                defaultValue=''
                rules={{
                    required: { message: 'Password is required', value: true },
                }}
                control={control}
                render={({ onChange, value }) => (
                    <InputBloc
                        errors={errors}
                        onChangeText={(text) => onChange(text)}
                        value={value}
                        secureTextEntry
                        keyboardType='visible-password'
                        textContentType='password'
                        autoCompleteType='password'
                        placeholder='Password'
                        name='password'
                    />
                )}
            />
            <View style={{ alignItems: 'flex-end', marginBottom: 32 }}>
                <ButtonLink
                    text='Forgotten password ?'
                    action={() => {
                        navigation.navigate('forgotten-password');
                    }}
                />
            </View>

            <ButtonMain text='Sign in' action={handleSubmit(onSubmit)} />
        </View>
    );
}

// FormLogin.propTypes = {};

export default FormLogin;
