import { TooltipProps as BTooltipProps } from '@blueprintjs/core';

import { colorSystem } from '../styles/colors.css';

export interface TooltipProps {
  content: BTooltipProps['content'];
  label: string;
  color?: keyof typeof colorSystem;
}
