import { useEffect } from 'react';
import { useUpdateUrlParamsPostVideoOrImage } from '@/hooks/useUpdateUrlParamsPostVideoOrImage';

export function useCleanUrlIfThisComponentsIsUnmount() {
  useEffect(() => {
    return () => {
      useUpdateUrlParamsPostVideoOrImage({
        cleanUrl: true
      });
    };
  }, []);
}
