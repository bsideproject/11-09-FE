import { useEffect, useState } from 'react';

export function useDialog(id?: string) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return {
    id,
    isOpen,
    setIsOpen,
    onClose: handleCloseDialog,
  };
}
