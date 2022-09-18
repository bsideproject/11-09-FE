import classNames from 'classnames';

import LetterImage from '../LetterImage/LetterImage';
import Text from '../Text/Text';

import { letterContentRecipe, letterContentStyle, letterTemplateStyle } from './LetterTemplate.css';
import { LetterTemplateProps } from './LetterTemplate.types';

function LetterTemplate(props: LetterTemplateProps) {
  const { letterProps, border, theme = 'dark', contentStyle, ...rest } = props;
  const { senderName, receiverName, content, imageDataURL } = letterProps;

  return (
    <div {...rest} className={classNames(letterTemplateStyle, rest.className)}>
      <div
        className={classNames(letterContentStyle, letterContentRecipe({ border, theme }))}
        style={contentStyle}
      >
        <Text color={theme === 'dark' ? 'secondary' : 'primary'} asHeadingFont>
          TO: {senderName}
        </Text>
        <Text
          color={theme === 'dark' ? 'secondary' : 'primary'}
          style={{ order: 1, alignSelf: 'flex-end' }}
          asHeadingFont
        >
          FROM. {receiverName}
        </Text>
        <Text
          as="p"
          color={theme === 'dark' ? 'white' : 'black'}
          size={2}
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {content}
        </Text>
      </div>
      {imageDataURL && (
        <LetterImage
          image={imageDataURL}
          senderName={senderName ?? ''}
          receiverName={receiverName ?? ''}
        />
      )}
    </div>
  );
}

export default LetterTemplate;
