/* eslint-disable */
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { useMutation } from '@tanstack/react-query';

import { letterAPI } from '~/api';
import { useGetImageByImageId, useImageDataURLState } from '~/hooks';
import { Button, NotificationToaster, Text } from '~components/index';
import { ReactComponent as Camera } from '~components/assets/icons/camera.svg';
import { letterFormState, letterImageState } from '../LetterForm.atoms';

import {
  letterPreviewImageStyle,
  letterPreviewStyle,
  letterTextareaHeaderStyle,
  letterTextareaStyle,
} from './LetterField.css';
import { useImageResizer } from './LetterField.hooks';
import instance from '~/api/instance';

const maxContentLength = '1,000';

function LetterField() {
  const [letterForm, setLetterForm] = useRecoilState(letterFormState);

  const [content, setContent] = useState<string | undefined>(letterForm.content);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleContentBlur = () => {
    setLetterForm({ ...letterForm, content });
  };

  const [letterImage, setLetterImage] = useRecoilState(letterImageState);
  const imageReaderRef = useRef(new FileReader());
  const { data: imageArrayBuffer } = useGetImageByImageId(letterForm.imageId);

  useEffect(() => {
    if (!imageArrayBuffer) {
      return;
    }
    
    const blob = new Blob([new Uint8Array(imageArrayBuffer).buffer]);
    imageReaderRef.current?.readAsDataURL(blob);
  }, [imageArrayBuffer]);

  const resizeImage = useImageResizer();
  const [imageDataURL, setImageDataURL] = useImageDataURLState(imageReaderRef.current);
  const handleImageReset = () => {
    setImageDataURL(undefined);
    setLetterImage({});
  };
  const addLetterImage = useMutation(
    (letterImagePostReq: FormData) => letterAPI.addImage(letterImagePostReq),
    {
      onSuccess: (data) => {
        console.log('data >> ',data)
        setLetterForm({ ...letterForm, imageId: data.imageId });
      },
      onError: (err) => {
        console.log('err >>> ',err)
        NotificationToaster.show('이미지 업로드에 실패했습니다.');
        handleImageReset();
      },
    },
  );
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    setLetterImage({ isLoading: true });
    const resizedImageFile = await resizeImage(event.target.files[0]);
    const form = new FormData();
    form.append('file', resizedImageFile);
    form.append('letterId', letterForm.id ?? '');
    imageReaderRef.current.readAsDataURL(resizedImageFile);
    addLetterImage.mutate(form);
  };

  useEffect(() => {
    setLetterImage({
      ...letterImage,
      isLoading: (addLetterImage.isLoading || addLetterImage.isError) && !!imageDataURL,
    });
  }, [addLetterImage.isLoading, addLetterImage.isError, imageDataURL]);
  useEffect(() => {
    if (!imageDataURL) {
      return;
    }
    setLetterImage({ ...letterImage, image: imageDataURL });
  }, [imageDataURL]);

  return (
    <>
      <div className={letterTextareaHeaderStyle}>
        <Text as="span" color="secondary" size={4} fontWeight="bold">
          TO: {letterForm.receiverName}
        </Text>
        <Text as="span" color="gray500" size={2}>
          {(content ?? '').length} / {maxContentLength}
        </Text>
      </div>
      <textarea
        style={{
          zIndex: 1001
        }}
        ref={textareaRef}
        className={letterTextareaStyle}
        placeholder="편지를 작성해 주세요."
        value={content}
        onChange={handleContentChange}
        onBlur={handleContentBlur}
        autoComplete="off"
        maxLength={1000}
      />
      {/* TODO check when image upload api is fixed */}
      {/* <div className={letterPreviewStyle}>
        {!imageDataURL && !letterImage.image && (
          <label htmlFor="letter-image-file" aria-label="사진 업로드">
            <Camera />
            <input
              id="letter-image-file"
              name="letter-image-file"
              onChange={handleFileChange}
              type="file"
              accept=".jpg, .jpeg, .png"
            />
          </label>
        )}
        {(imageDataURL || letterImage.image) && (
          <Button iconOnly variant="transparent" onClick={handleImageReset}>
            <img
              className={letterPreviewImageStyle}
              src={imageDataURL ?? letterImage.image}
              alt="사용자 지 정 이미지"
            />
          </Button>
        )}
      </div> */}
    </>
  );
}

export default LetterField;
