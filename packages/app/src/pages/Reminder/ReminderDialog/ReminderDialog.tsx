import { Button, Text } from '@timeletter_fe/components/src';
import { useDialog } from '@timeletter_fe/components/src/Dialog/Dialog.hooks';

import Dialog from '~components/Dialog/Dialog';

import { ReminderDialogProps } from './ReminderDialog.type';

export const dialogContextValue = () => ({
  idNull: (
    <Text as="p">
      존재하지 않는 페이지 입니다.
      <br />
      로그인 화면으로 이동합니다.
    </Text>
  ),
  reminderSuccess: (
    <Text as="p">
      리마인더가 신청되었어요 💜
      <br />
      메인화면으로 이동합니다.
    </Text>
  ),
  goMain: (
    <Text as="p">
      로그인이 필요한 서비스에요.
      <br />
      타임레터에 로그인하시겠어요?
    </Text>
  ),
  reminder: (
    <Text as="p">
      로그인이 필요한 서비스에요.
      <br />
      타임레터에 로그인하시겠어요?
    </Text>
  ),
});
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
      <Dialog.Content>{dialogContextValue()[dialogType]}</Dialog.Content>
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
