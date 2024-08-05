type FooterProps = {
  data: {
    id: number;
    text: string;
  }[];
};

export default function CheckContainer({ data }: FooterProps) {
  return (
    <div className="flex gap-5">
      {data.map((element) => (
        <div className="flex items-center gap-2" key={element.id}>
          <img src="/Done_ring_round_fill.svg" alt="Done ring icon" />
          <span className="text-medium-gray text-sm font-medium">
            {element.text}
          </span>
        </div>
      ))}
    </div>
  );
}
