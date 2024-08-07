type HeadingsProps = {
  pretitle: string;
  title: string;
  subtitle: string;
};

export default function Headings({ pretitle, title, subtitle }: HeadingsProps) {
  return (
    <section className="text-sm font-semibold text-dark-gray">
      <p className="uppercase">{pretitle}</p>
      <h1 className="mb-6 mt-4 text-6xl/normal font-bold">{title}</h1>
      <p className="text-lg text-medium-gray">{subtitle}</p>
    </section>
  );
}
