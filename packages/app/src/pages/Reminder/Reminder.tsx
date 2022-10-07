import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { useQuery } from '@tanstack/react-query';
import { Button, LetterTemplate } from '@timeletter_fe/components/src';
import { vars } from '@timeletter_fe/components/src/styles/global.css';

import { reminderAPI } from '~/api';
import { reminderID } from '~/store';
import { getCookie } from '~/utils/cookies';
import { ReactComponent as ReminderOpen } from '~components/assets/images/reminder_open.svg';
import ReminerAni from '~components/assets/misc/reminder_ani.gif';

import ReminderContent from './ReminderContent/ReminderContent';
import ReminderDialog from './ReminderDialog/ReminderDialog';
import { ReminderDialogProps } from './ReminderDialog/ReminderDialog.type';
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
  const dialogTypeRef = useRef<ReminderDialogProps['dialogType'] | null>(null);

  const setID = useSetRecoilState(reminderID.reminder);
  const [uuid, setUuid] = useState<string>(''); 
  const [reminderApply, setReminderApply] = useState<APISchema.ReminderUpDateType>();
  const [letter, setLetter] = useState<APISchema.Letter>();
  const [openTime, setOpenTime] = useState<boolean>(false);

  const handleCloseEvent = () => {
    if (dialogTypeRef.current && dialogTypeRef.current === 'reminder') {
      setID({ id: letter?.id });
    }
    navigate('/login', { replace: true });
  };

  const openDialog = () => {
    if (!dialogTypeRef.current) return;
    ReminderDialog.show({
      dialogType: dialogTypeRef.current,
      dialogClose: handleCloseEvent,
    });
  };

  const handelOpenEventType = (value: ReminderDialogProps['dialogType']) => {
    dialogTypeRef.current = value;
    if (getCookie('token')) {
      switch (value) {
        case 'reminder':
          setReminderApply({ letterId: letter?.id });
          break;
        case 'goMain':
          navigate('/', { replace: true });
          break;
        default:
          openDialog();
      }
    } else {
      openDialog();
    }
  };

  const { data: reminderSet } = useQuery(
    ['reminderAPI', reminderApply],
    () => reminderAPI.reminderUpdate(reminderApply),
    {
      enabled: !!reminderApply,
    },
  );

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
    if (!data) {
      return;
    }
    
    if(data.length < 1 ) {
      handelOpenEventType('idNull');
      return
    }

    setLetter(data[0]);
  }, [data]);

  useEffect(() => {
    if (!reminderSet) {
      return;
    }

    if (reminderSet.isSended) {
      handelOpenEventType('reminderSuccess');
    } else {
      handelOpenEventType('reminderFail');
    }
  }, [reminderSet]);

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
              sendName={letter.senderName || ''}
              receiverName={letter.receiverName || ''}
              openType={openTime}
            />
            {openTime && (
              <LetterTemplate
                letterProps={{
                  senderName: letter.senderName || '',
                  receiverName: letter.receiverName || '',
                  content: letter.content || '',
                  imageDataURL:undefined,
                }}
                style={{ marginTop: 20 }}
              />
            )} 
          </div>
          <div className={reminderBottomStyle}>
            {/* {!openTime && (
              <Button
                className={reminderTwoButtonStyle}
                label="다시 알림받기"
                variant="outline"
                background={undefined}
                onClick={() => handelOpenEventType('reminder')}
                borderColor="primary"
              />
            )} */}
            <Button
              label="나도 편지 써보기"
              background="primary"
              className={openTime ? reminderOneButtonStyle : reminderTwoButtonStyle}
              onClick={() => handelOpenEventType('goMain')}
              style={{ backgroundColor: vars.colors.primary }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Reminder;
