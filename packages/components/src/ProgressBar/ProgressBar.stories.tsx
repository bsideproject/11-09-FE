import { ComponentMeta, ComponentStory } from '@storybook/react';

import { vars } from '../styles/global.css';

import ProgressBar from './ProgressBar';

export default {
  title: 'Feedback/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const padding = '20px 0';
const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <>
    <div style={{ padding }}>
      <ProgressBar {...args} />
    </div>
    <div style={{ padding, backgroundColor: vars.colors.black }}>
      <ProgressBar {...args} />
    </div>
  </>
);

export const Base = Template.bind({});
Base.args = {
  steps: 5,
  activeStep: 1,
};
