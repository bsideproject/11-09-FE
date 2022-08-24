import axios from 'axios';

import { kakaoApi } from '@/config';
import { setCookie } from '@/cookie';

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
  const makeFormData = (params: any) => {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      searchParams.append(key, params[key]);
    });
    return searchParams;
  };

  try {
    const accessToken = await axios.post(
      `${kakaoApi.kakaoToken}`,
      makeFormData({
        grant_type: 'authorization_code',
        client_id: '2e6994001cacfb5a7092098e256a10f0',
        redirect_uri: 'http://192.168.0.4:9090/login',
        code: `${codes}`,
      }),
      { headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' } },
    );
    setCookie('access_token', accessToken.data.access_token, { path: '/', expires });
    return serviceToken(accessToken.data.access_token);
  } catch (e) {
    return '';
  }
};
