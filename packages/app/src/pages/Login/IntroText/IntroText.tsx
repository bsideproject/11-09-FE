import { IntroTextProps } from './IntroText.types';

import { introTextStyle } from './IntroText.css';

function IntroText(props: IntroTextProps) {
  const { children } = props;

  return (
    <p className={introTextStyle}>
      {children}
    </p>
  );
}

export default IntroText;
