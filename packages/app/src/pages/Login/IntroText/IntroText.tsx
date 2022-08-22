import { introTextStyle } from './IntroText.css';
import { IntroTextProps } from './IntroText.types';

function IntroText(props: IntroTextProps) {
  const { children } = props;

  return <div className={introTextStyle}>{children}</div>;
}

export default IntroText;
