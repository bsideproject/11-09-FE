import { ComponentMeta, ComponentStory } from '@storybook/react';

import LetterCard from './LetterCard';

export default {
  title: 'Box/LetterCard',
  component: LetterCard,
  argTypes: { as: { control: 'select' } },
} as ComponentMeta<typeof LetterCard>;

const Template: ComponentStory<typeof LetterCard> = (args) => <LetterCard {...args} />;

export const Base = Template.bind({});
Base.args = {
  id: '',
  receiverName: '우영우님',
  content:
    '영우야 안녕 너는 봄날의 햇살이야 영우야 안녕 너는 봄날의 햇살이야 영우야 안녕 너는 봄날의 햇살이야 영우야 안녕 너는 봄날의 햇살이야',
  createdAt: '2022-10-16 23:25:00',
  receivedDate: '2022-10-29 23:25:00',
};
