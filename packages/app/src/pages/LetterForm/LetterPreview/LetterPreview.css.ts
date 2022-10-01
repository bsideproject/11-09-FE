import { style } from '@vanilla-extract/css';

import { letterFormActionsBaseStyle } from '../LetterForm.css';

export const letterPreviewActionsStyle = style([
  letterFormActionsBaseStyle,
  { gap: 12, paddingLeft: 0, paddingRight: 0 },
]);
