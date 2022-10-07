import classNames from 'classnames';

import icon from '../assets/images/lettersend.svg';
import LetterDate from '../LetterDate/LetterDate';
import { gradientOutlineRecipe } from '../styles/gradient.css';
import { layoutSprinkles } from '../styles/layout.css';
import Text from '../Text/Text';

import {
  letterCardStyle,
  letterContentStyle,
  letterContentWrapperStyle,
  letterImageStyle,
  letterImageWrapperStyle,
} from './LetterCard.css';
import { LetterCardProps } from './LetterCard.types';

function LetterCard(props: LetterCardProps) {
  const { id, receiverName, content, image, receivedDate, createdAt, letterStatus, ...rest } =
    props;

  return (
    <div
      {...rest}
      id={id}
      className={classNames(
        letterCardStyle,
        layoutSprinkles({ display: 'flex', flex: 'column' }),
        gradientOutlineRecipe({ background: 'white' }),
        rest.className,
      )}
    >
      <div className={layoutSprinkles({ display: 'flex' })} style={{ gap: 12 }}>
        <div className={letterImageWrapperStyle}>
          {image && <img className={letterImageStyle} src={image} alt="편지 이미지" />}
          {!image && <img className={letterImageStyle} src={icon} alt="편지 이미지" />}
        </div>
        <div className={letterContentWrapperStyle}>
          <Text size={3} asHeadingFont color="primary" style={{ marginBottom: 6 }}>
            TO. {receiverName}
          </Text>
          <Text as="p" size={2} className={letterContentStyle}>
            {content}
          </Text>
        </div>
      </div>

      <div
        className={layoutSprinkles({ display: 'flex', flex: 'column' })}
        style={{ gap: 5, marginTop: 14 }}
      >
        {createdAt && letterStatus === 'DONE' && (
          <LetterDate dateType='sent' date={createdAt} />
        )}
        {receivedDate && <LetterDate dateType="receive" date={receivedDate} />}
      </div>
    </div>
  );
}

export default LetterCard;
