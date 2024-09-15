export default function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="w-full space-x-2.5 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-background px-2.5 py-0.5 text-xs text-foreground dark:text-white"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
