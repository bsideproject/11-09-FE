import { useDialog } from '~components/Dialog/Dialog.hooks';
import { Button, Dialog, Text } from '~components/index';

import { LogoutConfirmProps } from './LogoutConfirm.types';

function LogoutConfirm(props: LogoutConfirmProps) {
  const { onConfirm } = props;

  const { isOpen, onClose } = useDialog();

  const handleConfirmClick = () => {
    onClose();
    // TODO 임시방편 find better way for to close dialog before any action
    setTimeout(() => onConfirm(), 600);
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} dialogSize={{ width: 300 }}>
      <Dialog.Content>
        <Text as="p">로그아웃 하시겠습니까?</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button label="취소" variant="outline" borderColor="gradient" onClick={onClose} />
        <Button label="확인" background="gradient" onClick={handleConfirmClick} />
      </Dialog.Actions>
    </Dialog>
  );
}

export default Object.assign(LogoutConfirm, {
  show: (props: LogoutConfirmProps) => Dialog.create(LogoutConfirm, props),
});
