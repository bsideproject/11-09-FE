import { Button, Text } from '@timeletter_fe/components/src';
import { useDialog } from '@timeletter_fe/components/src/Dialog/Dialog.hooks';

import Dialog from '~components/Dialog/Dialog';

import { ReminderDialogProps } from './ReminderDialog.type';

function ReminderDialog(props: ReminderDialogProps) {
  const { dialogOpen, dialogType, dialogClose } = props;
  const { handleCloseDialog } = useDialog();

  return (
    <Dialog isOpen={dialogOpen} style={{ width: 350 }} type="caution">
      <Dialog.Content>
        <Text as="p">
          {dialogType !== 'empty'
            ? '  로그인이 필요한 서비스에요. <br></br> 타임레터에 로그인 하시겠어요?'
            : '  존재하지 않는 페이지 입니다. <br></br> 로그인 페이지로 이동합니다.'}
        </Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button
          label={dialogType !== 'empty' ? '로그인하기' : '확인'}
          background="gradient"
          onClick={dialogClose}
        />
      </Dialog.Actions>
      {dialogType !== 'empty' && (
        <Dialog.Actions style={{ marginTop: 10 }}>
          <Button
            label="돌아가기"
            variant="outline"
            borderColor="gradient"
            onClick={handleCloseDialog}
          />
        </Dialog.Actions>
      )}
    </Dialog>
  );
}

export default ReminderDialog;
