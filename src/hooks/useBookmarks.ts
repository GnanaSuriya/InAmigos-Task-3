import { useState, useEffect, useCallback } from 'react';
import { getSavedInternshipIds, toggleSavedInternshipId } from '../utils/storage';

export function useBookmarks() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    setSavedIds(getSavedInternshipIds());

    const handleUpdate = () => {
      setSavedIds(getSavedInternshipIds());
    };

    window.addEventListener('inamigos_bookmarks_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('inamigos_bookmarks_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    return toggleSavedInternshipId(id);
  }, []);

  const isBookmarked = useCallback((id: string) => {
    return savedIds.includes(id);
  }, [savedIds]);

  return {
    savedIds,
    savedCount: savedIds.length,
    toggleBookmark,
    isBookmarked,
  };
}
