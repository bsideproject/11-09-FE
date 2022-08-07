import { ComponentMeta, ComponentStory } from '@storybook/react';

import Heading from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: { as: { control: 'select' } },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Base = Template.bind({});
Base.args = {
  heading: '타임레터 평창평화체',
  as: 'h2',
  size: 4,
};
