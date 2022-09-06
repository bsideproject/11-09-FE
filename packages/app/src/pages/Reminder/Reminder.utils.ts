import axios from 'axios';

import env from '~/config';

const instance = axios.create({ baseURL: env.apiURL });

export const reminderLetter = async (response: string) => {
  try {
    const { data } = await instance.get(`/v1/letter/receive/${response}`);
    return data;
  } catch (e) {
    return '';
  }
};
