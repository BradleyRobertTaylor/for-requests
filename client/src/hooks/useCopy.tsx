import { useState } from 'react';

export const useCopy = (binPath?: string) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    if (!binPath) return;

    navigator.clipboard.writeText(`https://for-requests.com/${binPath}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return { isCopied, handleCopy };
};
