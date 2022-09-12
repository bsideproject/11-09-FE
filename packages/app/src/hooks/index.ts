import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useImageDataURLState = (
  fileReader: FileReader,
): [string | undefined, Dispatch<SetStateAction<string | undefined>>] => {
  const [imageDataURL, setImageDataURL] = useState<string>();

  useEffect(() => {
    const imageReaderOnLoad = () => {
      const imageResult = fileReader.result;
      if (typeof imageResult === 'string') {
        setImageDataURL(imageResult);
      }
    };

    fileReader.addEventListener('load', imageReaderOnLoad);
    return () => {
      fileReader.removeEventListener('load', imageReaderOnLoad);
    };
  }, [fileReader]);

  return [imageDataURL, setImageDataURL];
};
