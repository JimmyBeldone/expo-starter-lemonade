import React, { useState } from 'react';
import {
    View,
    LayoutAnimation,
    Platform,
    UIManager,
    StyleSheet,
} from 'react-native';

import ButtonAlt from '../ButtonAlt/index';
import FormLogin from '../FormLogin';
import colors from '../../../constants/colors';

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        width: '100%',
    },
    formContainer: {
        overflow: 'hidden',
    },
    separator: {
        backgroundColor: colors.charcoalGrey,
        height: 1,
        marginBottom: 20,
        marginTop: 34,
        width: '100%',
    },
});

const FormLoginAnimation = () => {
    const [expanded, setExpanded] = useState(false);
    const [height, setHeight] = useState(0);

    const toggleExpand = () => {
        LayoutAnimation.configureNext(
            LayoutAnimation.create(
                250,
                LayoutAnimation.Types.easeInEaseOut,
                LayoutAnimation.Properties.scaleY,
            ),
        );
        setHeight(height === 0 ? 'auto' : 0);
        setExpanded(true);
    };

    return (
        <View style={styles.container}>
            {!expanded && (
                <ButtonAlt
                    action={toggleExpand}
                    text='Connect with email'
                    isSecondary
                />
            )}
            <View style={[styles.formContainer, { height }]}>
                <FormLogin />
                <View style={styles.separator} />
            </View>
        </View>
    );
};

export default FormLoginAnimation;
