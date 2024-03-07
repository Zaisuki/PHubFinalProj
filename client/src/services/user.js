import axios from 'axios';
import { cookies } from './entry';

const apiURL = import.meta.env.VITE_API_BASE_URL;

export const profile = async () => {
    const response = await axios
        .get(`${apiURL}/user/profile`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
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
                authorization: cookies.get('authorization'),
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
                authorization: cookies.get('authorization'),
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
                authorization: cookies.get('authorization'),
            },
        })
        .then((response) => response.data.userCredentials.notification)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const getClassTask = async (classID) => {
    const response = await axios
        .get(`${apiURL}/user/class/task`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
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
export const getClassPeople = async (classID) => {
    const response = await axios
        .get(`${apiURL}/user/class/people`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
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
