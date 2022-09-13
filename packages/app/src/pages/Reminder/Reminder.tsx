import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useQuery } from '@tanstack/react-query';
import { Button, LetterContent } from '@timeletter_fe/components/src';
import { vars } from '@timeletter_fe/components/src/styles/global.css';

import { reminderAPI } from '~/api';
import { reminderID } from '~/store';
import { userState } from '~/store/user.atoms';
import { getCookie } from '~/utils/cookies';
import { ReactComponent as ReminderOpen } from '~components/assets/images/reminder_open.svg';
import ReminerAni from '~components/assets/misc/reminder_ani_2.gif';

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

let values = '';
function Reminder() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = useRecoilValue(userState);
  const setID = useSetRecoilState(reminderID.reminder);
  const [uuid, setUuid] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<APISchema.ReminderUpDateType>();
  const [letter, setLetter] = useState<APISchema.Letter>();
  const [openTime, setOpenTime] = useState<boolean>(false);

  const handleCloseEvent = () => {
    if (values === 'reminder') {
      setID({ id: letter?.id, receivedPhoneNumber: letter?.receivedPhoneNumber });
    }
    navigate('/login', { replace: true });
  };

  const openDialog = (value: ReminderDialogProps['dialogType']) => {
    values = value;
    ReminderDialog.show({
      dialogType: value,
      dialogClose: handleCloseEvent,
    });
  };

  const handelOpenEventType = (value: ReminderDialogProps['dialogType']) => {
    if (getCookie('token')) {
      switch (value) {
        case 'reminder':
          setPhoneNumber({ id: letter?.id, receivedPhoneNumber: user.phoneNumber });
          break;
        case 'goMain':
          navigate('/', { replace: true });
          break;
        default:
          openDialog(value);
      }
    } else {
      openDialog(value);
    }
  };

  const { data: reminderSet } = useQuery(
    ['reminderAPI', phoneNumber],
    () => reminderAPI.reminderUpdate(phoneNumber),
    {
      enabled: !!phoneNumber,
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
    if (data?.data.length === 0) {
      handelOpenEventType('idNull');
      return;
    }
    setLetter(data?.data[0]);
  }, [data]);

  useEffect(() => {
    if (!reminderSet) {
      return;
    }
    openDialog('reminderSuccess');
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
