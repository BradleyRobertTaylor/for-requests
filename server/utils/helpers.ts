export const parsePath = (path: string, binPath: string) => {
  const parsedPath = path.split(`/${binPath}`).join('');
  return parsedPath === '' ? '/' : parsedPath;
};
