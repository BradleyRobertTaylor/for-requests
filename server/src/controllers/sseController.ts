import { Request, Response } from 'express';

export let sseClients: { id: number; res: Response }[] = [];

export const pushEventToAllClients = (data: unknown) => {
  sseClients.forEach((client) =>
    client.res.write(`data: ${JSON.stringify(data)}\n\n`),
  );
};

export const sseController = (req: Request, res: Response) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
    'Cache-Control': 'no-cache',
  };
  res.writeHead(200, headers);

  const data = `Hello from your server\n\n`;

  res.write(data);

  const clientId = Date.now();

  const newClient = {
    id: clientId,
    res,
  };

  sseClients.push(newClient);

  req.on('close', () => {
    console.log(`${clientId} Connection closed`);
    sseClients = sseClients.filter((client) => client.id !== clientId);
  });
};
