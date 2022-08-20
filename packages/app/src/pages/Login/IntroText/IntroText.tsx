import { IntroTextProps } from './IntroText.types';

import { introTextStyle } from './IntroText.css';

function IntroText(props: IntroTextProps) {
  const { children } = props;

  return (
    <div className={introTextStyle}>
      {children}
    </div>
  );
}

export default IntroText;
