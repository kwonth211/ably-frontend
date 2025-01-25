import { HotdealTime } from '@/interface';
import { fetcher } from '@/utils';
import useSWR from 'swr';

const useHotdealTime = () => {
  const { data, error } = useSWR<HotdealTime>(
    'https://assignment.api.a-bly.com/api/hotdeal/time',
    fetcher,
  );

  return {
    hotdealTime: data || { startTime: '', endTime: '' },
    isLoading: !error && !data,
    isError: error,
  };
};

export default useHotdealTime;
