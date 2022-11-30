import { useEffect, useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import { useQuery } from '@tanstack/react-query';

import { reminderAPI } from '~/api';
import { reminderID } from '~/store';
import persistStore from '~/store/persistStore';

import MainBox from './Components/MainBox';
import MainDialog from './MainDialog/MainDialog';
import { MainDialogProps } from './MainDialog/MainDialog.type';
import { mainBodyStyle } from './Main.css';

function Main() {
  const resetUuid = useResetRecoilState(reminderID.reminder);
  const uuid = useRecoilValue(reminderID.reminder);
  const [reminderApply, setReminderApply] = useState<FormData>();
  const formData = new FormData();

  const { data: reminderSet } = useQuery(
    ['reminderAPI', reminderApply],
    () => reminderAPI.reminderUpdate(reminderApply),
    {
      enabled: !!reminderApply,
    },
  );

  const openDialog = (value: MainDialogProps['dialogType']) => {
    MainDialog.show({
      dialogType: value,
    });
  };

  useEffect(() => {
    if (!uuid.id) {
      return;
    }
    formData.append('letterId', uuid.id);
    setReminderApply(formData);
  }, [uuid]);

  useEffect(() => {
    if (!reminderSet) {
      return;
    }
    persistStore.removeItem('reminder');
    resetUuid();

    if (reminderSet.isSended) {
      openDialog('success');
    } else {
      openDialog('fail');
    }
    
  }, [reminderSet]);

  return (
    <div className={mainBodyStyle}>
      <MainBox menuName="편지쓰기" path="/letter/write" />
      <MainBox menuName="보낸편지함" path="/letter/box" />
    </div>
  );
}

export default Main;
                                                                                                                                                                                                           