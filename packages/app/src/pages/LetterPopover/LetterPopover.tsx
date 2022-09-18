import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { LetterStatus } from '~/const';
import { letterFormState } from '~/pages/LetterForm/LetterForm.atoms';
import { ReactComponent as CloseIcon } from '~components/assets/icons/cancel.svg';
import { Button, LetterDate, LetterImage, LetterTemplate } from '~components/index';
import { layoutSprinkles } from '~components/styles/layout.css';

import {
  letterPopoverCloseStyle,
  letterPopoverContentStyle,
  letterPopoverOverlayStyle,
  letterPopoverStyle,
} from './LetterPopover.css';
import { LetterPopoverProps } from './LetterPopover.types';

function LetterPopover(props: LetterPopoverProps) {
  const { letter, onClose } = props;
  const { senderName, receiverName, image, receivedDate, createdAt, letterStatus } = letter;

  const setLetterFormState = useSetRecoilState(letterFormState);
  const navigate = useNavigate();
  const handleClick = () => {
    setLetterFormState(letter);
    navigate('/letter/write', { replace: true });
  };

  return (
    <div className={letterPopoverOverlayStyle}>
      <div
        className={classNames(
          letterPopoverStyle,
          layoutSprinkles({ display: 'flex', flex: 'column' }),
        )}
      >
        <Button
          className={letterPopoverCloseStyle}
          variant="transparent"
          onClick={onClose}
          iconOnly
        >
          <CloseIcon />
        </Button>
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
            style={{ gap: 5, marginTop: 'auto' }}
          >
            {createdAt && (
              <LetterDate
                dateType={letterStatus === LetterStatus.DRAFT ? 'write' : 'sent'}
                date={createdAt}
              />
            )}
            {receivedDate && <LetterDate dateType="receive" date={receivedDate} />}
            <Button background="gradient" style={{ marginTop: 26 }} onClick={handleClick}>
              이어 쓸래요
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetterPopover;
