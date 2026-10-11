const BOOKMARKS_STORAGE_KEY = 'inamigos_bookmarked_internships_v1';

/**
 * Retrieves list of saved internship IDs from LocalStorage
 */
export function getSavedInternshipIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to read bookmarks from localStorage:', error);
    return [];
  }
}

/**
 * Toggles an internship ID in LocalStorage bookmarks
 * @returns boolean true if newly bookmarked, false if removed
 */
export function toggleSavedInternshipId(id: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const current = getSavedInternshipIds();
    const exists = current.includes(id);
    let updated: string[];

    if (exists) {
      updated = current.filter(item => item !== id);
    } else {
      updated = [...current, id];
    }

    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));
    // Dispatch custom event to notify listeners across components
    window.dispatchEvent(new Event('inamigos_bookmarks_updated'));
    return !exists;
  } catch (error) {
    console.error('Failed to toggle bookmark in localStorage:', error);
    return false;
  }
}

/**
 * Checks whether an internship is bookmarked
 */
export function isInternshipSaved(id: string): boolean {
  return getSavedInternshipIds().includes(id);
}

/**
 * Safe Share utility using Web Share API or Clipboard fallback
 */
export async function shareInternship(
  title: string, 
  id: string
): Promise<{ success: boolean; method: 'web-share' | 'clipboard' }> {
  const shareUrl = `${window.location.origin}${window.location.pathname}?role=${encodeURIComponent(id)}`;
  const shareData = {
    title: `${title} | InAmigos Foundation Internship`,
    text: `Check out the ${title} internship opportunity offered by InAmigos Foundation on Internshala:`,
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
      // Fallback to clipboard if share failed
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
