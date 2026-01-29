"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
  Zap,
  Building,
  Newspaper,
  Link2,
} from "lucide-react";
import TechCard from "@/components/tech-card";
import { TeamMembersDialog } from "@/components/team-members-dialog";
import { aggieSeekTeam } from "@/data/team-members";
import { cn } from "@/lib/utils";
import { inter } from "@/util/fonts";
import {
  docker,
  react,
  typescript,
  python,
  postgresql,
  tailwind,
  aws,
  nginx,
} from "@/data/technologies";

const fadeInUp = {
  initial: { opacity: 0, y: 30, scale: 0.8 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const aggieSeekTech = [
  react,
  typescript,
  python,
  postgresql,
  tailwind,
  docker,
  aws,
  nginx,
];

export default function AggieSeek() {
  const githubLink = "https://github.com/aggieseek";

  return (
    <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden mb-8 group">
              <Image
                src="/images/aggieseek.png"
                alt="AggieSeek Screenshot"
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                    Web Application
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                    Active Development
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                  "text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight",
                  inter.className,
                )}
              >
                AggieSeek
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed"
              >
                A modern course discovery platform designed to help Texas A&M
                students find and explore courses with ease
              </motion.p>
            </div>

            {/* Quick Info Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="text-blue-400" size={20} />
                  <span className="text-neutral-400 text-sm uppercase tracking-wider">
                    Timeline
                  </span>
                </div>
                <p className="text-white font-semibold">Jan. 2024 – Present</p>
              </div>

              <TeamMembersDialog
                githubLink={githubLink}
                teamMembers={aggieSeekTeam}
                projectName="AggieSeek"
              >
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50 hover:border-green-500/30 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center gap-3 mb-2">
                    <Users
                      className="text-green-400 group-hover:text-green-300 transition-colors"
                      size={20}
                    />
                    <span className="text-neutral-400 text-sm uppercase tracking-wider group-hover:text-neutral-300 transition-colors">
                      Team
                    </span>
                  </div>
                  <p className="text-white font-semibold group-hover:text-green-100 transition-colors">
                    4 Developers
                  </p>
                  <p className="text-neutral-500 text-xs mt-1 group-hover:text-neutral-400 transition-colors">
                    Click to meet the team
                  </p>
                </div>
              </TeamMembersDialog>
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Code className="text-purple-400" size={20} />
                  <span className="text-neutral-400 text-sm uppercase tracking-wider">
                    Role
                  </span>
                </div>
                <p className="text-white font-semibold">Lead Developer</p>
                <p className="text-neutral-400 text-sm mt-1">Project Manager</p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors border border-neutral-700 hover:border-neutral-600"
              >
                <Github size={18} />
                View on GitHub
              </a>
              <a
                href="https://aggieseek.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <ExternalLink size={18} />
                Visit Live Site
              </a>
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <h3
                className={cn(
                  "text-lg font-semibold text-white mb-6 flex items-center gap-2",
                  inter.className,
                )}
              >
                <Link2 className="text-blue-400" size={20} />
                Quick Links
              </h3>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="https://thebatt.com/life-arts/navigating-student-life-made-easy-by-the-aggie-coding-club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 bg-neutral-800/30 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50 hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/50 relative"
                >
                  <ExternalLink
                    className="absolute top-3 right-3 text-neutral-500 group-hover:text-blue-400 transition-colors"
                    size={14}
                  />
                  <div className="flex items-start gap-3">
                    <Newspaper
                      className="text-blue-400 group-hover:text-blue-300 transition-colors mt-1"
                      size={18}
                    />
                    <div>
                      <h4 className="text-white font-medium mb-1 group-hover:text-blue-100 transition-colors">
                        Battalion Feature
                      </h4>
                      <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">
                        Student spotlight article about AggieSeek
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://aggiecodingclub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 bg-neutral-800/30 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50 hover:border-purple-500/30 transition-all duration-300 hover:bg-neutral-800/50 relative"
                >
                  <ExternalLink
                    className="absolute top-3 right-3 text-neutral-500 group-hover:text-purple-400 transition-colors"
                    size={14}
                  />
                  <div className="flex items-start gap-3">
                    <Building
                      className="text-purple-400 group-hover:text-purple-300 transition-colors mt-1"
                      size={18}
                    />
                    <div>
                      <h4 className="text-white font-medium mb-1 group-hover:text-purple-100 transition-colors">
                        Aggie Coding Club
                      </h4>
                      <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">
                        The organization where this project was born
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap className="text-yellow-400" size={20} />
              <h2
                className={cn("text-lg font-bold text-white", inter.className)}
              >
                Technologies
              </h2>
            </div>
            <div className="bg-neutral-800/30 backdrop-blur-sm rounded-2xl px-8 py-6 border border-neutral-700/50">
              <motion.div
                className="grid grid-cols-4 md:grid-cols-8 gap-6 justify-items-center"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-50px" }}
              >
                {aggieSeekTech.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={fadeInUp}
                    custom={index}
                  >
                    <TechCard technology={tech} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className={cn(
                "text-2xl font-bold text-white mb-8",
                inter.className,
              )}
            >
              Project
            </h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-neutral-800/20 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Background
                </h3>
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  AggieSeek started off as a basic terminal application that I
                  made back in October 2023
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">
                  The Problem
                </h3>
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  Texas A&M students face significant challenges when searching
                  for courses that align with their interests and academic
                  goals. The existing course catalog system is outdated,
                  difficult to navigate, and lacks modern filtering and
                  discovery features that students expect from contemporary web
                  applications.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">
                  Our Solution
                </h3>
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  AggieSeek reimagines course discovery with a modern, intuitive
                  interface that allows students to search, filter, and explore
                  courses using advanced criteria like professor ratings,
                  difficulty levels, time preferences, and more. The platform
                  aggregates data from multiple sources to provide comprehensive
                  course information in one place.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700/50">
                    <h4 className="text-white font-semibold mb-2">
                      Smart Search
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      Advanced filtering by professor, time, difficulty, and
                      more
                    </p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700/50">
                    <h4 className="text-white font-semibold mb-2">
                      Professor Insights
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      Integrated ratings and reviews from multiple platforms
                    </p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700/50">
                    <h4 className="text-white font-semibold mb-2">
                      Schedule Builder
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      Visual schedule planning and conflict detection
                    </p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700/50">
                    <h4 className="text-white font-semibold mb-2">
                      Real-time Updates
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      Live enrollment data and waitlist information
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section> */}
        </div>
      </div>
    </div>
  );
}
