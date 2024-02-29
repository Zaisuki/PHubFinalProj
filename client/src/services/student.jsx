import axios from 'axios';
import { cookies } from './entry';

const apiURL = import.meta.env.VITE_API_BASE_URL;

export const getClass = async () => {
    const response = await axios
        .get(`${apiURL}/professor/class`, {
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
export const getCheck = async () => {
    const response = await axios
        .get(`${apiURL}/student/check`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
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
                authorization: cookies.get('authorization'),
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
                authorization: cookies.get('authorization'),
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
        .get(`${apiURL}/professor/check/task`, {
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
export const getConnectTask = async (classID) => {
    const response = await axios
        .get(`${apiURL}/professor/connect/task`, {
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
    console.log(response);
    return response;
};
export const getCoachTask = async (classID) => {
    const response = await axios
        .get(`${apiURL}/professor/coach/task`, {
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
