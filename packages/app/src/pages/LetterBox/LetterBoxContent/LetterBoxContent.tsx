import { useEffect, useMemo, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilState } from 'recoil';

import { useInfiniteQuery } from '@tanstack/react-query';

import { letterAPI } from '~/api';
import { LetterStatus } from '~/const';
import { letterBoxLabelByType } from '~/pages/LetterBox/LetterBox.const';
import { letterDraftBoxState } from '~/pages/LetterBox/LetterBoxContent/LetterBoxContent.atoms';
import { observerStyle } from '~/pages/LetterBox/LetterBoxContent/LetterBoxContent.css';
import { Text } from '~components/index';
import { layoutSprinkles } from '~components/styles/layout.css';

import LetterBoxCard from '../LetterBoxCard/LetterBoxCard';

import { LetterBoxContentProps } from './LetterBoxContent.types';

const size = 5;

function LetterBoxContent(props: LetterBoxContentProps) {
  const { letterStatus } = props;

  const { data: lettersByPage, fetchNextPage } = useInfiniteQuery(
    ['lettersByStatus', size, letterStatus],
    ({ pageParam = 0 }) => letterAPI.getLettersByStatus({ size, page: pageParam, letterStatus }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.last) {
          return undefined;
        }
        return lastPage.number + 1;
      },
      select: (data) => ({
        pages: data.pages.map((page) => page.content),
        pageParams: data.pageParams,
      }),
    },
  );

  const letters = useMemo(() => lettersByPage?.pages.flat(), [lettersByPage]);

  const [letterDraftBox, setLetterDraftBox] = useRecoilState(letterDraftBoxState);

  const draftLetterMap = useRef<Map<string, APISchema.LetterTemplate>>(new Map());
  useEffect(() => {
    if (!letters || letterStatus === LetterStatus.DONE) {
      return;
    }
    letters.forEach((item) => {
      draftLetterMap.current.set(item.id, item);
    });
    setLetterDraftBox(letters);
  }, [letters]);

  const { ref: observerRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (!letters) {
    return (
      <div
        className={layoutSprinkles({ display: 'flex', justify: 'center', items: 'center' })}
        style={{ height: '100%' }}
      >
        <Text color="white">{letterBoxLabelByType[letterStatus]}에 편지가 없습니다.</Text>
      </div>
    );
  }

  return (
    <div className={layoutSprinkles({ display: 'flex', flex: 'column' })} style={{ gap: 12 }}>
      {letterStatus === LetterStatus.DRAFT &&
        letterDraftBox?.map((letter) => (
          <LetterBoxCard key={letter.id} letter={letter} draftLetterMap={draftLetterMap} />
        ))}
      {letterStatus === LetterStatus.DONE &&
        letters?.map((letter) => (
          <LetterBoxCard key={letter.id} letter={letter} draftLetterMap={draftLetterMap} />
        ))}
      <div ref={observerRef} className={observerStyle} aria-hidden />
    </div>
  );
}

export default LetterBoxContent;
