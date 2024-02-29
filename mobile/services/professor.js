import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiURL = import.meta.env.VITE_API_BASE_URL;

export const postAnnouncement = async (titleVal, descriptionVal) => {
    const response = await axios
        .post(
            `${apiURL}/professor/announcement`,
            {
                header: titleVal,
                announcement: descriptionVal,
                classID: 'public',
            },
            {
                withCredentials: true,
                headers: {
                    authorization: await AsyncStorage.getItem('authorization'),
                },
            }
        )
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
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
export const getCheck = async (classID) => {
    const response = await axios
        .get(`${apiURL}/professor/check`, {
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
export const getConnect = async (classID) => {
    const response = await axios
        .get(`${apiURL}/professor/connect`, {
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
export const getCoach = async (classID) => {
    const response = await axios
        .get(`${apiURL}/professor/coach`, {
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
export const getCheckTask = async (classID) => {
    const response = await axios
        .get(`${apiURL}/professor/check/task`, {
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
        .get(`${apiURL}/professor/connect/task`, {
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
        .get(`${apiURL}/professor/coach/task`, {
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

export const postCheck = async (formData) => {
    const response = await axios
        .post(`${apiURL}/professor/check`, formData, {
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

export const postConnect = async (formData) => {
    const response = await axios
        .post(`${apiURL}/professor/connect`, formData, {
            withCredentials: true,
            headers: {
                authorization: await AsyncStorage.getItem('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    console.log(response);
    return response;
};

export const postCoach = async (formData) => {
    const response = await axios
        .post(`${apiURL}/professor/coach`, formData, {
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
