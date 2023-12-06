import { useAppStore } from '@app/stores';
import { useState } from 'react';

const useCitiesRecents = () => {
  const recents = useAppStore((state) => state.recents);
  const idRecentActive = useAppStore((state) => state.idRecentActive);
  const setRecentActive = useAppStore((state) => state.setRecentActive);
  const clearRecent = useAppStore((state) => state.clearRecent);

  const items = Object.values(recents);

  const handleOnClick = (id: number) => {
    setRecentActive(id);
  };

  const handleOnClose = (e: any, id: number) => {
    e.stopPropagation();
    clearRecent(id);
  };

  return {
    idRecentActive,
    items,
    handleOnClick,
    handleOnClose,
  };
};

export default useCitiesRecents;
