import { JSONTree } from 'react-json-tree';

type JSONDataProps = {
  json: Record<string, unknown>;
  rootLabel: 'Query Parameters' | 'Headers' | 'Body';
};

function JSONData({ rootLabel, json }: JSONDataProps) {
  return (
    <JSONTree
      data={json}
      theme={{
        base00: '#110D0D',
      }}
      labelRenderer={([key]) =>
        key === 'root' ? <strong>{rootLabel}</strong> : <strong>{key}</strong>
      }
    />
  );
}

export default JSONData;
