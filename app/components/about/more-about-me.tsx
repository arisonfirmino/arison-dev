export default function MoreAboutMe({
  more_about_me,
}: {
  more_about_me: string;
}) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: more_about_me }}
      className="space-y-5 text-base text-foreground"
    />
  );
}
