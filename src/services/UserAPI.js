import axios from 'axios';

// require('dotenv').config();

const baseUrl = process.env.REACT_APP_API_URL || "http://127.0.0.1:5555/api/v1";

class UserAPI {
    static postNewUser(userData) {
        return axios.post(`${baseUrl}/users/signup`, userData);
    }

    static loginUser(userData) {
        return axios.get(`${baseUrl}/users/signin`, userData);
    }

    // static getUserDataFromStagingApi(email) {
    //     const token = Cookie.get('jwt-token');
    //     const usersStagingUrl = process.env.REACT_APP_ALL_USERS;
    //     return axios.get(
    //         `${usersStagingUrl}${email}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    // }
}

export default UserAPI;
