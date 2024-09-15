import { MoveRightIcon } from "lucide-react";

interface LinkProps {
  href: string;
}

export default function Link({ href }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="bg-primary flex items-center justify-between rounded-full px-5 py-2.5 text-white duration-500 hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:bg-background dark:hover:text-white"
    >
      Ver Projeto
      <MoveRightIcon size={16} />
    </a>
  );
}
