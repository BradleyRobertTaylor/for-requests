export const formatTimestamp = (timestamp: string) => {
  const dateTime = new Date(timestamp);
  const time = dateTime.toLocaleTimeString();
  const date = dateTime.toLocaleDateString();
  return [formatDate(date), formatTime(time)] as const;
};

const formatTime = (time: string) => {
  const [t, suffix] = time.split(' ');
  time = t.slice(0, t.length - 3);

  return `${time} ${suffix}`;
};

const formatDate = (date: string) => {
  const [month, day, year] = date.split('/');
  return `${month}-${day}-${year.slice(2)}`;
};
