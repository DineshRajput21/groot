import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveData(key, value) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        alert(error);
        console.log('AsyncStorage error during token store:', error);
    }
}

async function readData(key) {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        alert(error);
        console.log('AsyncStorage error during token store:', error);
    }
}

export {
    saveData, readData,
}