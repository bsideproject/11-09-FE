import { MouseEvent, useRef } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { letterFormState } from '~/pages/LetterForm/LetterForm.atoms';
import { Button, LetterDate, LetterImage, LetterTemplate } from '~components/index';
import { layoutSprinkles } from '~components/styles/layout.css';
import { isDoneLetter, isDraftLetter } from '~utils/letter';

import {
  letterPopoverContentStyle,
  letterPopoverOverlayStyle,
  letterPopoverStyle,
} from './LetterPopover.css';
import { LetterPopoverProps } from './LetterPopover.types';

function LetterPopover(props: LetterPopoverProps) {
  const { letter, onClose } = props;
  const { senderName, receiverName, image, receivedDate, createdAt, letterStatus, urlSlug } =
    letter;

  const setLetterFormState = useSetRecoilState(letterFormState);
  const navigate = useNavigate();
  const handleClick = () => {
    setLetterFormState(letter);
    navigate('/letter/write', { replace: true });
  };

  const letterPopoverRef = useRef<HTMLDivElement>(null);
  const handleClose = (event: MouseEvent) => {
    if (!letterPopoverRef.current?.contains(event.target as HTMLElement)) {
      onClose();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={letterPopoverOverlayStyle} onClick={handleClose}>
      <div
        ref={letterPopoverRef}
        className={classNames(
          letterPopoverStyle,
          layoutSprinkles({ display: 'flex', flex: 'column' }),
        )}
      >
        {image && (
          <LetterImage
            image={image}
            senderName={senderName ?? ''}
            receiverName={receiverName ?? ''}
          />
        )}
        <div
          className={classNames(
            letterPopoverContentStyle,
            layoutSprinkles({ display: 'flex', flex: 'column' }),
          )}
          style={{ height: '100%' }}
        >
          <LetterTemplate
            letterProps={letter}
            border={false}
            theme="light"
            contentStyle={{ padding: 0 }}
          />
          <div
            className={layoutSprinkles({ display: 'flex', flex: 'column' })}
            style={{
              gap: 5,
              marginTop: 'auto',
              marginBottom: isDoneLetter(letterStatus) ? 40 : 0,
            }}
          >
            {createdAt && (
              <LetterDate
                dateType={isDraftLetter(letterStatus) ? 'write' : 'sent'}
                date={createdAt}
              />
            )}
            {receivedDate && <LetterDate dateType="receive" date={receivedDate} />}
            {!isDraftLetter(letterStatus) && (
              <LetterDate dateType="link" date={`https://timeletter.net/reminder/${urlSlug}`} />
            )}
            {isDraftLetter(letterStatus) && (
              <Button background="gradient" style={{ margin: '26px 0 20px' }} onClick={handleClick}>
                이어 쓸래요
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetterPopover;
