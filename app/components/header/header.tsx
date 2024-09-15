"use client";

import { useEffect, useState } from "react";
import Nav from "./nav";
import ThemeToggle from "./theme-toggle";
import Picture from "../picture";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-20 flex w-full items-center justify-between border-solid border-black border-opacity-10 bg-main p-5 dark:border-white dark:border-opacity-10 md:justify-between ${hasScrolled ? "border-b" : ""}`}
    >
      <Picture className="hidden h-10 w-10 md:flex" />
      <Nav />
      <ThemeToggle />
    </header>
  );
}
