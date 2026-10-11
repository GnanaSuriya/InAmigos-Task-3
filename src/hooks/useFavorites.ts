import { useState, useEffect, useCallback } from 'react';
import { getFavoriteToolIds, toggleFavoriteToolId } from '../utils/storage';

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    setFavoriteIds(getFavoriteToolIds());

    const handleUpdate = () => {
      setFavoriteIds(getFavoriteToolIds());
    };

    window.addEventListener('aitoolbox_favorites_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('aitoolbox_favorites_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    return toggleFavoriteToolId(id);
  }, []);

  const isFavorited = useCallback((id: string) => {
    return favoriteIds.includes(id);
  }, [favoriteIds]);

  return {
    favoriteIds,
    favoritesCount: favoriteIds.length,
    toggleFavorite,
    isFavorited,
  };
}
