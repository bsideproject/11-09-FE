import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { Blocker, History, Transition } from 'history';
// eslint-disable-next-line camelcase
import { UNSAFE_NavigationContext } from 'react-router-dom';

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

export function useBlocker(blocker: Blocker, when = true): void {
  const navigator = useContext(UNSAFE_NavigationContext).navigator as unknown as History;

  useEffect(() => {
    if (!when) return;

    const unblock = navigator.block((tx: Transition) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };

      blocker(autoUnblockingTx);
    });

    // eslint-disable-next-line consistent-return
    return unblock;
  }, [navigator, blocker, when]);
}

export function usePageVisibilityChange(handler: () => void | Promise<void>) {
  useEffect(() => {
    const handleVisibilityChange = (event: Event) => {
      if (event.type === 'visibilitychange' && document.visibilityState === 'hidden') {
        handler();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [handler]);
}

export const useIsMobile = () => /Mobi/i.test(navigator.userAgent);

export const useFocus = <E extends HTMLElement>(ref: RefObject<E>) => {
  const isMobile = useIsMobile();
  return useCallback(() => {
    if (isMobile) {
      return;
    }

    ref.current?.focus();
  }, [isMobile]);
};
