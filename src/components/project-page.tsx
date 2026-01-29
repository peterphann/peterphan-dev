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
  Trophy,
  Linkedin,
} from "lucide-react";
import TechCard from "@/components/tech-card";
import { TeamMembersDialog } from "@/components/team-members-dialog";
import { cn } from "@/lib/utils";
import { inter } from "@/util/fonts";
import { Project } from "@/types/project";

const fadeInUp = {
  initial: { opacity: 0, y: 15, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const iconMap = {
  code: Code,
  newspaper: Newspaper,
  building: Building,
  linkedin: Linkedin,
  trophy: Trophy,
};

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const getBadgeClasses = (variant: string) => {
    switch (variant) {
      case "blue":
        return "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30";
      case "green":
        return "px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30";
      case "award":
        return "px-3 py-1 bg-gradient-to-r from-yellow-400/30 via-orange-400/30 to-yellow-400/30 text-yellow-200 rounded-full text-sm border border-yellow-400/50 flex items-center gap-1 backdrop-blur-sm";
      default:
        return "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30";
    }
  };

  const getLinkColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          border: "hover:border-blue-500/30",
          icon: "text-blue-400 group-hover:text-blue-300",
          iconSmall: "text-neutral-500 group-hover:text-blue-400",
          text: "group-hover:text-blue-100",
        };
      case "purple":
        return {
          border: "hover:border-purple-500/30",
          icon: "text-purple-400 group-hover:text-purple-300",
          iconSmall: "text-neutral-500 group-hover:text-purple-400",
          text: "group-hover:text-purple-100",
        };
      case "yellow":
        return {
          border: "hover:border-yellow-500/30",
          icon: "text-yellow-400 group-hover:text-yellow-300",
          iconSmall: "text-neutral-500 group-hover:text-yellow-400",
          text: "group-hover:text-yellow-100",
        };
      default:
        return {
          border: "hover:border-blue-500/30",
          icon: "text-blue-400 group-hover:text-blue-300",
          iconSmall: "text-neutral-500 group-hover:text-blue-400",
          text: "group-hover:text-blue-100",
        };
    }
  };

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
                src={project.heroImage}
                alt={project.title}
                width={1600}
                height={800}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.badges.map((badge, idx) => (
                    <span key={idx} className={getBadgeClasses(badge.variant)}>
                      {badge.icon === "trophy" && <Trophy size={14} />}
                      {badge.text}
                    </span>
                  ))}
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
                  inter.className
                )}
              >
                {project.title}
              </motion.h1>

              {project.showAwardBadge && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-yellow-400/20 rounded-full blur-xl scale-110 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-neutral-900 px-6 py-3 rounded-full border-2 border-yellow-300 shadow-lg flex items-center gap-3 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        <Trophy className="text-neutral-900" size={24} />
                      </motion.div>
                      <div className="text-center">
                        <div className="font-bold leading-tight">
                          {project.showAwardBadge.title}
                        </div>
                        <div className="text-xs font-medium opacity-75">
                          {project.showAwardBadge.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: project.showAwardBadge ? 0.3 : 0.2,
                }}
                className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed"
              >
                {project.description}
              </motion.p>
            </div>

            {/* Quick Info Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: project.showAwardBadge ? 0.4 : 0.4,
              }}
            >
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="text-blue-400" size={20} />
                  <span className="text-neutral-400 text-sm uppercase tracking-wider">
                    Timeline
                  </span>
                </div>
                <p className="text-white font-semibold">{project.timeline}</p>
              </div>

              <TeamMembersDialog
                githubLink={project.githubLink}
                teamMembers={project.team.members}
                projectName={project.title}
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
                    {project.team.count} Developer
                    {project.team.count !== 1 ? "s" : ""}
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
                <p className="text-white font-semibold">{project.role}</p>
                {project.roleSubtitle && (
                  <p className="text-neutral-400 text-sm mt-1">
                    {project.roleSubtitle}
                  </p>
                )}
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
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors border border-neutral-700 hover:border-neutral-600"
              >
                <Github size={18} />
                View on GitHub
              </a>
              {project.liveSiteLink && (
                <a
                  href={project.liveSiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <ExternalLink size={18} />
                  Visit Live Site
                </a>
              )}
            </motion.div>

            {/* Quick Links */}
            {project.quickLinks && project.quickLinks.length > 0 && (
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
                    inter.className
                  )}
                >
                  <Link2 className="text-blue-400" size={20} />
                  Quick Links
                </h3>
                <div className="flex flex-col md:flex-row gap-4">
                  {project.quickLinks.map((link, idx) => {
                    const Icon = iconMap[link.icon];
                    const colors = getLinkColorClasses(link.color);
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "group flex-1 bg-neutral-800/30 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50 transition-all duration-300 hover:bg-neutral-800/50 relative",
                          colors.border
                        )}
                      >
                        <ExternalLink
                          className={cn(
                            "absolute top-3 right-3 transition-colors",
                            colors.iconSmall
                          )}
                          size={14}
                        />
                        <div className="flex items-start gap-3">
                          <Icon
                            className={cn(
                              "transition-colors mt-1",
                              colors.icon
                            )}
                            size={18}
                          />
                          <div>
                            <h4
                              className={cn(
                                "text-white font-medium mb-1 transition-colors",
                                colors.text
                              )}
                            >
                              {link.title}
                            </h4>
                            <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>

          {/* Technologies Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap className="text-yellow-400" size={20} />
              <h2 className={cn("text-lg font-bold text-white", inter.className)}>
                Technologies
              </h2>
            </div>
            <div className="bg-neutral-800/30 backdrop-blur-sm rounded-2xl px-8 py-6 border border-neutral-700/50">
              <motion.div
                className={cn(
                  "grid gap-6 justify-items-center",
                  project.techGridCols.mobile === 4 && "grid-cols-4",
                  project.techGridCols.desktop === 6 && "md:grid-cols-6",
                  project.techGridCols.desktop === 7 && "md:grid-cols-7",
                  project.techGridCols.desktop === 8 && "md:grid-cols-8"
                )}
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-50px" }}
              >
                {project.technologies.map((tech, index) => (
                  <motion.div key={tech.name} variants={fadeInUp} custom={index}>
                    <TechCard technology={tech} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
