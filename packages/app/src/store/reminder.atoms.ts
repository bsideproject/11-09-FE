import { atom } from 'recoil';

import persistStore from './persistStore';

interface reminderState extends APISchema.Letter {
  id?: string;
}

const getInitialReminder = async (): Promise<reminderState> => {
  try {
    const value = await persistStore.getItem<reminderState>('reminder');
    if (!value) {
      return {} 
    }
    return {
      ...value
    };
  } catch (error) {
    throw Error(`[Persist State] reminderId: ${error}`);
  }
};

export const reminder = atom<reminderState>({
  key: 'reminderUUID',
  default: getInitialReminder(),
  effects: [
    ({ onSet, setSelf }) => {
      onSet((newValue) => {
        const result: reminderState = {
          ...newValue
        };
        setSelf(result);
        persistStore.setItem<reminderState>('reminder', result);
      });
    },
  ],
});
