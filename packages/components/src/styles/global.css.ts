import { createGlobalTheme, globalFontFace } from '@vanilla-extract/css';

import { backgroundColorSystem, colorSystem } from './colors.css';
import { fontSystem } from './fonts.css';
import { transitionSystem } from './transitions.css';

globalFontFace('PyeongChangPeace', { src: 'local(PyeongChangPeace)' });

globalFontFace('Pretendard', { src: 'local(Pretendard)' });

export const vars = createGlobalTheme('body', {
  fonts: fontSystem,
  colors: { ...colorSystem, ...backgroundColorSystem },
  transitions: transitionSystem,
});
