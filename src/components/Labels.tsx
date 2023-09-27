interface LabelProps {
  labels: string[];
}

function Labels({ labels }: LabelProps) {
  return (
    <div>
      <ul className="-mr-1.6 mb-1.6 flex flex-wrap text-md leading-relaxed md:-mb-1.6">
        {labels.map((label: string, index: number) => (
          <li
            key={index}
            className="border-red-700-750 print:shadow-inset mb-1.6 mr-1.6 bg-gray-250 px-2.5 text-base leading-relaxed
             text-gray-750 print:bg-white">
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Labels;
