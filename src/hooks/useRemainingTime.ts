import { useState, useEffect } from 'react';

const DEFAULT_TIME = '00:00:00';
const useRemainingTime = (startTime: string, endTime: string) => {
  const [remainingTime, setRemainingTime] = useState<string>(DEFAULT_TIME);

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date();
      const start = new Date();
      const end = new Date();

      const [startHours, startMinutes, startSeconds] = startTime
        .split(':')
        .map(Number);
      const [endHours, endMinutes, endSeconds] = endTime.split(':').map(Number);

      start.setHours(startHours, startMinutes, startSeconds);
      end.setHours(endHours, endMinutes, endSeconds);

      const nowIsHotdeal =
        now.getTime() >= start.getTime() && now.getTime() <= end.getTime();

      if (nowIsHotdeal) {
        const diff = Math.floor((end.getTime() - now.getTime()) / 1000);
        const hours = Math.floor(diff / 3600)
          .toString()
          .padStart(2, '0');

        const minutes = Math.floor((diff % 3600) / 60)
          .toString()
          .padStart(2, '0');

        const seconds = (diff % 60).toString().padStart(2, '0');
        setRemainingTime(`${hours}:${minutes}:${seconds}`);
      } else {
        setRemainingTime(DEFAULT_TIME);
      }
    };

    calculateRemainingTime();
    const timer = setInterval(calculateRemainingTime, 1000);

    return () => clearInterval(timer);
  }, [startTime, endTime]);

  return remainingTime;
};
export default useRemainingTime;
