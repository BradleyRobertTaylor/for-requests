import { useState } from 'react';
import { BASE_URL } from '../constants/routes';

export const useCopy = (binPath?: string) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    if (!binPath) return;

    navigator.clipboard.writeText(`${BASE_URL}/${binPath}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return { isCopied, handleCopy };
};
