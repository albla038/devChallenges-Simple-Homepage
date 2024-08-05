import { PRETITLE, SUBTITLE, TITLE } from "./App";

export default function Headings() {
  return (
    <section className="text-dark-gray text-sm font-semibold">
      <p className="uppercase">{PRETITLE}</p>
      <h1 className="mb-6 mt-4 text-6xl/normal font-bold">{TITLE}</h1>
      <p className="text-medium-gray text-lg">{SUBTITLE}</p>
    </section>
  );
}
