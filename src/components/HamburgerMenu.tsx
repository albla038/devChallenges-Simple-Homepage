import { Transition } from "@headlessui/react";
import DarkModeToggle from "./DarkModeToggle";
import { X } from "lucide-react";
import clsx from "clsx";
import { useOutsideClick } from "../lib/hooks";

type HamburgerMenuProps = {
  isDarkMode: boolean;
  handleToggleDarkMode: () => void;
  isHamburgerMenuOpen: boolean;
  handleToggleHamburgerMenu: () => void;
};

export default function HamburgerMenu({
  isDarkMode,
  handleToggleDarkMode,
  isHamburgerMenuOpen,
  handleToggleHamburgerMenu,
}: HamburgerMenuProps) {
  const ref = useOutsideClick(handleToggleHamburgerMenu);
  return (
    <Transition show={isHamburgerMenuOpen}>
      <nav
        ref={ref}
        className={clsx([
          // Base styles
          "absolute inset-y-0 right-0 z-10 h-full w-[400px] bg-white",
          // Dark mode styles
          "dark:bg-[#1e2436]",
          // Entering styles
          "data-[enter]:data-[closed]:translate-x-full data-[enter]:duration-100",
          // Leaving styles
          "data-[leave]:data-[closed]:translate-x-full data-[leave]:duration-300",
        ])}
      >
        <X
          color={isDarkMode ? "#ffffff" : "#111729"}
          size="32px"
          className="absolute right-6 top-6 z-20 cursor-pointer"
          onClick={handleToggleHamburgerMenu}
        />
        <li className="flex list-none flex-col items-center gap-16 pt-20 text-5xl font-bold text-medium-gray">
          <ul className="text-dark-gray dark:text-white">About us</ul>
          <ul>Product</ul>
          <ul>Resource</ul>
          <ul>Contact</ul>
          <ul>
            <DarkModeToggle
              isDarkMode={isDarkMode}
              handleToggle={handleToggleDarkMode}
            />
          </ul>
        </li>
      </nav>
    </Transition>
  );
}
