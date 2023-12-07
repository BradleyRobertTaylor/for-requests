export const formatTimestamp = (timestamp: string) => {
  const dateTime = new Date(timestamp);
  let time = dateTime.toLocaleTimeString();
  let date = dateTime.toLocaleDateString();
  return [formatDate(date), formatTime(time)] as const;
};

const formatTime = (time: string) => {
  const [t, suffix] = time.split(' ');
  time = t.slice(0, t.length - 3);

  return `${time} ${suffix}`;
};

const formatDate = (date: string) => {
  let [month, day, year] = date.split('/');
  year = year.slice(2);

  return `${month}-${day}-${year}`;
};
