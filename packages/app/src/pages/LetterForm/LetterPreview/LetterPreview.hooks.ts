import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { reminderAPI } from '~/api';
import env from '~/config';

import { letterFormStepState } from '../LetterForm.atoms';

declare const window: CustomWindow;
export const useShareWithKakao = (isShareReady: boolean, urlSlug?: string) => {
  const kakao = window.Kakao;
  const [step, setStep] = useRecoilState(letterFormStepState);

  useEffect(() => {
    if (!urlSlug || !isShareReady) {
      return;
    }
    const interval = setInterval(() => {
      // TODO find better way
      reminderAPI.reminderLetter(urlSlug).then((res) => {
        res.forEach((response) => {
          if (response.letterStatus === 'DONE') {
            clearInterval(interval);
            setStep(6);
          }
        });
      });
    }, 1000);

    if (step !== 5) {
      clearInterval(interval);
    }

    // eslint-disable-next-line consistent-return
    return () => clearInterval(interval);
  }, [urlSlug, step, isShareReady]);

  return ({
    senderName,
    receivedDate,
    urlSlug: _urlSlug,
  }: Required<Pick<APISchema.Letter, 'senderName' | 'receivedDate' | 'urlSlug'>>) => {
    if (!kakao.isInitialized()) {
      kakao.init(env.kakaoShareKey);
    }

    const date = receivedDate.split('-');

    kakao.Share.sendCustom({
      templateId: 85959,
      templateArgs: {
        name: `\nFrom. ${senderName}`,
        day: `${date[0]}년 ${date[1]}월 ${date[2].split(' ')[0]}일`,
        linkUrl: `reminder/${_urlSlug}`,
      },
      serverCallbackArgs: {
        urlSlug: `${_urlSlug}`,
      },
    });
  };
};
