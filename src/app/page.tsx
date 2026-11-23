import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-start gap-8 pt-12 sm:flex-row sm:items-center sm:gap-10 lg:pt-24">
      <Image
        src="/images/headshot.jpg"
        width={800}
        height={800}
        alt="Portrait of Peter Phan"
        sizes="(min-width: 640px) 208px, 144px"
        priority
        className="size-36 shrink-0 rounded-full border border-rule object-cover sm:size-52"
      />
      <div className="flex min-w-0 flex-col gap-3.5">
        <h1 className="text-[clamp(44px,6vw,68px)] font-medium leading-none tracking-[-0.035em]">
          Peter Phan
        </h1>
        <p className="font-mono text-[13px] text-muted">
          Software Engineer @ Amazon
        </p>
        <p className="mt-3 max-w-[470px] font-serif text-xl leading-normal text-ink-soft">
          Welcome to my portfolio :)
        </p>
      </div>
    </section>
  );
}
