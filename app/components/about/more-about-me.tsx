"use client";

import { motion } from "framer-motion";

export default function MoreAboutMe({
  more_about_me,
}: {
  more_about_me: string;
}) {
  return (
    <motion.div
      dangerouslySetInnerHTML={{ __html: more_about_me }}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 150 }}
      transition={{ duration: 0.5 }}
      className="space-y-5 text-base text-foreground"
    />
  );
}
