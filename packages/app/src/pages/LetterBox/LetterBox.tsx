import { useState } from 'react';
import classNames from 'classnames';

import { LetterStatus } from '~/const';
import { letterBoxLabelByType } from '~/pages/LetterBox/LetterBox.const';
import { Button, Text } from '~components/index';
import { layoutSprinkles } from '~components/styles/layout.css';

import LetterBoxContent from './LetterBoxContent/LetterBoxContent';
import { letterContentStyle, tabRecipe, tabStyle } from './LetterBox.css';

function LetterBox() {
  const [tab, setTab] = useState<APISchema.LetterStatus>(LetterStatus.DONE);

  const handleTabClickBy = (type: APISchema.LetterStatus) => () => {
    setTab(type);
  };

  return (
    <>
      <div className={layoutSprinkles({ display: 'flex' })}>
        {(Object.keys(letterBoxLabelByType) as APISchema.LetterStatus[]).map((letterStatus) => (
          <Button
            key={letterStatus}
            className={classNames(tabStyle, tabRecipe({ active: tab === letterStatus }))}
            variant="transparent"
            onClick={handleTabClickBy(letterStatus)}
          >
            <Text as="span" asHeadingFont color="white">
              {letterBoxLabelByType[letterStatus]}
            </Text>
          </Button>
        ))}
      </div>
      <div className={letterContentStyle}>
        <LetterBoxContent letterStatus={tab} />
      </div>
    </>
  );
}

export default LetterBox;
