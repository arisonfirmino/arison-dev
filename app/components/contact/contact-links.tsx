"use client";

import { Portfolio } from "@prisma/client";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MessageCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface ContactLinksProps {
  portfolio: Portfolio;
}

export default function ContactLinks({ portfolio }: ContactLinksProps) {
  const link_items = [
    {
      name: "Email",
      icon: <MailIcon size={16} />,
      href: `mailto:${portfolio.email}`,
    },
    {
      name: "WhatsApp",
      icon: <MessageCircleIcon size={16} />,
      href: portfolio.whatsapp,
    },
    {
      name: "linkedIn",
      icon: <LinkedinIcon size={16} />,
      href: portfolio.linkedin,
    },
    { name: "GitHub", icon: <GithubIcon size={16} />, href: portfolio.github },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 150 }}
      transition={{ duration: 0.5 }}
      className="relative flex items-center justify-center gap-5 md:justify-end"
    >
      <hr className="absolute w-full border-black border-opacity-50 dark:border-white dark:border-opacity-10" />
      {link_items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-solid border-black border-opacity-50 bg-main text-foreground duration-500 hover:border-opacity-100 hover:text-black dark:border-white dark:border-opacity-10 dark:hover:border-opacity-100 dark:hover:text-white"
        >
          {item.icon}
        </a>
      ))}
    </motion.div>
  );
}
