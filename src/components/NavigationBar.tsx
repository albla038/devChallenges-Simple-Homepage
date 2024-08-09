import DarkModeToggle from "./DarkModeToggle";
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
      <header className="flex items-center justify-between p-6">
        {/*TODO dark mode logo */}
        <img src="/alarado-icon-homepage.svg" alt="Alardo Logo" />
        <nav className="hidden gap-12 text-sm font-semibold text-medium-gray lg:flex">
          <a href="#" className="text-dark-gray hover:underline">
            About us
          </a>
          <a href="#" className="hover:underline">
            Product
          </a>
          <a href="#" className="hover:underline">
            Resource
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>
        <div className="hidden lg:block">
          <DarkModeToggle
            isDarkMode={isDarkMode}
            handleToggle={handleToggleDarkMode}
          />
        </div>
        <Menu
          color="#111729"
          size="28px"
          className="cursor-pointer lg:hidden"
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
