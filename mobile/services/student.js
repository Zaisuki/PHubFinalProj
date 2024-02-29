import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiURL = import.meta.env.VITE_API_BASE_URL;

export const getClass = async () => {
    const response = await axios
        .get(`${apiURL}/professor/class`, {
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
export const getCheck = async () => {
    const response = await axios
        .get(`${apiURL}/student/check`, {
            withCredentials: true,
            headers: {
                authorization: await AsyncStorage.getItem('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response.message;
};
export const getConnect = async () => {
    const response = await axios
        .get(`${apiURL}/student/connect`, {
            withCredentials: true,
            headers: {
                authorization: await AsyncStorage.getItem('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response.message;
};
export const getCoach = async () => {
    const response = await axios
        .get(`${apiURL}/student/coach`, {
            withCredentials: true,
            headers: {
                authorization: await AsyncStorage.getItem('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response.message;
};
export const getCheckTask = async (classID) => {
    const response = await axios
        .get(`${apiURL}/student/check/task`, {
            withCredentials: true,
            headers: {
                authorization: await AsyncStorage.getItem('authorization'),
            },
            params: {
                classID,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const getConnectTask = async (classID) => {
    const response = await axios
        .get(`${apiURL}/student/connect/task`, {
            withCredentials: true,
            headers: {
                authorization: await AsyncStorage.getItem('authorization'),
            },
            params: {
                classID,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    console.log(response);
    return response;
};
export const getCoachTask = async (classID) => {
    const response = await axios
        .get(`${apiURL}/student/coach/task`, {
            withCredentials: true,
            headers: {
                authorization: await AsyncStorage.getItem('authorization'),
            },
            params: {
                classID,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const submitCheck = async (formData) => {
    const response = await axios
        .post(`${apiURL}/student/coach`, formData, {
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