import { ComponentMeta, ComponentStory } from '@storybook/react';

import LetterBox from './LetterContent';

export default {
  title: 'Box/LetterContent',
  component: LetterBox,
  argTypes: { as: { control: 'select' } },
} as ComponentMeta<typeof LetterBox>;

const Template: ComponentStory<typeof LetterBox> = (args) => <LetterBox {...args} />;

export const Base = Template.bind({});
Base.args = {
  sendName: '문상훈',
  receiverName: '우영우님',
  content:
    '영우야 안녕 너는 봄날의 햇살이야 앞으로 읽어도 거꾸로 읽어도 우영우 기러기 토마토 스위스 인도인 별똥별 역삼역 우영우 영우는 김밥을 좋아해~~ 랄라랄라 펭빠~',
};
