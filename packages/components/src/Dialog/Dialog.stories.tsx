import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../Button/Button';

import Dialog from './Dialog';
import { DialogMessageType } from './Dialog.types';
import DialogSample from './DialogSample';

export default {
  title: 'Feedback/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Templates: ComponentStory<typeof Dialog> = () => {
  const handleOpenClick = () => {
    DialogSample.show();
  };
  return <Button label="Open Dialog" onClick={handleOpenClick} />;
};

export const Base = Templates.bind({});
Base.parameters = { controls: { exclude: ['type'] } };

const WithTypeTemplates: ComponentStory<typeof Dialog> = (args) => {
  const { type: typeFromParent } = args;
  const [dialogType, setDialogType] = useState<DialogMessageType>();

  const handleOpenDialogByTypeClick = (type: DialogMessageType) => () => {
    setDialogType(type);
    DialogSample.show({ dialogType: dialogType || typeFromParent });
  };
  return (
    <div style={{ width: 400, display: 'flex', gap: 10 }}>
      <Button label="Caution" onClick={handleOpenDialogByTypeClick('caution')} />
      <Button label="Success" onClick={handleOpenDialogByTypeClick('success')} />
      <Button label="Info" onClick={handleOpenDialogByTypeClick('info')} />
    </div>
  );
};

export const DialogTypes = WithTypeTemplates.bind({});
