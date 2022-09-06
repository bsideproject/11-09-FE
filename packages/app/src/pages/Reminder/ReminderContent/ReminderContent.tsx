// TODO : 애니메이션 오면 교체
import { Heading, Text } from '@timeletter_fe/components/src';
import { gradientOutlineRecipe } from '@timeletter_fe/components/src/styles/gradient.css';

import { contextBoxStyle } from './ReminderContent.css';
import { ReminderContentProps } from './ReminderContent.type';


export const introValue = (sendName: string, reciveName: string) => ({
  true: (
    <Heading size={1} color="white" style={{ textAlign: 'center', lineHeight: 2 }}>
      {'이제, '}
      <Text
        className={gradientOutlineRecipe({ background: 'black' })}
        style={{ borderRadius: '4px', padding: '3px' }}
        as="span"
        size={3}
        color="white"
      >
        {sendName}
      </Text>
      {' 님이 '}
      <Text
        className={gradientOutlineRecipe({ background: 'black' })}
        style={{ borderRadius: '4px', padding: '3px' }}
        as="span"
        size={3}
        color="white"
      >
        {reciveName}
      </Text>
      {' 님에게'}
      <br />
      보낸 편지를 읽어보세요.
    </Heading>
  ),
  false: (
    <Heading size={1} color="white" style={{ textAlign: 'center', lineHeight: 2 }}>
      <Text
        className={gradientOutlineRecipe({ background: 'black' })}
        style={{ borderRadius: '4px', padding: '3px' }}
        as="span"
        size={3}
        color="white"
      >
        {sendName}
      </Text>
      {' 님이 '}
      <Text
        className={gradientOutlineRecipe({ background: 'black' })}
        style={{ borderRadius: '4px', padding: '3px' }}
        as="span"
        size={3}
        color="white"
      >
        {reciveName}
      </Text>
      {'님에게 보낸 편지가 '}
      <br />
      시간선을 따라 날아오는 중이에요.
    </Heading>
  ),
});

function ReminderContent(prop: ReminderContentProps) {
  const { sendName, reciveName, openType } = prop;
  return <div className={contextBoxStyle}>{introValue(sendName || '', reciveName || '')[`${openType}`]}</div>;
}

export default ReminderContent;
