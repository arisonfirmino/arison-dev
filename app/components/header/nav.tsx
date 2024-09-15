"use client";

import { useState } from "react";
import {
  BriefcaseBusinessIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MessagesSquareIcon,
  UserIcon,
} from "lucide-react";

export default function Nav() {
  const [active, setActive] = useState("Home");
  const nav_item = [
    {
      title: "Home",
      icon: <HomeIcon size={20} />,
      id: "home",
    },
    {
      title: "Sobre",
      icon: <UserIcon size={20} />,
      id: "about",
    },
    {
      title: "Projetos",
      icon: <BriefcaseBusinessIcon size={20} />,
      id: "projects",
    },
    {
      title: "Stack",
      icon: <LayoutDashboardIcon size={20} />,
      id: "stack",
    },
    {
      title: "Contato",
      icon: <MessagesSquareIcon size={20} />,
      id: "contact",
    },
  ];

  const offset = -100;

  const handleClick = (divId: string, title: string) => {
    setActive(title);

    const element = document.getElementById(divId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex gap-5">
      {nav_item.map((item) => (
        <button
          key={item.title}
          onClick={() => handleClick(item.id, item.title)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg md:h-fit md:w-fit md:px-3 md:py-1.5 ${active === item.title ? "bg-primary text-white dark:bg-background" : "text-foreground"}`}
        >
          <span className="md:hidden">{item.icon}</span>
          <span className="hidden uppercase md:flex">{item.title}</span>
        </button>
      ))}
    </nav>
  );
}
