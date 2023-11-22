export const parsePath = (path: string, binPath: string) => {
  return path.split(`/${binPath}`).join('');
};
