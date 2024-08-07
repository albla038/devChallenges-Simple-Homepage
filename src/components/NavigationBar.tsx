import HamburgerMenu from "./HamburgerMenu";
import { Menu } from "lucide-react";

type NavigationBarProps = {
  isDarkMode: boolean;
  handleToggleDarkMode: () => void;
  isHamburgerMenuOpen: boolean;
  handleToggleHamburgerMenu: () => void;
};

export default function NavigationBar({
  isDarkMode,
  handleToggleDarkMode,
  isHamburgerMenuOpen,
  handleToggleHamburgerMenu,
}: NavigationBarProps) {
  return (
    <>
      <header className="flex items-center justify-between p-4">
        {/*TODO dark mode logo */}
        <img src="/alarado-icon-homepage.svg" alt="Alardo Logo" />
        <Menu
          color="#111729"
          size="28px"
          className="cursor-pointer"
          onClick={handleToggleHamburgerMenu}
        />
      </header>
      <HamburgerMenu
        isDarkMode={isDarkMode}
        handleToggleHamburgerMenu={handleToggleHamburgerMenu}
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        handleToggleDarkMode={handleToggleDarkMode}
      />
    </>
  );
}
