import { style } from '@vanilla-extract/css';

import { layoutSprinkles } from '~components/styles/layout.css';

export const letterFormCompleteStyle = style([
  layoutSprinkles({ display: 'flex', flex: 'column', justify: 'center' }),
  {
    flex: '1 1 auto',
    marginBottom: 64,
  },
]);

export const receiverNameStyle = style({
  display: 'inline-block',
  width: 'fit-content',
  marginRight: '0.4ch',
  padding: '0 4px',
  borderRadius: 4,
});
