import axios from 'axios';

import env from '@/config';
import { setCookie } from '@/utils/cookies';

const expires = new Date();
expires.setMonth(expires.getMonth() + 1);

const instance = axios.create({ baseURL: env.apiURL });

const serviceToken = async (response: string) => {
  try {
    const { data } = await instance.get(`/oauth/accessToken?token=${response}`);
    setCookie('token', data.token, { path: '/', expires });
    return data.username;
  } catch (e) {
    return '';
  }
};

export const kakaoAccessToken = async (codes: string) => {
  try {
    const searchParams = new URLSearchParams();
    searchParams.append('grant_type', 'authorization_code');
    searchParams.append('client_id', `${env.kakaoKey}`);
    searchParams.append('redirect_uri', `${env.localURL}/login`);
    searchParams.append('code', `${codes}`);
    const accessToken = await axios.post(`${env.kakaoToken}`, searchParams);
    setCookie('access_token', accessToken.data.access_token, { path: '/', expires });
    return serviceToken(accessToken.data.access_token);
  } catch (e) {
    return '';
  }
};
