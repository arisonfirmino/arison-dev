import { DotIcon } from "lucide-react";

export default function Title({ children }: { children: string }) {
  return (
    <div className="brygada-1918 flex w-full items-center justify-start border-b border-solid border-black border-opacity-50 pb-1.5 text-xl font-medium uppercase italic dark:border-white dark:border-opacity-10">
      <DotIcon size={20} />
      <p>{children}.</p>
    </div>
  );
}
