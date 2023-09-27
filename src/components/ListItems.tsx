interface ListItemsProps {
  items: string[];
}

function ListItems({ items }: ListItemsProps) {
  return (
    <ul>
      {items.map((item: string, index: number) => (
        <li key={index} className="mt-2.1 text-md leading-normal text-gray-700">
          <span className="absolute -ml-3 -translate-y-px transform select-none sm:-ml-3.2">
            ›
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListItems;
