import clsx from "clsx";

type HeadingsProps = {
  pretitle: string;
  title: string;
  subtitle: string;
};

export default function Headings({ pretitle, title, subtitle }: HeadingsProps) {
  return (
    <section
      className={clsx([
        "font-semibold text-dark-gray",
        // Large screen
        "lg:w-[750px]",
        // Extra large screen
        "xl:w-full",
      ])}
    >
      <p className="text-sm uppercase dark:text-white">{pretitle}</p>
      <h1 className="mb-6 mt-4 text-5xl/normal font-bold sm:text-6xl/normal dark:text-white">
        {title}
      </h1>
      <p
        className={clsx([
          "text-lg text-medium-gray",
          // Large screen
          "lg:w-2/3",
        ])}
      >
        {subtitle}
      </p>
    </section>
  );
}
