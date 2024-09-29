"use client";

import { Portfolio } from "@prisma/client";
import ResumeLink from "./resume-link";
import { MoveUpRightIcon } from "lucide-react";
import Picture from "../picture";
import { motion } from "framer-motion";

interface IntroduceListProps {
  portfolio: Portfolio;
}

export default function IntroduceList({ portfolio }: IntroduceListProps) {
  const links = [
    { name: "GitHub", href: portfolio.github },
    { name: "LinkedIn", href: portfolio.linkedin },
  ];

  return (
    <div id="home" className="space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
      >
        <Picture className="h-20 w-20" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        className="brygada-1918 text-2xl font-medium"
      >
        Embarcando em uma jornada de aprendizado na programação, buscando
        transformar ideias em soluções práticas.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        className="text-base text-foreground"
      >
        {portfolio.bio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <ResumeLink resume={portfolio.resume} />

        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 duration-500 hover:scale-105 active:text-foreground"
            >
              {link.name} <MoveUpRightIcon size={14} />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
