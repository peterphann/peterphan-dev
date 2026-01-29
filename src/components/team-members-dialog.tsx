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
        "flex items-center justify-center w-9 h-9 rounded-full border border-neutral-600 bg-neutral-800/50 hover:bg-neutral-700/50 transition-all duration-200 group",
        link.color,
      )}
      title={link.platform}
    >
      <IconComponent size={16} />
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
        "relative cursor-pointer rounded-xl border transition-all duration-300 hover:scale-105",
        isSelected
          ? "border-blue-500/50 bg-blue-950/30 shadow-lg shadow-blue-500/10"
          : "border-neutral-700/50 bg-neutral-800/30 hover:border-neutral-600/50 hover:bg-neutral-800/50",
      )}
    >
      <div className="p-4">
        <div className="relative w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-2 border-neutral-600">
          <Image
            src={member.headshot}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-white font-semibold text-sm text-center mb-1">
          {member.name}
        </h3>
        <p className="text-neutral-400 text-xs text-center">{member.role}</p>
      </div>
      {isSelected && (
        <div className="absolute inset-0 rounded-xl border-2 border-blue-500/30 pointer-events-none" />
      )}
    </div>
  );
}

interface TeamMemberDetailsProps {
  member: TeamMember;
}

function TeamMemberDetails({ member }: TeamMemberDetailsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-1">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <div className="relative w-32 h-32 mx-auto md:mx-0 rounded-2xl overflow-hidden border border-neutral-600 shadow-lg">
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
        <div className="text-center md:text-left">
          <h2
            className={cn(
              "text-2xl font-bold text-white mb-1",
              inter.className,
            )}
          >
            {member.name}
          </h2>
          <p className="text-blue-400 font-medium mb-4">{member.role}</p>

          {/* Social Links */}
          <div className="flex gap-2 justify-center md:justify-start">
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
      <DialogContent className="w-[150vw] overflow-y-auto bg-neutral-900/95 backdrop-blur-xl border-neutral-700">
        <VisuallyHidden>
          <DialogTitle>Meet the {projectName} Team</DialogTitle>
        </VisuallyHidden>
        <div className="space-y-6">
          {/* Team Member Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                isSelected={selectedMember.id === member.id}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>

          <div className="bg-neutral-800/20 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700/50">
            <TeamMemberDetails member={selectedMember} />
          </div>

          <div className="bg-gradient-to-r from-neutral-800/30 to-neutral-700/30 rounded-xl p-4 border border-neutral-600/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold mb-1">
                  Want to connect?
                </h3>
                <p className="text-neutral-400 text-sm">
                  Follow our work on GitHub or reach out to any team member
                </p>
              </div>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition-colors text-sm"
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
