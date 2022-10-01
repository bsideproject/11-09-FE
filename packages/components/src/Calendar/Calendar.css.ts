import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '../styles/global.css';

export const calendarWrapperStyle = style({
  padding: 0,
});

export const calendarStyle = style({
  justifyContent: 'center',
});

export const calendarActionsStyle = style({
  paddingTop: 12,
});

globalStyle(`${calendarWrapperStyle} .DayPicker`, {
  width: '260px',
});

globalStyle(`${calendarWrapperStyle} .DayPicker-Month`, {
  width: 'calc(100% - 20px)',
});

globalStyle(
  `${calendarWrapperStyle} .DayPicker-Day.DayPicker-Day--selected, ${calendarWrapperStyle} .DayPicker-Day.DayPicker-Day--selected:hover`,
  {
    backgroundColor: vars.colors.primary,
    color: vars.colors.white,
  },
);
