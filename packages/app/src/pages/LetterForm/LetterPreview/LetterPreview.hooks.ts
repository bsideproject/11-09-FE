import { useSetRecoilState } from 'recoil';

import env from '~/config';
import { letterFormStepState } from '~/pages/LetterForm/LetterForm.atoms';
import { NotificationToaster } from '~components/index';

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

    const date = new Date(receivedDate);

    kakao.Share.sendCustom({
      templateId: 80393,
      templateArgs: {
        name: `\nFrom. ${senderName}`,
        day: `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 `,
        linkUrl: `reminder/${urlSlug}`,
      },
      callback: () => {
        setStep(6);
      },
      success: () => {
        setStep(6);
      },
      fail: () => {
        NotificationToaster.show('카카오톡 공유가 실패했습니다. 다시 시도 해 주시요.');
      },
    });
  };
};
