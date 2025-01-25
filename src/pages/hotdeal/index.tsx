import { HotdealTimer } from '@/components';
import ErrorBoundary from '@/components/ErrorBoundary';
import HotdealContent from '@/components/HotDealContent';
import { useHotdealTime, useRemainingTime } from '@/hooks';
import { formatOnlyHour, formatTimeDisplay } from '@/utils';
import { Suspense } from 'react';

function Hotdeal() {
  const { hotdealTime, isLoading, isError } = useHotdealTime();
  const remainingTime = useRemainingTime(
    hotdealTime.startTime,
    hotdealTime.endTime,
  );

  if (isLoading) return <div>핫딜 시간을 조회중입니다...</div>;
  if (isError) return <div>핫딜 시간 조회중 에러가 발생했습니다.</div>;

  return (
    <>
      <HotdealTimer
        title={
          remainingTime !== '00:00:00'
            ? `🔥 핫딜이 ${formatTimeDisplay(remainingTime)} 남았어요`
            : ''
        }
        subTitle={`핫딜 시간: ${formatOnlyHour(
          hotdealTime.startTime,
        )} ~ ${formatOnlyHour(hotdealTime.endTime)}`}
      />
      <ErrorBoundary
        fallback={<div>핫딜 상품 조회중 에러가 발생했습니다.</div>}
      >
        <Suspense fallback={<div>핫딜 상품을 조회중입니다...</div>}>
          <HotdealContent />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default Hotdeal;
