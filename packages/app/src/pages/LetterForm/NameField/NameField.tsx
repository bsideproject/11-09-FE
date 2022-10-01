import { ChangeEvent, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { useFocus } from '~/hooks';
import { InputField, TextInput } from '~components/index';

import { nameFieldState } from './NameField.atoms';
import { NameFieldProps } from './NameField.types';

const maxLength = 10;

function NameField(props: NameFieldProps) {
  const { name: nameFromParent, onBlur, children: heading, placeholder } = props;
  const [nameField, setNameField] = useRecoilState(nameFieldState);
  const { name, errorMessage } = nameField;

  useEffect(() => {
    setNameField({ name: nameFromParent });
  }, [nameFromParent]);

  const inputRef = useRef<HTMLInputElement>(null);
  const focus = useFocus<HTMLInputElement>(inputRef);
  useEffect(() => {
    focus();
  }, [nameField.errorMessage]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > maxLength) {
      return;
    }
    setNameField({ name: value });
  };

  const handleBlur = (_: ChangeEvent<HTMLInputElement>) => {
    onBlur(name.trim());
  };

  return (
    <div>
      {heading}

      <InputField errorMessage={errorMessage}>
        <TextInput
          ref={inputRef}
          style={{ marginTop: 28 }}
          type="text"
          placeholder={placeholder}
          maxLength={maxLength}
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </InputField>
    </div>
  );
}

export default NameField;
