import { useCallback } from 'react';
import Resizer from 'react-image-file-resizer';

export const useImageResizer = () =>
  useCallback((file: File): Promise<File> => {
    const fileType = file.type.split('/')[1];

    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        800,
        800,
        fileType,
        85,
        0,
        (uri) => {
          resolve(uri as File);
        },
        'file',
      );
    });
  }, []);
