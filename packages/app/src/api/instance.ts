import axios from 'axios';

import env from '~/config';
import { getCookie } from '~utils/cookies';

export const getAuth = () => `Bearer ${getCookie('token')}`;

const instance = axios.create({ baseURL: env.apiURL });

instance.interceptors.response.use((response) => response.data);

instance.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers = {
    Authorization: getAuth(),
  };

  return config;
});

export default instance;
