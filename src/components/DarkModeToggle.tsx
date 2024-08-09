type DarkModeToggleProps = {
  isDarkMode: boolean;
  handleToggle: () => void;
};

export default function DarkModeToggle({
  isDarkMode,
  handleToggle,
}: DarkModeToggleProps) {
  return (
    <label className="group cursor-pointer">
      <input type="checkbox" onChange={handleToggle} className="sr-only" />
      <div className="relative h-7 w-16 rounded-full bg-dark-gray">
        <div className="absolute z-10 m-[2px] h-[24px] w-[24px] rounded-full bg-white transition-all duration-300 group-has-[:checked]:translate-x-9"></div>
        <div className="absolute inset-0 z-20 flex transform items-center justify-between p-[2px] group-has-[:checked]:opacity-0">
          <img src="/Sun_fill.svg" alt="" />
          <img src="/Moon_fill_light.svg" alt="" />
        </div>
        <div className="absolute inset-0 z-20 hidden items-center justify-between p-[2px] group-has-[:checked]:flex">
          <img src="/Sun_fill_light.svg" alt="" />
          <img src="/Moon_fill.svg" alt="" />
        </div>
      </div>
    </label>
  );
}
