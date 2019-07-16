import axios from 'axios';
import Env from '../config/env';

const baseUrl = Env.apiUrl;

class UserAPI {
    static signUpUser(userData) {
        return axios.post(`${baseUrl}/users/signup`, userData);
    }

    static logInUser(userData) {
        return axios.post(`${baseUrl}/users/signin`, userData);
    }
}

export default UserAPI;
