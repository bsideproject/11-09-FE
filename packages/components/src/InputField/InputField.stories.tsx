import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../Button/Button';
import NumberInput from '../NumberInput/NumberInput';

import InputField from './InputField';

export default {
  title: 'Inputs/InputField',
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Templates: ComponentStory<typeof InputField> = () => {
  const [showError, setShowError] = useState<boolean>(false);

  const handleErrorClick = () => setShowError(!showError);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 200 }}>
      <InputField label="휴대폰 번호" errorMessage={showError ? '입력이 필요합니다.' : undefined}>
        <NumberInput placeholder="010-0000-0000" type="tel" />
      </InputField>

      <Button
        style={{ marginTop: 'auto', flex: '0 0' }}
        label="에러 메세지 표시"
        variant="transparent"
        onClick={handleErrorClick}
      />
    </div>
  );
};
export const Base = Templates.bind({});
