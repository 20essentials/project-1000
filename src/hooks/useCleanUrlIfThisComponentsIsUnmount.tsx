import { useEffect } from 'react';
import {
  deleteParamsOfUrl,
  type queryParamsArray
} from '@/hooks/useUpdateUrlParamsPostVideoOrImage';

export function useCleanUrlIfThisComponentsIsUnmount({
  arrayOfQueryParamsToDelete
}: {
  arrayOfQueryParamsToDelete: queryParamsArray;
}) {
  useEffect(() => {
    return () => {
      deleteParamsOfUrl({ arrayOfQueryParamsToDelete });
    };
  }, []);
}
