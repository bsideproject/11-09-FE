import axios from 'axios';

import env from '~/config';
import {getCookie} from "~utils/cookies";

const instance = axios.create({ baseURL: env.apiURL, headers: { Authorization: `Bearer ${getCookie('token')}`} });

instance.interceptors.response.use((response) => response.data);

export default instance;
