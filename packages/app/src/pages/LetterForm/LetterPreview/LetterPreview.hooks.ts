import { useSetRecoilState } from 'recoil';

import { reminderAPI } from '~/api';
import env from '~/config';

import { letterFormStepState } from '../LetterForm.atoms';

declare const window: CustomWindow;
export const useShareWithKakao = () => {
  const kakao = window.Kakao;
  const setStep = useSetRecoilState(letterFormStepState);
  return ({
    senderName,
    receivedDate,
    urlSlug,
  }: Required<Pick<APISchema.Letter, 'senderName' | 'receivedDate' | 'urlSlug'>>) => {
    if (!kakao.isInitialized()) {
      kakao.init(env.kakaoShareKey);
    }

    const date = receivedDate.split('-');

    kakao.Share.sendCustom({
      templateId: 80393,
      templateArgs: {
        name: `\nFrom. ${senderName}`,
        day: `${date[0]}년 ${date[1]}월 ${date[2].split(' ')[0]}일`,
        linkUrl: `reminder/${urlSlug}`,
      },
      serverCallbackArgs: {
        urlSlug: `${urlSlug}`, 
      },
    });
    
    const interval = setInterval(() => {
     reminderAPI.reminderLetter(urlSlug).then((reonse) => {
        reonse.forEach((response) => {
          if(response.letterStatus === 'DONE') {
            setStep(6);
            clearInterval(interval);
          }
        });
      });
    }, 3000);
  };
};

