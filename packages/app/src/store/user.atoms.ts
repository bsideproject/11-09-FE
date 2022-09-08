import { atom } from 'recoil';

import persistStore from './persistStore';

interface UserState extends APISchema.User {
  name?: string; // nickname || username
  phoneNumber?: string;
}

const getInitialUser = async (): Promise<UserState> => {
  try {
    const value = await persistStore.getItem<UserState>('user');
    if (!value) {
      return {} as APISchema.User & { name: string };
    }
    return { ...value, name: value.name || value.nickname || value.username, phoneNumber: value.phoneNumber };
  } catch (error) {
    throw Error(`[Persist State] user: ${error}`);
  }
};

export const userState = atom<UserState>({
  key: 'user',
  default: getInitialUser(),
  effects: [
    ({ onSet, setSelf }) => {
      onSet((newValue) => {
        const result: UserState = {
          ...newValue,
          name: newValue.nickname || newValue.username,
          token: '',
        };
        setSelf(result);
        persistStore.setItem<UserState>('user', result);
      });
    },
  ],
});
