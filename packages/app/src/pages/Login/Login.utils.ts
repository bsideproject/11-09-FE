import axios from 'axios';

import { kakaoApi, localApi } from '@/config';
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
        client_id: `${kakaoApi.kakaoKey}`,
        redirect_uri: `${localApi.localPath}/login`,
        code: `${codes}`,
      }),
    );
    setCookie('access_token', accessToken.data.access_token, { path: '/', expires });
    return serviceToken(accessToken.data.access_token);
  } catch (e) {
    return '';
  }
};
