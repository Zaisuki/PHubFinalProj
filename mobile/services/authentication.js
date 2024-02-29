import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '@env';

const apiURL = API_BASE_URL;
export const authenticateToken = async () => {
    const response = await axios
        .post(
            `${apiURL}/entry/checkCurrentUser`,
            {},
            {
                withCredentials: true,
                headers: {
                    authorization: await AsyncStorage.getItem('authorization'),
                },
            }
        )
        .then((response) => response.data)
        .catch((error) => {
            return error.message;
        });
    return response.message === 'valid';
};
