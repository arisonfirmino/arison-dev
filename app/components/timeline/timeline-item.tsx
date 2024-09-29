import { Timeline } from "@prisma/client";

interface TimelineItemProps {
  timeline: Timeline;
}

export default function TimelineItem({ timeline }: TimelineItemProps) {
  return (
    <div className="relative flex h-28 flex-col justify-between rounded border border-solid border-black border-opacity-50 px-5 py-2.5 duration-500 before:absolute before:-left-[38px] before:top-3 before:block before:h-3 before:w-3 before:rounded-full before:bg-primary before:content-[''] after:absolute after:-left-[17px] after:top-2.5 after:h-0 after:w-0 after:border-8 after:border-transparent after:border-r-background after:duration-500 after:content-[''] hover:border-opacity-100 hover:bg-white after:hover:border-r-black dark:border-white dark:border-opacity-10 before:dark:bg-white hover:dark:border-opacity-100 hover:dark:bg-black after:dark:hover:border-r-white">
      <h2 className="text-lg font-semibold">{timeline.title}</h2>
      <h3>{timeline.location}</h3>
      <p className="text-sm text-foreground">{timeline.date}</p>
    </div>
  );
}
