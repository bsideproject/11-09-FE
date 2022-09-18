import { letterImageStyle, letterImageWrapperStyle } from './LetterImage.css';
import { LetterImageProps } from './LetterImage.types';

function LetterImage(props: LetterImageProps) {
  const { image, senderName, receiverName } = props;
  return (
    <figure className={letterImageWrapperStyle}>
      <img
        className={letterImageStyle}
        src={image}
        alt={`${senderName}이 ${receiverName}에게 보내는 사진`}
      />
    </figure>
  );
}

export default LetterImage;
