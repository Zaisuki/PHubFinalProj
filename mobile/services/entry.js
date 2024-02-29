import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '@env';

const apiURL = API_BASE_URL;

export const login = async (data) => {
    const response = await axios
        .post(`${apiURL}/entry/login`, data)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};

export const logout = async () => {
    // const response = await axios
    //     .post(`${apiURL}/entry/logout`, data)
    //     .then((response) => response.data)
    //     .catch((error) => {
    //         throw error;
    //     });
    await await AsyncStorage.removeItem('authorization');
    await await AsyncStorage.removeItem('userType');
    await await AsyncStorage.removeItem('chatToken');
    await await AsyncStorage.removeItem('userFullName');
    await await AsyncStorage.removeItem('username');
    // return response;
};
