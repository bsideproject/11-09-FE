import Button from 'Button/Button';
import Dialog from 'Dialog/Dialog';
import { useDialog } from 'Dialog/Dialog.hooks';
import { DialogMessageType } from 'Dialog/Dialog.types';
import Text from 'Text/Text';

interface DialogSampleProps {
  dialogType?: DialogMessageType;
}

function DialogSample(props: DialogSampleProps) {
  const { dialogType, ...rest } = props;
  const { isOpen, onClose } = useDialog();

  return (
    <Dialog {...rest} isOpen={isOpen} onClose={onClose} type={dialogType}>
      <Dialog.Content>
        <Text as="p">편지 작성을 완료 하겠어요?</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button label="취소" onClick={onClose} variant="outline" borderColor="gradient" />
        <Button label="확인" background="gradient" />
      </Dialog.Actions>
    </Dialog>
  );
}

export default Object.assign(DialogSample, {
  show: (props?: DialogSampleProps) => Dialog.create(DialogSample, props),
});
