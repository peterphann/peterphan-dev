import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Technology } from "@/types/technology";
import Image from "next/image";

interface TechCardProps {
  technology: Technology;
  className?: string;
  size?: number;
}

export default function TechCard({
  technology,
  className,
  size = 8,
}: TechCardProps) {
  const { icon, name, src } = technology;
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger
        className={cn(
          "hover:scale-110 w-8 h-8 cursor-pointer transition-all duration-300 flex items-center justify-center",
          className,
        )}
        style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
      >
        {icon ? (
          <i style={{ fontSize: `${size * 4}px` }} className={cn(icon)}></i>
        ) : (
          src && (
            <Image src={src} alt={name} width={size * 4} height={size * 4} />
          )
        )}
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/0 border border-white/10 text-white w-max py-1.5 px-4 shadow-lg rounded-lg text-sm font-medium transition-all duration-300"
      >
        {name}
      </HoverCardContent>
    </HoverCard>
  );
}
