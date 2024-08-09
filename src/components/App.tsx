import { useEffect, useState } from "react";
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

// get initial theme from local storage
function getInitialTheme() {
  const value = localStorage.getItem("theme");
  if (value) {
    return JSON.parse(value);
  } else {
    return false;
  }
}

export default function App() {
  // state
  const [isDarkMode, setDarkMode] = useState(getInitialTheme);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  // event handlers
  const handleToggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const handleToggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  // side effects
  // set theme in local storage
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
    console.log(
      "Theme set to: ",
      isDarkMode ? "dark" : "light",
      "in local storage",
    );
  }, [isDarkMode]);

  return (
    <div
      className={clsx([
        "relative min-h-screen bg-light-blue",
        // Set dark mode class
        isDarkMode ? "dark" : "",
        // Dark mode styles
        "dark:bg-black",
      ])}
    >
      <NavigationBar
        isDarkMode={isDarkMode}
        handleToggleHamburgerMenu={handleToggleHamburgerMenu}
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        handleToggleDarkMode={handleToggleDarkMode}
      />

      <div className="xl:mx-16 xl:mt-12 xl:flex xl:flex-row-reverse xl:items-center">
        <HeroImage />
        <main
          className={clsx([
            "mx-16 space-y-10 pb-24",
            // Large screen
            "lg:mx-32",
            // Extra large screen
            "xl:mx-0 xl:w-1/2",
          ])}
        >
          <Headings pretitle={PRETITLE} title={TITLE} subtitle={SUBTITLE} />
          <ButtonContainer />
          <CheckContainer data={FOOTER_DATA} />
        </main>
      </div>
    </div>
  );
}
