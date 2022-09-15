import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useMutation } from '@tanstack/react-query';

import { letterAPI } from '~/api';
import env from '~/config';
import LetterSendConfirm from '~/pages/LetterForm/LetterSendConfirm/LetterSendConfirm';
import { Button, LetterTemplate, NotificationToaster, Text } from '~components/index';
import { layoutSprinkles } from '~components/styles/layout.css';

import { letterFormState, letterFormStepState, letterImageState } from '../LetterForm.atoms';

function LetterPreview() {
  const letterForm = useRecoilValue(letterFormState);
  const letterImage = useRecoilValue(letterImageState)
  const { userID, id, receivedDate, senderName, receiverName, content, imageId } = letterForm;

  // TODO: 카카오 타입 any 설정 필요
  // eslint-disable-next-line
  const kakao = (window as any).Kakao;

  const setStep = useSetRecoilState(letterFormStepState);
  
  const kakaoShare = () => {
    if (!kakao.isInitialized()) {
      kakao.init(env.kakaoShareKey);
    }
    kakao.Share.sendCustom({
      templateId: 80393,
      templateArgs: {
        name: `\nFrom. ${receiverName}`,
        day: `${receivedDate}\n`,
        linkUrl: `reminder/${id}`,
      },
      callback: () => setStep(6),
    });
  };

  const updateLetter = useMutation(
    (letterPutReq: APISchema.LetterPutReq) => letterAPI.updateLetter(letterPutReq),
    {
      onError: () => {
        NotificationToaster.show('편지 저장에 실패했습니다.');
      },
    },
  ).mutateAsync;

  if (!senderName || !receiverName || !content) {
    return null;
  }

  const handlePrevClick = () => {
    setStep(4);
  };

  const sendLetter = async () => {
    if (!userID || !id || !receivedDate || !senderName || !receiverName || !content) {
      return;
    }
    await updateLetter({ userID, id, receivedDate, senderName, receiverName, content, imageId });
    kakaoShare()
  };

  const handleSendClick = () => {
    LetterSendConfirm.show({ onCancel: handlePrevClick, onConfirm: sendLetter });
  };

  return (
    <>
      <Text as="h2" color="white">
        잘못 적은 부분이 없는지 확인해 주세요.
      </Text>
      <LetterTemplate
        letterProps={{
          senderName,
          receiverName,
          content,
          imageDataURL: letterImage.image,
        }}
        style={{ marginTop: 20 }}
      />
      <div className={layoutSprinkles({ display: 'flex' })} style={{ marginTop: 'auto', gap: 12 }}>
        <Button label="돌아가기" variant="outline" onClick={handlePrevClick} />
        <Button label="편지 보내기" background="gradient" onClick={handleSendClick} />
      </div>
    </>
  );
}

export default LetterPreview;
