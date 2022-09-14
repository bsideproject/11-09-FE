import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';

import { Button, Text, TextInput } from '@timeletter_fe/components/src';

import { userState } from '~/store/user.atoms';

import {
  myPageBodyBottomStyle,
  myPageBodyContentStyle,
  myPageBodyStyle,
  myPageUserContent,
} from "./Mypage.css"

function MyPage() {
  const user = useRecoilValue(userState);
  let phonNum = '';

  if (user.phoneNumber) {
    const userPhone = user.phoneNumber?.split('-') || [];
    phonNum = userPhone.length > 2 ? `010-${userPhone[1]}-${userPhone[2]}` : '';
  }

  const navigate = useNavigate();

  const handleClickEvent = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className={myPageBodyStyle}>
      <div className={myPageBodyContentStyle}>
        <Text as="div" color="gray100" size={1}>
          이름
          <TextInput type="text" readOnly value={user.name} className={myPageUserContent} />
        </Text>
        <Text as="div" color="gray100" size={1}>
          이메일
          <TextInput type="text" readOnly value={user.email} className={myPageUserContent} />
        </Text>
        <Text as="div" color="gray100" size={1}>
          휴대폰 번호
          <TextInput type="text" readOnly value={phonNum} className={myPageUserContent} />
        </Text>
      </div>
      <Button
        className={myPageBodyBottomStyle}
        background="primary"
        label="확인"
        variant="solid"
        onClick={handleClickEvent}
      />
    </div>
  );
}

export default MyPage;
