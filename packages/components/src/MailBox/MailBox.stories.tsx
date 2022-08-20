import { ComponentMeta, ComponentStory } from '@storybook/react';
import MailBox from './MailBox';

export default {
  title: 'Box/MailBox',
  component: MailBox,
  argTypes: { as: { control: 'select' } },
} as ComponentMeta<typeof MailBox>;

const Template: ComponentStory<typeof MailBox> = (args) => <MailBox {...args} />;

export const Base = Template.bind({});
Base.args = {
  id: '',
  sendName: '우영우님',
  title: '영우야 안녕 너는 봄날의 햇살이야',
  sendDate: '2022년 10월 16일 오후 11:25',
  wrtieDate: '2022년 10월 29일 오후 11:25',
  img: '',
};
