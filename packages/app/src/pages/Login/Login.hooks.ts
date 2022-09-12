import { useCallback } from 'react';
import axios from 'axios';

import env from '~/config';
import { NotificationToaster } from '~components/index';

export const useGetKakaoAccessToken = () =>
  useCallback(async (code: string) => {
    if (!env.kakaoToken) {
      return;
    }
    try {
      const searchParams = new URLSearchParams({});
      searchParams.append('grant_type', 'authorization_code');
      searchParams.append('client_id', env.kakaoKey || '');
      searchParams.append('redirect_uri', `${env.localURL}/login`);
      searchParams.append('code', code);

      const { data } = await axios.post(env.kakaoToken, searchParams);

      // eslint-disable-next-line consistent-return
      return data;
    } catch (error) {
      NotificationToaster.show('로그인에 실패했습니다. 잠시 후 다시 시도 해주세요.');
    }
  }, []);
