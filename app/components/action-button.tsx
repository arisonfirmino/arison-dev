import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface ActionButtonProps {
  children: React.ReactNode;
  active: boolean;
  setActive: () => void;
}

export default function ActionButton({
  children,
  active,
  setActive,
}: ActionButtonProps) {
  return (
    <button
      onClick={setActive}
      className={`flex w-full items-center justify-between border-b border-solid border-black p-2.5 text-base uppercase dark:border-white ${active ? "border-opacity-100" : "border-opacity-50 dark:border-opacity-10"}`}
    >
      {children}
      {active ? <ArrowUpIcon size={16} /> : <ArrowDownIcon size={16} />}
    </button>
  );
}
