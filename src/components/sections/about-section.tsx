import { cn } from "@/lib/utils";
import { inter } from "@/util/fonts";

export default function AboutSection() {
  return (
    <section id={"about"} className={"pt-4"}>
      <div className={"text-center"}>
        <h2
          className={cn(
            "text-neutral-400 tracking-widest mb-3 text-xl uppercase",
            inter.className,
          )}
        >
          About
        </h2>
      </div>

      <p>work in progress...</p>
    </section>
  );
}
