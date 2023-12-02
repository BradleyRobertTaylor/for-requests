import JSONData from './JSONData';

const json = {
  // path: '/',
  headers: {
    host: 'localhost:3000',
    connection: 'keep-alive',
    'sec-ch-ua':
      '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'upgrade-insecure-requests': '1',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'sec-fetch-site': 'none',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9',
    'if-none-match': 'W/"4a5-GIS63NFhG5OIuYKsozgRpr2cOLo"',
  },
  // method: 'GET',
  body: {},
  query: { hello: 'world' },
};

function RequestData() {
  return (
    <div>
      <JSONData json={json.headers} rootLabel="Headers" />
      <JSONData json={json.query} rootLabel="Query Parameters" />
    </div>
  );
}

export default RequestData;
