function MyH2(props: { text: string }) {
  return (
    <div>
      <h2 className="text-sm2 font-bold uppercase tracking-wider text-gray-750 print:font-normal">
        {props.text}
      </h2>
      <hr className="mb-4 mt-1 h-[2px] border-0 bg-gray-750" />
    </div>
  );
}

export default MyH2;
