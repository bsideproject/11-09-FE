import { ComponentMeta, ComponentStory } from '@storybook/react';

import NumberInput from './NumberInput';

export default {
  title: 'Inputs/NumberInput',
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const Templates: ComponentStory<typeof NumberInput> = () => <NumberInput type="number" />;
export const Base = Templates.bind({});

const PhoneNumberTemplates: ComponentStory<typeof NumberInput> = () => <NumberInput type="tel" />;
export const PhoneNumber = PhoneNumberTemplates.bind({});
