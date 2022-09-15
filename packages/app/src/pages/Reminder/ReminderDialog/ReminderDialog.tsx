import { Button, Text } from '@timeletter_fe/components/src';
import { useDialog } from '@timeletter_fe/components/src/Dialog/Dialog.hooks';

import Dialog from '~components/Dialog/Dialog';

import { ReminderDialogProps } from './ReminderDialog.type';

export const dialogContextValue = {
  idNull: `존재하지 않는 페이지 입니다. 💜 \n 로그인 화면으로 이동합니다.`,
  reminderSuccess: `리마인더가 신청되었어요 💜 \n 메인화면으로 이동합니다.`,
  goMain: `로그인이 필요한 서비스에요.\n 타임레터에 로그인하시겠어요?`,
  reminder: `로그인이 필요한 서비스에요. \n 타임레터에 로그인하시겠어요?`,
};
function ReminderDialog(props: ReminderDialogProps) {
  const { dialogType, dialogClose } = props;
  const { isOpen,onClose } = useDialog();

  const handleReturn = () => {
    onClose();
    dialogClose();
  };

  const handleConfirmClick = () => {
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} style={{ width: 300 }} type="caution">
      <Dialog.Content>
        <Text as="p" style={{ whiteSpace: 'pre-wrap' }}>
          {dialogContextValue[dialogType]}
        </Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button
          label={dialogType === 'goMain' || dialogType === 'reminder' ? '로그인하기' : '확인'}
          background="gradient"
          onClick={handleReturn}
        />
      </Dialog.Actions>
      {(dialogType === 'goMain' || dialogType === 'reminder') && (
        <Dialog.Actions style={{ marginTop: 10 }}>
          <Button
            label="돌아가기"
            variant="outline"
            borderColor="gradient"
            onClick={handleConfirmClick}
          />
        </Dialog.Actions>
      )}
    </Dialog>
  );
}

export default Object.assign(ReminderDialog, {
  show: (props: ReminderDialogProps) => Dialog.create(ReminderDialog, props),
});
