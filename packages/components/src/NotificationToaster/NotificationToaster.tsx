import { useId, useRef } from 'react';
import classNames from 'classnames';

import { Position, Toast, Toaster } from '@blueprintjs/core';

import { notificationToasterStyle } from './NotificationToaster.css';
import { NotificationToasterProps } from './NotificationToaster.types';

function NotificationToaster(props: NotificationToasterProps) {
  const { className, message } = props;

  const toasterRef = useRef<Toaster>(null);
  const uniqueId = useId();

  return (
    <Toaster
      ref={toasterRef}
      className={classNames(notificationToasterStyle, className)}
      position={Position.TOP}
      key={uniqueId}
    >
      {/* TODO set timeout to 0 to make toast disappear faster but not working as doc https://blueprintjs.com/docs/#core/components/toast */}
      <Toast message={message} timeout={0} />
    </Toaster>
  );
}

const Notification = Toaster.create({
  className: classNames(notificationToasterStyle),
  position: Position.TOP,
});

const NotificationFn = (message: string) => Notification.show({ message });

export default Object.assign(NotificationToaster, {
  show: NotificationFn,
});
