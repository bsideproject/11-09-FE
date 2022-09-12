import classNames from 'classnames';

import Text from '../Text/Text';

import {
  letterContentStyle,
  letterImageStyle,
  letterImageWrapperStyle,
  letterTemplateStyle,
} from './LetterTemplate.css';
import { LetterTemplateProps } from './LetterTemplate.types';

function LetterTemplate(props: LetterTemplateProps) {
  const { letterProps, ...rest } = props;
  const { senderName, receiverName, content, imageDataURL } = letterProps;

  return (
    <div {...rest} className={classNames(letterTemplateStyle, rest.className)}>
      <div className={letterContentStyle}>
        <Text color="secondary" asHeadingFont>
          TO: {senderName}
        </Text>
        <Text color="secondary" style={{ order: 1 }} asHeadingFont>
          FROM. {receiverName}
        </Text>
        <Text as="p" color="white" size={2}>
          {content}
        </Text>
      </div>
      {imageDataURL && (
        <figure className={letterImageWrapperStyle}>
          <img
            className={letterImageStyle}
            src={imageDataURL}
            alt={`${senderName}이 ${receiverName}에게 보내는 사진`}
          />
        </figure>
      )}
    </div>
  );
}

export default LetterTemplate;
