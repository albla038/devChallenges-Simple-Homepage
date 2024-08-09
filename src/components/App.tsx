import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import CheckContainer from "./CheckContainer";
import NavigationBar from "./NavigationBar";
import Headings from "./Headings";
import HeroImage from "./HeroImage";
import clsx from "clsx";

const PRETITLE = "😎  Simple way to communicate";

const TITLE = "Actions for Accessibility in Design";

const SUBTITLE =
  "The fastest way to build and deploy websites with resusable components.";

const FOOTER_DATA = [
  {
    id: 1,
    text: "No credit card required",
  },
  {
    id: 2,
    text: "No software to install",
  },
];

export default function App() {
  // state
  const [isDarkMode, setDarkMode] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  // event handler
  const handleToggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const handleToggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  return (
    <div
      className={`relative min-h-screen bg-light-blue ${isDarkMode ? "dark" : ""}`}
    >
      <NavigationBar
        isDarkMode={isDarkMode}
        handleToggleHamburgerMenu={handleToggleHamburgerMenu}
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        handleToggleDarkMode={handleToggleDarkMode}
      />

      <HeroImage />
      <main
        className={clsx([
          "mx-16 space-y-10 pb-24",
          // Large screen
          "lg:mx-32",
          // Extra large screen
          "xl:",
        ])}
      >
        <Headings pretitle={PRETITLE} title={TITLE} subtitle={SUBTITLE} />
        <ButtonContainer />
        <CheckContainer data={FOOTER_DATA} />
      </main>
    </div>
  );
}
