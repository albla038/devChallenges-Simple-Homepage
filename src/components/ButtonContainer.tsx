export default function ButtonContainer() {
  return (
    <section className="flex gap-10 text-base font-semibold">
      <button className="bg-primary rounded-xl p-3 px-10 text-white active:bg-opacity-85">
        GET STARTED
      </button>
      <button className="text-primary underline hover:no-underline active:text-opacity-70">
        Get live demo
      </button>
    </section>
  );
}
