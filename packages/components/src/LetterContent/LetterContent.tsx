import classNames from 'classnames';

import { gradientOutlineRecipe } from '../styles/gradient.css';
import Text from '../Text/Text';

import { letterBoxStyle, letterContentStyle, letterFromTextStyle } from './LetterContent.css';
import { LetterBoxProps } from "./LetterContent.type";

function LetterBox(props: LetterBoxProps) {
  const { sendName, receiverName, content, ...rest } = props;
  return (
    <div
      {...rest}
      className={classNames(
        letterBoxStyle,
        gradientOutlineRecipe({ background: 'black' }),
      )}
    >
      <Text as="span" size={4} color="secondary" asHeadingFont>
        TO. {receiverName}
      </Text>
      <p className={letterContentStyle}>{content}</p>
      <Text as="span" size={4} color="secondary" asHeadingFont className={letterFromTextStyle}>
        FROM. {sendName}
      </Text>
    </div>
  );
}

export default LetterBox;
