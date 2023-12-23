import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useUpdateRequests = () => {
  const [listening, setListening] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!listening) {
      const events = new EventSource('http://localhost:3000/api/subscribe');

      events.onmessage = (event) => {
        const { binPath }: { binPath: string } = JSON.parse(event.data);
        queryClient.invalidateQueries({
          queryKey: ['requests', binPath],
          exact: true,
        });
      };
      setListening(true);
    }
  }, [listening, queryClient]);
};
