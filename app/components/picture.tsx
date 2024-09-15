import Image from "next/image";

export default function Picture({ className }: { className: string }) {
  return (
    <Image
      src="/IMG.jpg"
      alt="Arison Firmino"
      height={1024}
      width={1024}
      className={`rounded-full ${className}`}
    />
  );
}
