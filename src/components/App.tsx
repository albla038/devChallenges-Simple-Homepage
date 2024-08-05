import { Close } from "react-ionicons";
import ButtonContainer from "./ButtonContainer";
import CheckContainer from "./CheckContainer";
import Header from "./Header";
import Headings from "./Headings";
import HeroImage from "./HeroImage";

export const PRETITLE = "😎  Simple way to communicate";

export const TITLE = "Actions for Accessibility in Design";

export const SUBTITLE =
  "The fastest way to build and deploy websites with resusable components.";

export const FOOTER_DATA = [
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
  return (
    <div className="bg-light-blue relative min-h-screen">
      <Header />

      <nav className="absolute inset-y-0 right-0 z-10 h-full w-[400px] bg-white">
        <Close
          color="#111729"
          width="32px"
          height="32px"
          cssClasses="absolute top-6 right-6 z-20 cursor-pointer"
        />
        <li className="text-medium-gray flex list-none flex-col items-center gap-12 pt-16 text-5xl font-bold">
          <ul className="text-dark-gray">About us</ul>
          <ul>Product</ul>
          <ul>Resource</ul>
          <ul>Contact</ul>
          
        </li>
      </nav>

      <HeroImage />
      <main className="mx-16 space-y-10 pb-24">
        <Headings />
        <ButtonContainer />
        <CheckContainer data={FOOTER_DATA} />
      </main>
    </div>
  );
}
