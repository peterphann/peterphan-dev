"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { inter } from "@/util/fonts";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TeamMember, SocialLink } from "@/data/team-members";
import { ExternalLink } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface TeamMembersDialogProps {
  children: React.ReactNode;
  teamMembers: TeamMember[];
  projectName: string;
  githubLink: string;
}

interface SocialLinkButtonProps {
  link: SocialLink;
}

function SocialLinkButton({ link }: SocialLinkButtonProps) {
  const IconComponent = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-neutral-600 bg-neutral-800/50 hover:bg-neutral-700/50 transition-all duration-200 group",
        link.color,
      )}
      title={link.platform}
    >
      <IconComponent size={14} className="sm:w-4 sm:h-4" />
    </a>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
  isSelected: boolean;
  onClick: () => void;
}

function TeamMemberCard({ member, isSelected, onClick }: TeamMemberCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative cursor-pointer rounded-lg sm:rounded-xl border transition-all duration-300 hover:scale-105",
        isSelected
          ? "border-blue-500/50 bg-blue-950/30 shadow-lg shadow-blue-500/10"
          : "border-neutral-700/50 bg-neutral-800/30 hover:border-neutral-600/50 hover:bg-neutral-800/50",
      )}
    >
      <div className="p-2 sm:p-4">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 rounded-full overflow-hidden border-2 border-neutral-600">
          <Image
            src={member.headshot}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-white font-semibold text-xs sm:text-sm text-center mb-0.5 sm:mb-1 line-clamp-1">
          {member.name}
        </h3>
        <p className="text-neutral-400 text-[10px] sm:text-xs text-center line-clamp-1">{member.role}</p>
      </div>
      {isSelected && (
        <div className="absolute inset-0 rounded-lg sm:rounded-xl border-2 border-blue-500/30 pointer-events-none" />
      )}
    </div>
  );
}

interface TeamMemberDetailsProps {
  member: TeamMember;
}

function TeamMemberDetails({ member }: TeamMemberDetailsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-1">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto sm:mx-0 rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-600 shadow-lg">
          <Image
            src={member.headshot}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="text-center sm:text-left">
          <h2
            className={cn(
              "text-xl sm:text-2xl font-bold text-white mb-1",
              inter.className,
            )}
          >
            {member.name}
          </h2>
          <p className="text-blue-400 text-sm sm:text-base font-medium mb-3 sm:mb-4">{member.role}</p>

          {/* Social Links */}
          <div className="flex gap-2 justify-center sm:justify-start flex-wrap">
            {member.socialLinks.map((link) => (
              <SocialLinkButton key={link.platform} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TeamMembersDialog({
  children,
  teamMembers,
  projectName,
  githubLink,
}: TeamMembersDialogProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(
    teamMembers[0],
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900/95 backdrop-blur-xl border-neutral-700 p-4 sm:p-6">
        <VisuallyHidden>
          <DialogTitle>Meet the {projectName} Team</DialogTitle>
        </VisuallyHidden>
        <div className="space-y-4 sm:space-y-6">
          {/* Team Member Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                isSelected={selectedMember.id === member.id}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>

          <div className="bg-neutral-800/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-neutral-700/50">
            <TeamMemberDetails member={selectedMember} />
          </div>

          <div className="bg-gradient-to-r from-neutral-800/30 to-neutral-700/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-neutral-600/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 sm:justify-between">
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                  Want to connect?
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  Follow our work on GitHub or reach out to any team member
                </p>
              </div>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition-colors text-xs sm:text-sm w-full sm:w-auto flex-shrink-0"
              >
                <ExternalLink size={14} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
