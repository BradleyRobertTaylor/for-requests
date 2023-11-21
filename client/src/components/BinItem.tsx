type BucketItemProps = {
  path: string;
  onClick: () => void;
};

function BucketItem({ path, onClick }: BucketItemProps) {
  return (
    <li onClick={onClick}>
      <span>{path}</span>
    </li>
  );
}

export default BucketItem;
