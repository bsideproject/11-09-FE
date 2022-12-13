import { ReactComponent as KakaoIcon } from '~components/assets/images/kakao_icon.svg';
import { useDialog } from '~components/Dialog/Dialog.hooks';
import { Button, Dialog, Text } from '~components/index';

import { LetterSendConfirmProps } from './LetterSendConfirm.types';

function LetterSendConfirm(props: LetterSendConfirmProps) {
  const { onCancel, onConfirm } = props;
  const { isOpen, onClose } = useDialog();

  const handlePrevClick = () => {
    onClose();
    onCancel();
  };

  const handleConfirmClick = () => {
    onClose();
    onConfirm();
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} type="caution" style={{zIndex: 1002}}>
      <Dialog.Content>
        <Text as="p">
          보낸 편지는 취소하거나 수정할 수 없어요.
          <br />
          보내기 전에 한 번 더 확인해 주세요.
        </Text>
      </Dialog.Content>
      <Dialog.Actions flex="column">
        <Button variant="outline" onClick={handlePrevClick}>
          돌아가기
        </Button>
        <Button background="yellow" onClick={handleConfirmClick} childrenStyle={{ gap: 6 }}>
          <KakaoIcon />
          <Text as="span" color="black">
            카카오톡으로 편지 링크 보내기
          </Text>
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
}

export default Object.assign(LetterSendConfirm, {
  show: (props: LetterSendConfirmProps) => Dialog.create(LetterSendConfirm, props),
});
