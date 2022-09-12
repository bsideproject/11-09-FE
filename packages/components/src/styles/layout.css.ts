import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { important } from './tools';

const alignValues = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];
const layoutProperties = defineProperties({
  properties: {
    display: ['none', 'block', 'inline', 'flex', 'inline-flex', 'grid'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    justifyContent: alignValues,
    alignContent: alignValues,
  },
  shorthands: { flex: ['flexDirection'], justify: ['justifyContent'], align: ['alignContent'] },
});

export const hideStyle = {
  position: important('absolute') as 'absolute',
  width: important('1px'),
  height: important('1px'),
  padding: important(0),
  margin: important('-1px'),
  overflow: important('hidden'),
  clip: important('rect(0, 0, 0, 0)'),
  whiteSpace: important('nowrap') as 'nowrap',
  border: important(0),
};

export const layoutSprinkles = createSprinkles(layoutProperties);
