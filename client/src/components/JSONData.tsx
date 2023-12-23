import { JSONTree } from 'react-json-tree';

type JSONDataProps = {
  json: Record<string, unknown>;
  rootLabel: 'Query Parameters' | 'Headers' | 'Body';
};

const lightTheme = {
  base00: '#f5f5f5',
  base03: '#f5f5f5',
  base0B: '#000000',
  base0D: '#000000',
  base0F: '#000000',
};

const JSONData = ({ rootLabel, json }: JSONDataProps) => {
  return (
    <JSONTree
      data={json}
      theme={lightTheme}
      labelRenderer={([key]) =>
        key === 'root' ? <strong>{rootLabel}</strong> : <strong>{key}</strong>
      }
    />
  );
};

export default JSONData;
