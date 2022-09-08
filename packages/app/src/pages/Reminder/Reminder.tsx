import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { useQuery } from '@tanstack/react-query';
import { Button, LetterContent } from '@timeletter_fe/components/src';
import { vars } from '@timeletter_fe/components/src/styles/global.css';

import { reminderAPI } from '~/api';
import { reminderID } from '~/store';
import ReminerAni from '~components/assets/images/reminder_ani.gif';
import { ReactComponent as ReminderOpen } from '~components/assets/images/reminder_open.svg';

import ReminderContent from './ReminderContent/ReminderContent';
import ReminderDialog from './ReminderDialog/ReminderDialog';
import ReminderTime from './ReminderTime/ReminderTime';
import {
  reminderBodyStyle,
  reminderBottomStyle,
  reminderContentStyle,
  reminderImgStyle,
  reminderOneButtonStyle,
  reminderTwoButtonStyle,
} from './Reminder.css';

function Reminder() {  
  const { id } = useParams();
  const navigate = useNavigate();
  
  const setID = useSetRecoilState(reminderID.reminder);
  
  const [dialogType, setDialogType] = useState<string>('');
  const [uuid, setUuid] = useState<string>('');
  const [letter, setLetter] = useState<APISchema.Letter>();
  const [openTime, setOpenTime] = useState<boolean>(false);
  
  const handleCloseEvent = () => {
    if (dialogType === 'reminder') {
      setID(uuid);
    }
    navigate('/login', { replace: true });
  };

  const handelOpenEventType = (value: string) => setDialogType(value);

  const { data } = useQuery(['reminderAPI', uuid], () => reminderAPI.reminderLetter(uuid), {
    enabled: !!uuid,
  });

  useEffect(() => {
    if (!id) {
      return;
    }
    setUuid(id);
  }, [id]);

  useEffect(() => {
    if (data?.data.length === 0) {
      handelOpenEventType('empty');
      return;
    }
    setLetter(data?.data[0]);
  }, [data]);

  return (
    <div className={reminderBodyStyle}>
      {letter && (
        <>
          <ReminderTime endDay={letter.receivedDate} openTime={setOpenTime} />
          <div className={reminderContentStyle}>
            <div className={reminderImgStyle}>
              {openTime ? (
                <ReminderOpen />
              ) : (
                <img
                  width="100%"
                  src={ReminerAni}
                  alt="ani"
                  style={{ background: '#FFFFFF', outline: 'none' }}
                />
              )}
            </div>
            <ReminderContent
              sendName={letter?.senderName}
              reciveName={letter?.receiverName}
              openType={openTime}
            />
            {openTime && (
              <LetterContent
                receiverName={letter.receiverName}
                sendName={letter?.senderName}
                content={letter?.content}
              />
            )}
          </div>
          <div className={reminderBottomStyle}>
            {!openTime && (
              <Button
                className={reminderTwoButtonStyle}
                label="다시 알림받기"
                variant="outline"
                background={undefined}
                onClick={() => handelOpenEventType('reminder')}
                borderColor="primary"
              />
            )}
            <Button
              label="나도 편지 써보기"
              background="primary"
              className={openTime ? reminderOneButtonStyle : reminderTwoButtonStyle}
              onClick={() => handelOpenEventType('empty')}
              style={{ backgroundColor: vars.colors.primary }}
            />
          </div>
        </>
      )}
      <ReminderDialog
        dialogOpen={dialogType !== ''}
        dialogType={dialogType}
        dialogClose={handleCloseEvent}
      />
    </div>
  );
}

export default Reminder;
