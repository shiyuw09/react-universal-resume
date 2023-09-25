function MyH2(props: { text: string }) {
  return (
    <div>
      <h2 className="uppercase text-sm2 font-bold tracking-wider text-gray-750">
        {props.text}
      </h2>
      <hr className="mb-4 mt-1 h-[2px] bg-gray-750 border-0" />
    </div>
  );
}

export default MyH2;
