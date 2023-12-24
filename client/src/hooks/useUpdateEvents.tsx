import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useUpdateEvents = () => {
  const [listening, setListening] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!listening) {
      const events = new EventSource('/api/subscribe');

      events.onmessage = (event) => {
        const { binPath }: { binPath: string } = JSON.parse(event.data);
        queryClient.invalidateQueries({
          queryKey: ['events', binPath],
          exact: true,
        });
      };
      setListening(true);
    }
  }, [listening, queryClient]);
};
