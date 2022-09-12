import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tooltip from './Tooltip';

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Templates: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} content="Tooltip content" label="Hover or click me" />
);

export const Base = Templates.bind({});
