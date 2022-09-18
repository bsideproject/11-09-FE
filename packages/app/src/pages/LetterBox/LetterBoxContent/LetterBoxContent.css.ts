import { style } from '@vanilla-extract/css';

import { hideProperties } from '~components/styles/layout.css';

export const observerStyle = style({ ...hideProperties, position: 'static' });
