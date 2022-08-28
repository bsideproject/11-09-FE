import { ComponentMeta, ComponentStory } from '@storybook/react';

import Heading from '../Heading/Heading';

import Text from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Templates: ComponentStory<typeof Text> = (args) => (
  <>
    <Text {...args}>텍스트</Text>
    <div style={{ background: 'black' }}>
      <Heading size={1} color="white">
        안녕하세요,{' '}
        <Text as="span" color="secondary" asHeadingFont>
          우영우
        </Text>
        님
      </Heading>
    </div>
  </>
);
export const Base = Templates.bind({});
Base.args = { as: 'div', color: 'black', size: 3, asHeadingFont: false };
