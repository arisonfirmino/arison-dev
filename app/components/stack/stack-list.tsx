"use client";

import { useState } from "react";
import { Skill } from "@prisma/client";
import Title from "../title";
import SkillItem from "./skill-item";
import ActionButton from "./action-button";

interface StackListProps {
  skills: Skill[];
}

export default function StackList({ skills }: StackListProps) {
  const frontend_skills = skills.filter((skill) => skill.type === "frontend");
  const backend_skills = skills.filter((skill) => skill.type === "backend");

  const [showLibrary, setShowLibrary] = useState(false);
  const [showTools, setShowTools] = useState(false);

  const library_skills = skills.filter((skill) => skill.type === "library");
  const tool_skills = skills.filter((skill) => skill.type === "tool");

  return (
    <div id="stack" className="space-y-5">
      <Title>Stack</Title>

      <p className="text-sm text-foreground">
        Aqui estão as habilidades que desenvolvi na programação, incluindo
        linguagens, frameworks, bibliotecas e ferramentas. Explore para conhecer
        melhor meu conhecimento técnico.
      </p>

      <>
        <h3 className="text-lg font-medium uppercase">
          Habilidades em frontend
        </h3>

        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-5 md:grid-cols-7">
            {frontend_skills.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </>

      <>
        <h3 className="text-lg font-medium uppercase">
          Habilidades em backend e banco de dados
        </h3>

        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-5 md:grid-cols-7">
            {backend_skills.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="w-full space-y-5">
          <ActionButton
            active={showLibrary}
            setActive={() => setShowLibrary(!showLibrary)}
          >
            Bibliotecas
          </ActionButton>

          <div className="flex justify-center">
            {showLibrary && (
              <div className="grid grid-cols-3 gap-5">
                {library_skills.map((skill) => (
                  <SkillItem key={skill.id} skill={skill} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="w-full space-y-5">
          <ActionButton
            active={showTools}
            setActive={() => setShowTools(!showTools)}
          >
            Ferramentas
          </ActionButton>

          <div className="flex justify-center">
            {showTools && (
              <div className="grid grid-cols-3 gap-5">
                {tool_skills.map((skill) => (
                  <SkillItem key={skill.id} skill={skill} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
