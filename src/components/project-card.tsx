import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  href?: string,
  src: string,
  title: string,
  description: string,
  date: string
}

export default function ProjectCard({ href="", src, title, description, date }: ProjectProps) {

  return <div>
    <div className={"bg-gray-50 shadow-[0px_16px_28px_-12px_rgba(0,_0,_0,_0.1)] border border-[#f0f1f3] rounded-md"}>
      <Link href={href}>
        <Image className={"w-full rounded-md h-auto"} src={src} alt={"Project"} width={800} height={800} />
      </Link>
    </div>

    <div className={"mt-4 flex justify-between items-start"}>
      <div className={"text-xl font-medium"}>
        <p>{title}</p>
        <p className={"text-neutral-400"}>{description}</p>
      </div>

      <div className={"text-neutral-400 font-light"}>
        {date}
      </div>
    </div>
  </div>;
}