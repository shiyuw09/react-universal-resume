interface ListItemsProps {
  items: string[];
}

function ListItems({ items }: ListItemsProps) {
  return (
    <ul>
      {items.map((item: string, index: number) => (
        <li key={index} className="mt-2.1 text-md text-gray-700 leading-normal">
          <span className="-ml-3 absolute select-none -translate-y-px transform">
            ›
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListItems;
