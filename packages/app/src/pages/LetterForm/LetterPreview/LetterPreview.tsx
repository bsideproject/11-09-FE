import { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { useMutation } from '@tanstack/react-query';

import { letterAPI } from '~/api';
import { useIsPastDate } from '~/pages/LetterForm/LetterForm.hooks';
import { letterPreviewActionsStyle } from '~/pages/LetterForm/LetterPreview/LetterPreview.css';
import { useShareWithKakao } from '~/pages/LetterForm/LetterPreview/LetterPreview.hooks';
import LetterSendConfirm from '~/pages/LetterForm/LetterSendConfirm/LetterSendConfirm';
import { ReactComponent as SanTa } from '~components/assets/images/25_santa.svg';
import { Button, LetterTemplate, NotificationToaster, Text } from '~components/index';

import { letterFormState, letterFormStepState, letterImageState } from '../LetterForm.atoms';

function LetterPreview() {
  const letterImage = useRecoilValue(letterImageState);
  const [letterForm, setLetterForm] = useRecoilState(letterFormState);
  const {
    userID,
    id,
    receivedDate,
    senderName,
    receiverName,
    content,
    imageId,
    urlSlug,
  } = letterForm;
  const setStep = useSetRecoilState(letterFormStepState);
  const letterStatus = 'DRAFT';
  const saveLetter = useMutation(
    (letterPutReq: APISchema.LetterPutReq) => letterAPI.saveLetter(letterPutReq),
    {
      onError: () => {
        NotificationToaster.show('편지 저장에 실패했습니다.');
      },
    },
  ).mutateAsync;

  if (!senderName || !receiverName || !content) {
    return null;
  }

  const [isShareReady, setIsShareReady] = useState<boolean>(false);
  const handlePrevClick = () => {
    setStep(4);
    setIsShareReady(false);
  };

  const shareWithKakao = useShareWithKakao(isShareReady, urlSlug);
  const sendLetter = async () => {
    setIsShareReady(true);
    if (
      !userID ||
      !id ||
      !receivedDate ||
      !senderName ||
      !receiverName ||
      !content ||
      !urlSlug ||
      !letterStatus
    ) {
      return;
    }
    await saveLetter({
      userID,
      id,
      receivedDate,
      senderName,
      receiverName,
      content,
      imageId,
      urlSlug,
      letterStatus
    });
    setLetterForm({
      ...letterForm,
    });
    shareWithKakao({ receivedDate, senderName, urlSlug });
  };

  const isPastDate = useIsPastDate();
  const handleSendClick = () => {
    if (receivedDate && isPastDate(receivedDate)) {
      setStep(3);
      return;
    }
    LetterSendConfirm.show({ onCancel: handlePrevClick, onConfirm: sendLetter });
  };

  return (
    <>
      {/* TODO Make LetterFormHeading component */}
      <Text as="h2" color="white" size={4} style={{marginBottom: 24}}>
        잘못 적은 부분이 없는지 확인해 주세요.
      </Text>
      <LetterTemplate
        letterProps={{
          senderName,
          receiverName,
          content,
          imageDataURL: letterImage.image,
        }}
        style={{ marginTop: 20, paddingBottom: 32 }}
      />
      <div style={{ margin: '20px 0px' }}>
        <SanTa />
      </div>
      <div className={letterPreviewActionsStyle}>
        <Button label="돌아가기" variant="outline" onClick={handlePrevClick} />
        <Button label="편지 보내기" background="gradient" onClick={handleSendClick} />
      </div>
    </>
  );
}

export default LetterPreview;
