const FAVORITES_STORAGE_KEY = 'aitoolbox_favorite_tools_v1';

/**
 * Retrieves list of favorited tool IDs from LocalStorage
 */
export function getFavoriteToolIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to read favorites from localStorage:', error);
    return [];
  }
}

/**
 * Toggles a tool ID in LocalStorage favorites
 * @returns boolean true if newly favorited, false if removed
 */
export function toggleFavoriteToolId(id: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const current = getFavoriteToolIds();
    const exists = current.includes(id);
    let updated: string[];

    if (exists) {
      updated = current.filter(item => item !== id);
    } else {
      updated = [...current, id];
    }

    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('aitoolbox_favorites_updated'));
    return !exists;
  } catch (error) {
    console.error('Failed to toggle favorite in localStorage:', error);
    return false;
  }
}

/**
 * Checks whether a tool is favorited
 */
export function isToolFavorited(id: string): boolean {
  return getFavoriteToolIds().includes(id);
}

/**
 * Safe Share utility using Web Share API or Clipboard fallback
 */
export async function shareTool(
  name: string, 
  id: string
): Promise<{ success: boolean; method: 'web-share' | 'clipboard' }> {
  const shareUrl = `${window.location.origin}${window.location.pathname}?tool=${encodeURIComponent(id)}`;
  const shareData = {
    title: `${name} | AI Toolbox`,
    text: `Discover ${name} and other curated AI tools on AI Toolbox:`,
    url: shareUrl,
  };

  if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
      return { success: true, method: 'web-share' };
    } catch (err: unknown) {
      if ((err as Error)?.name === 'AbortError') {
        return { success: false, method: 'web-share' };
      }
    }
  }

  // Clipboard fallback
  try {
    await navigator.clipboard.writeText(`${shareData.text} ${shareUrl}`);
    return { success: true, method: 'clipboard' };
  } catch (err) {
    console.error('Clipboard copy failed:', err);
    return { success: false, method: 'clipboard' };
  }
}
