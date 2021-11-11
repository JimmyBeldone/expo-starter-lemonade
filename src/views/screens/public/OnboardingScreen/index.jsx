import React from 'react';
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import MainLayout from '../../../layouts/MainLayout';
import TextApp from '../../../components/TextApp';
import ButtonMain from '../../../components/ButtonMain';

const styles = StyleSheet.create({
    elem: {
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 20,
    },
    viewPager: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
});

const OnBoardingScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    return (
        <MainLayout>
            <View
                style={{
                    flex: 1,
                    paddingBottom: insets.bottom,
                    width: '100%',
                }}
            >
                <ViewPager
                    style={styles.viewPager}
                    initialPage={0}
                    showPageIndicator
                    orientation='horizontal'
                >
                    <View style={styles.elem} key='1' collapsable={false}>
                        <TextApp>First page</TextApp>
                        <TextApp>Swipe ➡️</TextApp>
                        <ButtonMain
                            action={() => navigation.navigate('login')}
                            text='Go to login page'
                            isLarge
                        />
                    </View>

                    <View style={styles.elem} key='2' collapsable={false}>
                        <TextApp>Second page</TextApp>
                        <ButtonMain
                            action={() => navigation.navigate('login')}
                            text='Go to login page'
                            isLarge
                        />
                    </View>

                    <View style={styles.elem} key='3' collapsable={false}>
                        <TextApp>Third page</TextApp>
                        <ButtonMain
                            action={() => navigation.navigate('login')}
                            text='Go to login page'
                            isLarge
                        />
                    </View>
                </ViewPager>
            </View>
        </MainLayout>
    );
};

OnBoardingScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default OnBoardingScreen;
