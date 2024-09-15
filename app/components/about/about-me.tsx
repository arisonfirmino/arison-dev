export default function AboutMe({ about_me }: { about_me: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: about_me }}
      className="space-y-5 text-base text-foreground"
    />
  );
}
