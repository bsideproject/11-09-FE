import env from '~/config';

import instance, { getAuth } from './instance';

export const authAPI = {
  authenticate: (token: string) =>
    instance.get<void, APISchema.User>(`/oauth/accessToken?token=${token}`),
  tutorial: (data: APISchema.UserTutorialUpdate) =>
    instance.put<void, APISchema.UserTutorialUpdate>('/v1/member/tutorial', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

export const letterAPI = {
  // getLettersByStatus: (params: APISchema.LettersByStatusGetParams) =>
  //   instance.get<void, APISchema.LetterByStatusPage>('v1/letter/version2', { params }), // TODO 수정 되면 활성화, 안되면 react-intersection-observer 제거
  getLetters: () => instance.get<void, APISchema.LetterTemplate[]>('v1/letter'),
  addLetter: (letterPostReq: APISchema.Letter) =>
    instance.post<void, APISchema.Letter[]>('/v1/letter', letterPostReq),
  saveDraftLetter: (
    data: APISchema.SaveDraftLetter['letter'],
    method: APISchema.SaveDraftLetter['method'],
  ) =>
    fetch(`${env.apiURL}/v1/letter`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAuth(),
      },
      body: JSON.stringify(data),
      keepalive: true,
    }),
  saveLetter: (letterPutReq: APISchema.LetterPutReq) => instance.put('/v1/letter', letterPutReq),
  deleteDraftLetter: (letter: APISchema.Letter) => instance.delete('/v1/letter', { data: letter }),
  addImage: (letterPostReq: FormData) =>
    instance.post<void, APISchema.Letter>(`/v1/letter/imageUpload`, letterPostReq, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  getImageByImageId: (imageId: string) =>
    instance.get<void, ArrayBuffer>(`/v1/letter/imageView/${imageId}`),
};



export const reminderAPI = {
  reminderLetter: (uuid: string) =>
    instance.get<void, APISchema.Letter[]>(`/v1/letter/urlSlug/${uuid}`),
  reminderUpdate: (data?: FormData) =>
    instance.post<void, APISchema.ReminderUpDateType>('/v1/reminder', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};