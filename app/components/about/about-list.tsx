"use client";

import { useState } from "react";
import { Portfolio } from "@prisma/client";
import AboutMe from "./about-me";
import MoreAboutMe from "./more-about-me";
import Title from "../title";

interface AboutListProps {
  portfolio: Portfolio;
}

export default function AboutList({ portfolio }: AboutListProps) {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div id="about" className="space-y-5">
      <Title>Sobre mim</Title>

      <AboutMe about_me={portfolio.about_me} />

      {seeMore ? (
        <MoreAboutMe more_about_me={portfolio.more_about_me} />
      ) : (
        <div className="flex justify-center">
          <button
            onClick={() => setSeeMore(true)}
            className="duration-300 hover:scale-105 active:text-foreground"
          >
            ver mais
          </button>
        </div>
      )}
    </div>
  );
}
