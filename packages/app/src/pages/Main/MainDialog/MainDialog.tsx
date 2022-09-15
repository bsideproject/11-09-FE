import { Button, Text } from '@timeletter_fe/components/src';
import { useDialog } from '@timeletter_fe/components/src/Dialog/Dialog.hooks';

import Dialog from '~components/Dialog/Dialog';

import { MainDialogProps } from './MainDialog.type';

const dialogContextValue = ({
  success: '리마인더가 신청되었어요 💜',
  fail: '이미 이 편지의 리마인더를 신청했어요.',
});

function MainDialog(props: MainDialogProps) {
  const { dialogType } = props;
  const { isOpen, onClose } = useDialog();

  const handleConfirmClick = () => {
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} style={{ width: 300 }} type="caution">
      <Dialog.Content>  
        <Text as="p">
          {dialogContextValue[dialogType]}
        </Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button
          label={dialogType === 'success' ? '좋아요!' : '확인'}
          background="gradient"
          onClick={handleConfirmClick}
        />
      </Dialog.Actions>
    </Dialog>
  );
}

export default Object.assign(MainDialog, {
  show: (props: MainDialogProps) => Dialog.create(MainDialog, props),
});
