import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Technology } from "@/types/technology";
import Image from "next/image";

interface TechCardProps {
  technology: Technology;
  className?: string;
}

export default function TechCard({ technology, className }: TechCardProps) {
  const { icon, name, src } = technology;
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger
        className={cn(
          "hover:scale-110 w-8 h-8 cursor-pointer transition-all duration-300 flex items-center justify-center",
          className,
        )}
      >
        {icon ? (
          <i style={{ fontSize: "32px" }} className={cn(icon)}></i>
        ) : (
          src && <Image src={src} alt={name} width={32} height={32} />
        )}
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        className="backdrop-blur-xs text-sm bg-gradient-to-b from-white/5 to-white/0 w-max py-1 px-3 border-none shadow-lg rounded-lg"
      >
        {name}
      </HoverCardContent>
    </HoverCard>
  );
}
