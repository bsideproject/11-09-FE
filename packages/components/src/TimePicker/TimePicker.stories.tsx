import { ComponentMeta, ComponentStory } from '@storybook/react';

import TimePicker from './TimePicker';

export default {
  title: 'Inputs/TimePicker',
  component: TimePicker,
} as ComponentMeta<typeof TimePicker>;

const Templates: ComponentStory<typeof TimePicker> = (args) => <TimePicker {...args} />;

export const Base = Templates.bind({});
