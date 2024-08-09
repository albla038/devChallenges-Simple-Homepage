import { useEffect, useRef } from "react";

// returns a React.RefObject that should be passed to the ref property of the "inside" component
// takes a void callback that will be called once an click event outside of the component is observed
export function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // test if user clicked
    function handleOutsideClick(event: MouseEvent | TouchEvent) {
      // callback if outside component
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("touchend", handleOutsideClick);

    // cleanup function
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("touchend", handleOutsideClick);
    };
  }, [callback]);

  return ref;
}
