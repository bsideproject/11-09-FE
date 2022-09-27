import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { letterAPI } from '~/api';

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

export const useGetImageByImageId = (imageId?: string, enabled = false) =>
  useQuery(['letterImage', imageId], () => letterAPI.getImageByImageId(imageId || ''), {
    enabled: !!imageId && enabled,
  });

export const useBeforeunload = (handler: (event: BeforeUnloadEvent) => void) => {
  const eventListenerRef = useRef<(event: BeforeUnloadEvent) => void>();

  useEffect(() => {
    eventListenerRef.current = (event) => {
      // eslint-disable-next-line no-param-reassign
      event.returnValue = handler?.(event);
    };
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: BeforeUnloadEvent) => eventListenerRef.current?.(event);
    window.addEventListener('beforeunload', eventListener);
    return () => {
      window.removeEventListener('beforeunload', eventListener);
    };
  }, []);
};

export function usePageVisibilityChange(handler: () => void | Promise<void>) {
  const terminateEventRef = useRef<boolean>(false);

  useEffect(() => {
    const handlePageHide = (event: Event) => {
      if (terminateEventRef.current) return;

      if (event.type === 'pagehide') {
        handler();
        terminateEventRef.current = true;
      }

      if (event.type === 'visibilitychange' && document.visibilityState === 'hidden') {
        handler();
      }
    };

    document.addEventListener('visibilitychange', handlePageHide);
    window.addEventListener('pagehide', handlePageHide);
    return () => {
      document.removeEventListener('visibilitychange', handlePageHide);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, [handler]);
}
