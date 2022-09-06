import instance from './instance';

export const authAPI = {
  authenticate: (token: string) =>
    instance.get<void, APISchema.User>(`/oauth/accessToken?token=${token}`),
};

export const letterAPI = {
  addLetter: (letterPostReq: APISchema.Letter) =>
    instance.post<void, APISchema.Letter[]>('/v1/letter', letterPostReq),
};

export const reminderAPI = {
  reminderLetter: (uuid: string) =>
    instance.get<void, APISchema.ReminderType>(`/v1/letter/receive/${uuid}`),
};
