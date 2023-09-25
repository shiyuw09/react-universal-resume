interface LabelProps {
  labels: string[];
}

function Labels({ labels }: LabelProps) {
  return (
    <div>
      <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
        {labels.map((label: string, index: number) => (
          <li
            key={index}
            className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Labels;
