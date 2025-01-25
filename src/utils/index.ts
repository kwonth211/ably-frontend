export const formatTimeDisplay = (time: string): string => {
  const [hours, minutes, seconds] = time.split(':');

  if (hours === '00' && minutes === '00') {
    return `${seconds}초`;
  } else if (hours === '00') {
    return `${minutes}분 ${seconds}초`;
  }
  return `${hours}시간 ${minutes}분 ${seconds}초`;
};

export const formatOnlyHour = (time: string): string => {
  const [hours, minutes, seconds] = time.split(':');
  return `${hours}시`;
};

export const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.') as {
      status?: number;
      info?: unknown;
    };
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
