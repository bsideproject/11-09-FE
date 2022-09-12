import { ComponentMeta, ComponentStory } from '@storybook/react';

import DatePicker from './DatePicker';

export default {
  title: 'Inputs/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Templates: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Base = Templates.bind({});
