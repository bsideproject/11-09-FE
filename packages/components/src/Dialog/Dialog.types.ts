import { DialogProps as BDialogProps } from '@blueprintjs/core';

export type DialogMessageType = 'caution' | 'info' | 'success';

interface DialogSizeProps {
  width?: number;
  height?: number;
}

export interface DialogProps extends Omit<BDialogProps, 'isCloseButtonShown'> {
  hasBackdrop?: boolean;
  type?: DialogMessageType;
  dialogSize?: DialogSizeProps;
}

export type ExcludedDialogProps = Partial<Omit<DialogProps, 'isOpen' | 'onClose'>>;
export type ExcludedDefaultProps<P> = Partial<Omit<P, 'isOpen' | 'onClose'>>;
export type DialogCreateProps<P extends ExcludedDefaultProps<P>> = ExcludedDefaultProps<P>;
