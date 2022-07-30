import { ComponentMeta, ComponentStory } from '@storybook/react';

import Heading from './Heading';

export default {
  title: 'Example/Heading',
  component: Heading,
  argTypes: { as: { control: 'select' } },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  heading: '타임레터 평창평화체',
  as: 'h2',
  size: 4,
};
