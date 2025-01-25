import { Goods } from '@/interface';
import { fetcher } from '@/utils';
import useSWR from 'swr';

const useHotdealList = () => {
  const { data, error } = useSWR<Goods[]>(
    'https://assignment.api.a-bly.com/api/hotdeal/list',
    fetcher,
    {
      suspense: true,
    },
  );
  return {
    hotdealList: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useHotdealList;
