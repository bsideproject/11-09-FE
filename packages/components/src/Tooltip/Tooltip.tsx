import { Tooltip as BTooltip } from '@blueprintjs/core';

import { ReactComponent as QuestionIcon } from '../assets/icons/question.svg';
import Button from '../Button/Button';
import Text from '../Text/Text';

import { tooltipActionStyle, tooltipStyle } from './Tooltip.css';
import { TooltipProps } from './Tooltip.types';

function Tooltip(props: TooltipProps) {
  const { content, label, color = 'black' } = props;
  return (
    <BTooltip
      popoverClassName={tooltipStyle}
      content={
        <Text size={1} color="white">
          {content}
        </Text>
      }
      placement="bottom-start"
      minimal
      openOnTargetFocus={false}
      usePortal={false}
    >
      <Button childrenClassName={tooltipActionStyle} variant="transparent">
        <QuestionIcon />
        <Text as="span" size={1} color={color}>
          {label}
        </Text>
      </Button>
    </BTooltip>
  );
}

export default Tooltip;
