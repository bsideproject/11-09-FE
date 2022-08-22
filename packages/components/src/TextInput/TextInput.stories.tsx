import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextInput from './TextInput';

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Templates: ComponentStory<typeof TextInput> = () => <TextInput type="text" />;
export const Base = Templates.bind({});

const EmailTemplates: ComponentStory<typeof TextInput> = () => <TextInput type="email" />;
export const PhoneNumber = EmailTemplates.bind({});
