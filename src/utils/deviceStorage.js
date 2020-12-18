import { AsyncStorage } from 'react-native';

export default {
    async clear(key) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error('AsyncStorage Error: ', error.message);
        }
    },

    // eslint-disable-next-line consistent-return
    async getItem(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
            // await AsyncStorage.getItem(key);
        } catch (error) {
            console.error('AsyncStorage Error: ', error.message);
        }
    },

    async getMulti(array) {
        try {
            await AsyncStorage.multiGet(array);
        } catch (error) {
            console.error('AsyncStorage Error: ', error.message);
        }
    },
    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.error('AsyncStorage Error: ', error.message);
        }
    },
    async saveMulti(array) {
        try {
            await AsyncStorage.multiSet(array);
        } catch (error) {
            console.error('AsyncStorage Error: ', error.message);
        }
    },
};
