import axios from 'axios';
import { cookies } from './entry';
const apiURL = import.meta.env.VITE_API_BASE_URL;
export const authenticateToken = async () => {
    const response = await axios
        .post(
            `${apiURL}/entry/checkCurrentUser`,
            {},
            {
                withCredentials: true,
                headers: {
                    authorization: cookies.get('authorization'),
                },
            }
        )
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    console.log('s', response);
    return response.message === 'valid';
};
