import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '@env';

const apiURL = API_BASE_URL;

export const profile = async () => {
    const response = await axios
        .get(`${apiURL}/user/profile`, {
            withCredentials: true,
            headers: {
                authorization: await AsyncStorage.getItem('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const feed = async () => {
    const response = await axios
        .get(`${apiURL}/feed/feed`, {
            withCredentials: true,
            headers: {
                authorization: await AsyncStorage.getItem('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const course = async () => {
    const response = await axios
        .get(`${apiURL}/user/course`, {
            withCredentials: true,
            headers: {
                authorization: await AsyncStorage.getItem('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const getNotification = async () => {
    const response = await axios
        .get(`${apiURL}/user/notification`, {
            withCredentials: true,
            headers: {
                authorization: await AsyncStorage.getItem('authorization'),
            },
        })
        .then((response) => response.data.userCredentials.notification)
        .catch((error) => {
            throw error;
        });
    return response;
};
