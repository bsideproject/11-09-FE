import { useRecoilState } from 'recoil';

import { Text } from '~components/index';

import { letterFormState } from '../LetterForm.atoms';
import NameField from '../NameField/NameField';

function ReceiverField() {
  const [letterForm, setLetterForm] = useRecoilState(letterFormState);

  const handleReceiverBlur = (value: string) => {
    setLetterForm({ ...letterForm, receiverName: value });
  };

  return (
    <div>
      <NameField
        name={letterForm.receiverName ?? ''}
        placeholder={letterForm.receiverName}
        onBlur={handleReceiverBlur}
      >
        <Text as="h2" color="white" size={4}>
          <Text as="span" color="secondary" size={4}>
            누구에게{' '}
          </Text>
          편지를 보낼까요?
          <br />
          이름이나 애칭도 좋아요.
        </Text>
      </NameField>
    </div>
  );
}

export default ReceiverField;
