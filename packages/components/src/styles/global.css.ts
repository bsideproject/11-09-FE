import { createGlobalTheme, globalFontFace } from '@vanilla-extract/css';

import { colorSystem } from './colors.css';
import { fontSystem } from './fonts.css';

globalFontFace('PyeongChangPeace', { src: 'local(PyeongChangPeace)' });

globalFontFace('Pretendard', { src: 'local(Pretendard)' });

export const vars = createGlobalTheme('body', {
  fonts: fontSystem,
  colors: colorSystem,
});
