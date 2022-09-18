import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { useMutation } from '@tanstack/react-query';

import { letterAPI } from '~/api';
import { LetterStatus } from '~/const';
import { useGetImageByImageId, useImageDataURLState } from '~/hooks';
import {
  letterBoxCardTrashIconStyle,
  letterBoxCardWrapperStyle,
} from '~/pages/LetterBox/LetterBoxCard/LetterBoxCard.css';
import { letterDraftBoxState } from '~/pages/LetterBox/LetterBoxContent/LetterBoxContent.atoms';
import LetterPopover from '~/pages/LetterPopover/LetterPopover';
import { ReactComponent as TrashIcon } from '~components/assets/icons/trash.svg';
import { Button, LetterCard, NotificationToaster } from '~components/index';

import { LetterBoxCardProps } from './LetterBoxCard.types';

function LetterBoxCard(props: LetterBoxCardProps) {
  const { letter, draftLetterMap } = props;
  const { letterStatus, imageId } = letter;

  const { data: imageArrayBuffer } = useGetImageByImageId(imageId);

  const imageReaderRef = useRef(new FileReader());
  const imageRef = useRef<string>();

  useEffect(() => {
    if (!imageArrayBuffer) {
      return;
    }

    const blob = new Blob([new Uint8Array(imageArrayBuffer).buffer]);
    imageRef.current = URL.createObjectURL(blob);
  }, [imageArrayBuffer]);
  const [image] = useImageDataURLState(imageReaderRef.current);

  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => {
    setShow(true);
  };

  const setLetterDraftBox = useSetRecoilState(letterDraftBoxState);
  const deleteLetter = useMutation(() => letterAPI.deleteDraftLetter(letter), {
    onSuccess: () => {
      if (!draftLetterMap) {
        return;
      }
      draftLetterMap.current.delete(letter.id);
      setLetterDraftBox(Array.from(draftLetterMap.current.values()));
    },
    onError: () => {
      NotificationToaster.show('편지 삭제에 실패했습니다.');
    },
  });
  const handleDeleteClick = () => {
    if (!draftLetterMap) {
      return;
    }
    deleteLetter.mutate();
  };

  return (
    <>
      <div className={letterBoxCardWrapperStyle}>
        <LetterCard {...letter} image={image} onClick={handleClick} />
        {letterStatus === LetterStatus.DRAFT && (
          <Button
            className={letterBoxCardTrashIconStyle}
            variant="transparent"
            iconOnly
            onClick={handleDeleteClick}
            style={{ position: 'absolute' }}
          >
            <TrashIcon />
          </Button>
        )}
      </div>
      {show && <LetterPopover letter={letter} onClose={() => setShow(false)} />}
    </>
  );
}

export default LetterBoxCard;
