"use client";

import { useState } from "react";
import ActionButton from "../action-button";
import Timeline from "./timeline";
import { Building2Icon, GraduationCapIcon } from "lucide-react";
import { Timeline as TimelineType } from "@prisma/client";
import { motion } from "framer-motion";

interface TimelineListProps {
  timeline: TimelineType[];
}

export default function TimelineList({ timeline }: TimelineListProps) {
  const [showTimeline, setShowTimeline] = useState(false);

  const education_timeline = timeline.filter(
    (timeline) => timeline.type === "education",
  );
  const experience_timeline = timeline.filter(
    (timeline) => timeline.type === "experience",
  );

  return (
    <div className="space-y-5">
      <ActionButton
        active={showTimeline}
        setActive={() => setShowTimeline(!showTimeline)}
      >
        Timeline
      </ActionButton>

      {showTimeline && (
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 150 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10 md:flex-row"
        >
          <div className="w-full space-y-5">
            <h2 className="flex items-center gap-2.5 text-lg font-semibold uppercase">
              <GraduationCapIcon size={20} />
              Educação
            </h2>

            <Timeline timeline_list={education_timeline} />
          </div>

          <div className="w-full space-y-5">
            <h2 className="flex items-center gap-2.5 text-lg font-semibold uppercase">
              <Building2Icon size={20} />
              Experiência profissional
            </h2>

            <Timeline timeline_list={experience_timeline} />
          </div>
        </motion.div>
      )}
    </div>
  );
}
