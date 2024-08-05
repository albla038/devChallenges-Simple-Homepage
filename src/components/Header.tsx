import { Menu } from "react-ionicons";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      {/*TODO dark mode logo */}
      <img src="/alarado-icon-homepage.svg" alt="Alardo Logo" />
      <Menu
        color="#111729"
        width="28px"
        height="28px"
        cssClasses="cursor-pointer"
      />
    </header>
  );
}
