import { Timeline as TimelineType } from "@prisma/client";
import TimelineItem from "./timeline-item";

export interface TimelineProps {
  timeline_list: TimelineType[];
}

export default function Timeline({ timeline_list }: TimelineProps) {
  return (
    <div className="w-full space-y-5 border-l-2 border-solid border-black border-opacity-50 pl-[30px] dark:border-white dark:border-opacity-10">
      {timeline_list.map((timeline) => (
        <TimelineItem key={timeline.id} timeline={timeline} />
      ))}
    </div>
  );
}
