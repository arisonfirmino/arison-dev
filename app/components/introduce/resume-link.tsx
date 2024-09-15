import { MoveRightIcon } from "lucide-react";

export default function ResumeLink({ resume }: { resume: string }) {
  return (
    <a
      href={resume}
      target="_blank"
      rel="noreferrer"
      className="bg-primary flex items-center gap-2.5 rounded-full px-5 py-1.5 text-white duration-500 hover:scale-105 hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:bg-background dark:hover:text-white"
    >
      Currículo <MoveRightIcon size={16} />
    </a>
  );
}
