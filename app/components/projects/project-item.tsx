"use client";

import { useState } from "react";
import { Project } from "@prisma/client";
import DeployLink from "./deploy-link";
import { BookMarkedIcon } from "lucide-react";
import ProjectTags from "./project-tags";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative space-y-2.5 rounded-lg border border-solid border-black duration-500 dark:border-white ${hover ? "scale-105 border-opacity-100 bg-white dark:bg-black dark:bg-opacity-50" : "border-opacity-50 dark:border-opacity-10"}`}
    >
      <div className="px-5 pt-5">
        <h2 className="text-lg font-bold">{project.name}</h2>
      </div>

      <div className="px-5">
        <p className="text-sm text-foreground">{project.description}</p>
      </div>

      <ProjectTags tags={project.tags} />

      <div className="px-5 pb-5">
        <DeployLink href={project.deploy} />
      </div>

      <BookMarkedIcon
        size={16}
        className={`absolute right-2.5 top-1 duration-500 ${hover ? "opacity-100" : "opacity-50 dark:opacity-10"}`}
      />
    </div>
  );
}
