import {useEffect} from 'react';

/**
 * Usually need to combine with `stopPropagation` to work as expected
 * @param callback callback to execute when click outside
 */
export function useClickOutside(callback: () => void) {
  useEffect(() => {
    window.addEventListener('click', callback);
    return () => window.removeEventListener('click', callback);
  }, [callback]);
}
