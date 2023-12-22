export const formatTimestamp = (timestamp: string) => {
  const dateTime = new Date(timestamp);
  const date = dateTime.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: '2-digit',
  });
  const time = dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return [date, time] as const;
};
