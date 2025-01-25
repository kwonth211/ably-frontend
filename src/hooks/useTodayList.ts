import { Goods } from '@/interface';
import { fetcher } from '@/utils';
import useSWR from 'swr';

const useTodayList = () => {
  const { data, error } = useSWR<Goods[]>(
    'https://assignment.api.a-bly.com/api/today/list',
    fetcher,
  );
  return {
    todayList: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useTodayList;
