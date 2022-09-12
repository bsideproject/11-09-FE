import { FunctionComponent } from 'react';
import classNames from 'classnames';
import { createRoot } from 'react-dom/client';

import { Dialog as BDialog } from '@blueprintjs/core';

import DialogActions from './DialogActions/DialogActions';
import DialogContent from './DialogContent/DialogContent';
import DialogTypeImage from './DialogTypeImage/DialogTypeImage';
import { backdropRecipe, dialogRecipe, dialogStyle } from './Dialog.css';
import { DialogCreateProps, DialogProps } from './Dialog.types';

function Dialog(props: DialogProps) {
  const {
    className,
    children,
    type,
    dialogSize = { width: 320 },
    hasBackdrop = true,
    ...rest
  } = props;

  const handleClosed = (node: HTMLElement) => {
    const containerNode = node.parentNode?.parentNode;
    if (containerNode && document.body.contains(containerNode)) {
      window.requestAnimationFrame(() => {
        document.body.removeChild(containerNode);
      });
    }
  };

  return (
    <BDialog
      {...rest}
      isOpen={rest.isOpen}
      onClosed={handleClosed}
      hasBackdrop={hasBackdrop}
      backdropClassName={backdropRecipe({ hasBackdrop })}
      className={classNames(
        dialogStyle,
        dialogRecipe({ dialogType: type !== undefined }),
        className,
      )}
      style={dialogSize}
      transitionName="dialogTransition"
      usePortal={false}
      isCloseButtonShown={false}
      lazy
    >
      {type && <DialogTypeImage type={type} />}
      {children}
    </BDialog>
  );
}

function createDialog<P extends DialogCreateProps<P>>(component: FunctionComponent<P>, props?: P) {
  const Component = component;
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  return root.render(<Component {...(props as P)} />);
}

export default Object.assign(Dialog, {
  Actions: DialogActions,
  Content: DialogContent,
  create: createDialog,
});
