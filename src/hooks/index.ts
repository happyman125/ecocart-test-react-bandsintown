import useSWR from 'swr';
import { getArtist } from '../services';

export function useArtist(artistName: string) {
  const { data, error } = useSWR(artistName, getArtist, {
    revalidateOnFocus: false,
  });

  return {
    data,
    error,
    loading: !data && !error
  }
}
