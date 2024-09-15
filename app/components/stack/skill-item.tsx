"use client";

import { useState } from "react";
import { Skill } from "@prisma/client";

interface SkillItemProps {
  skill: Skill;
}

export default function SkillItem({ skill }: SkillItemProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative flex h-[90px] w-[90px] cursor-default flex-col items-center justify-center rounded-xl border border-solid border-black dark:border-white ${hover ? "border-opacity-100" : "border-opacity-50 dark:border-opacity-10"}`}
    >
      <div
        dangerouslySetInnerHTML={{ __html: skill.svg }}
        className={`duration-500 ${hover ? "mb-6" : ""}`}
        style={{ color: hover && skill.color ? skill.color : undefined }}
      />
      <span
        className={`absolute w-full truncate px-2.5 text-center text-xs ${hover ? "visible mt-6 duration-500" : "invisible"}`}
      >
        {skill.name}
      </span>
    </div>
  );
}
