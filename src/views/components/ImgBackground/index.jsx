import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
    },
    overlay: {
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
    },
});

const ImgBackground = ({ children, image }) => {
    return (
        <ImageBackground source={image} style={styles.image}>
            <LinearGradient
                colors={['transparent', colors.dark]}
                start={[0.5, 0]}
                end={[0.5, 0.9]}
                style={styles.overlay}
            />
            {children}
        </ImageBackground>
    );
};

ImgBackground.propTypes = {
    children: PropTypes.node.isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default ImgBackground;
