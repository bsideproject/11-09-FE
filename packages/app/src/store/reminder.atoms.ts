import { atom } from 'recoil';

export const reminder = atom<string>({
  key: 'reminderUUID',
  default: '',
});
