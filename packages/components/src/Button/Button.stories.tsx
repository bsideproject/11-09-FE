import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReactComponent as CancelIcon } from '../assets/icons/cancel.svg';

import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: { background: { control: 'select' } },
} as ComponentMeta<typeof Button>;

const Templates: ComponentStory<typeof Button> = (args) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <Button {...args} size="small" />
    <Button {...args} size="medium" />
    <Button {...args} size="large" />
  </div>
);

export const Base = Templates.bind({});
Base.args = { label: '편지 보내기', variant: 'solid' };

export const IconOnly = Templates.bind({});
IconOnly.args = {
  children: <CancelIcon />,
  iconPosition: 'right',
  variant: 'solid',
};
