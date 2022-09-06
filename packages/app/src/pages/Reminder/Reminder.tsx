// TODO : 애니메이션 오면 교체
/* eslint-disable */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { Button, LetterContent, Text } from '@timeletter_fe/components/src';
import { vars } from '@timeletter_fe/components/src/styles/global.css';

import { reminderAPI } from '~/api';
import { setCookie } from '~/utils/cookies';
import { ReactComponent as SendSample } from '~components/assets/icons/reminder_sample.svg';
import { ReactComponent as Arrow } from '~components/assets/images/reminder_arrow.svg';
import { ReactComponent as ReminderOpen } from '~components/assets/images/reminder_open.svg';
import Dialog from '~components/Dialog/Dialog';
import { useDialog } from '~components/Dialog/Dialog.hooks';

import ReminderContent from './ReminderContent/ReminderContent';
import ReminderTime from './ReminderTime/ReminderTime';
import {
  reminderBodyStyle,
  reminderBottomStyle,
  reminderContentStyle,
  reminderImgStyle,
  reminderOneButtonStyle,
  reminderTwoButtonStyle,
} from './Reminder.css';
import { useSetRecoilState } from 'recoil';
import { reminderID } from '~/store';

function Reminder() {  
  const { id } = useParams();
  const navigate = useNavigate();
  
  const setID = useSetRecoilState(reminderID.reminder);
  
  const [uuid, setUuid] = useState<string>('');
  const [letter, setLetter] = useState<APISchema.Letter>();
  const [openTime, setOpenTime] = useState<boolean>(false);
  const { isOpen, handleOpenDialog, handleCloseDialog } = useDialog();
  
  const handleEvet = () => {
    handleCloseDialog();
    setID(uuid);
    // setCookie("reminderId", uuid , { path: '/' })
    navigate('/login', { replace: true });
  };

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
      // handleOpenDialog();
      return;
    }
    setLetter(data?.data[0]);
  }, [data]);

  return (
    <div className={reminderBodyStyle}>
      {letter && (
        <>
          <div className={reminderContentStyle}>
            <ReminderTime endDay={letter.receivedDate} openTime={setOpenTime} />
            <div className={reminderImgStyle}>
              {openTime ? (
                <ReminderOpen />
              ) : (
                <>
                  <SendSample style={{ margin: '0 auto' }} />
                  <Arrow style={{ margin: '0 auto', position: 'absolute' }} />
                </>
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
            {!openTime ?  (
              <>
                <Button
                  className={reminderTwoButtonStyle}
                  label="다시 알림받기"
                  variant="outline"
                  background={undefined}
                  onClick={handleOpenDialog}
                  borderColor="primary"
                />
                <Button
                  label="나도 편지 써보기"
                  background="primary"
                  className={reminderTwoButtonStyle}
                  onClick={handleOpenDialog}
                  style={{ backgroundColor: vars.colors.primary }}
                />
              </>
            ) : 
            (
              <Button
                label="나도 편지 써보기"
                background="primary"
                size="large"
                variant="solid"
                className={reminderOneButtonStyle}
                onClick={handleOpenDialog}
                style={{ backgroundColor: vars.colors.primary }}
              />
            )}
          </div>
        </>
      )}
      <Dialog isOpen={isOpen} style={{ width: 350 }} type="caution">
        <Dialog.Content>
          <Text as="p">로그인이 필요한 서비스에요.</Text>
          <Text as="p">타임레터에 로그인 하시겠어요?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button label="로그인하기" background="gradient" onClick={handleEvet} />
        </Dialog.Actions>
        <Dialog.Actions style={{ marginTop: 10 }}>
          <Button
            label="돌아가기"
            variant="outline"
            borderColor="gradient"
            onClick={handleCloseDialog}
          />
        </Dialog.Actions>
      </Dialog>
      {/* <Dialog isOpen={isOpen} style={{ width: 350 }} type="caution">
        <Dialog.Content>
          <Text as="p">존재하지 않는 페이지 입니다.</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button label="취소" variant="outline" borderColor="gradient" onClick={handleEvet} />
          <Button label="확인" background="gradient" onClick={handleEvet} />
        </Dialog.Actions>
      </Dialog> */}
    </div>
  );
}

export default Reminder;
