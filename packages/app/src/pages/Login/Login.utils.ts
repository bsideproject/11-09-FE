import axios from 'axios';

import { kakaoApi, localApi } from '@/config';
import { setCookie } from '@/utils/cookies';

const expires = new Date();
expires.setMonth(expires.getMonth() + 1);

const serviceToken = async (response: string) => {
  try {
    const data = await axios.get(`/oauth/accessToken?token=${response}`);
    setCookie('token', data.data.token, { path: '/', expires });
    return data.data.username;
  } catch (e) {
    return '';
  }
};

export const kakaoAccessToken = async (codes: string) => {
  try {
    const searchParams = new URLSearchParams();
    searchParams.append('grant_type', 'authorization_code');
    searchParams.append('client_id', `${kakaoApi.kakaoKey}`);
    searchParams.append('redirect_uri', `${localApi.localPath}/login`);
    searchParams.append('code', `${codes}`);
    const accessToken = await axios.post(`${kakaoApi.kakaoToken}`, searchParams);
    setCookie('access_token', accessToken.data.access_token, { path: '/', expires });
    return serviceToken(accessToken.data.access_token);
  } catch (e) {
    return '';
  }
};
