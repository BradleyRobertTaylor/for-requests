type BinItemProps = {
  path: string;
  onClick: () => void;
};

function BinItem({ path, onClick }: BinItemProps) {
  return (
    <li onClick={onClick}>
      <span>{path}</span>
    </li>
  );
}

export default BinItem;
