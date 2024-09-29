"use client";

import { useState } from "react";
import { Project } from "@prisma/client";
import ProjectItem from "./project-item";
import Title from "../title";
import SearchProject from "./search-project";
import { motion } from "framer-motion";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div id="projects" className="space-y-5">
      <Title>Projetos</Title>

      <motion.p
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        className="text-sm text-foreground"
      >
        Confira a lista dos{" "}
        <span className="font-medium text-black dark:text-white">
          {projects.length}
        </span>{" "}
        principais projetos que venho desenvolvendo durante a minha jornada como
        programador.
      </motion.p>

      <SearchProject onSearch={handleSearch} />

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            <ProjectItem project={project} />
          </a>
        ))}
      </motion.div>
    </div>
  );
}
