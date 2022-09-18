import instance from './instance';

export const authAPI = {
  authenticate: (token: string) =>
    instance.get<void, APISchema.User>(`/oauth/accessToken?token=${token}`),
};

export const letterAPI = {
  getLettersByStatus: (params: APISchema.LettersByStatusGetParams) =>
    instance.get<void, APISchema.LetterByStatusPage>('v1/letter/version2', { params }),
  getLetters: () => instance.get<void, APISchema.LetterTemplate[]>('v1/letter'), // TODO remove
  addLetter: (letterPostReq: APISchema.Letter) =>
    instance.post<void, APISchema.Letter[]>('/v1/letter', letterPostReq),
  updateLetter: (data: APISchema.Letter) => instance.put('/v1/letter', data),
  saveLetter: (letterPutReq: APISchema.LetterPutReq) => instance.put('/v1/letter', letterPutReq),
  deleteDraftLetter: (letter: APISchema.Letter) => instance.delete('/v1/letter', { data: letter }),
  addImage: (letterPostReq: APISchema.LetterImagePostReq) =>
    instance.post<void, APISchema.Letter[]>(`/v1/letter/imageUpload`, letterPostReq, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  getImageByImageId: (imageId: string) =>
    instance.get<void, ArrayBuffer>(`/v1/letter/imageView/${imageId}`),
};

export const reminderAPI = {
  reminderLetter: (uuid: string) =>
    instance.get<void, APISchema.Letter[]>(`/v1/letter/receive/${uuid}`),
  reminderUpdate: (data?: APISchema.ReminderUpDateType) =>
    instance.post<void, APISchema.ReminderUpDateType>('/v1/reminder', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};
