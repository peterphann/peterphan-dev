import ProjectsSection from "@/components/sections/projects-section";
import Image from "next/image";
import TechStackSection from "@/components/sections/tech-stack-section";
import ExperienceSection from "@/components/sections/experience-section";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className={"space-y-6"}>
      <div className="relative">
        <section id={"home"} className={"w-full pb-8"}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <Image
                  src={"/images/headshot.jpg"}
                  className={
                    "rounded-full w-24 h-24 md:w-32 md:h-32 object-cover border-4 border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  }
                  alt={"Peter Phan"}
                  width={128}
                  height={128}
                />

                <div className="flex-1">
                  <div className={"text-4xl md:text-5xl mb-3 relative"}>
                    <p className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      Hello, I&#39;m Peter!
                    </p>
                  </div>

                  <div
                    className={
                      "text-xl font-light text-muted-foreground space-y-1"
                    }
                  >
                    <p>Software Engineer</p>
                    <p>Texas A&M University</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center flex-wrap">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="group flex items-center cursor-pointer gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 hover:border-white/20 text-white hover:shadow-lg hover:shadow-purple-500/25">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transition-all duration-300 group-hover:scale-110 group-hover:text-purple-300"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span className="text-sm font-medium transition-all duration-300 group-hover:text-purple-300">
                        Email
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-semibold">
                        Want to reach out?
                      </DialogTitle>
                      <DialogDescription className="text-base">
                        I&apos;d love to chat with you! Whether it&apos;s about
                        potential opportunities, collaborations, or just to say
                        hello.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-4">
                          Feel free to contact me directly:
                        </p>
                        <a
                          href="mailto:peterlephan@gmail.com"
                          className="group inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/20 hover:border-white/30 text-white hover:shadow-lg hover:shadow-white/10 font-medium"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="transition-all duration-300 group-hover:scale-110 group-hover:text-white/90"
                          >
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                          peterlephan@gmail.com
                        </a>
                      </div>
                      <div className="text-center border-t pt-4">
                        <p className="text-xs text-muted-foreground">
                          You can also find me on LinkedIn and GitHub using the
                          links above.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <a
                  href="https://www.linkedin.com/in/peterlphan/"
                  className="group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 hover:border-white/20 text-white hover:shadow-lg hover:shadow-blue-500/25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-medium transition-all duration-300 group-hover:text-blue-300">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://github.com/peterphann"
                  className="group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-gray-500/10 to-slate-500/10 border border-white/10 hover:border-white/20 text-white hover:shadow-lg hover:shadow-gray-500/25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="transition-all duration-300 group-hover:scale-110 group-hover:text-gray-300"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm font-medium transition-all duration-300 group-hover:text-gray-300">
                    GitHub
                  </span>
                </a>

                <a
                  href="https://drive.google.com/file/d/1k1LUpu4hZubLqOY7UYrXXTML5EW0vLL3/view?usp=sharing"
                  className="group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-white/10 hover:border-white/20 text-white hover:shadow-lg hover:shadow-emerald-500/25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300"
                  >
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                  <span className="text-sm font-medium transition-all duration-300 group-hover:text-emerald-300">
                    Resume
                  </span>
                </a>
              </div>
            </div>

            <ExperienceSection />
          </div>
        </section>
      </div>

      <TechStackSection />

      <ProjectsSection />

      {/* <AboutSection /> */}
    </main>
  );
}
