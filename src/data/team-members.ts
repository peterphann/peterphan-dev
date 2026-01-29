import { Github, Globe, Linkedin, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface SocialLink {
  platform: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  color: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  headshot: string;
  socialLinks: SocialLink[];
}

const peterPhan: TeamMember = {
  id: "peter-phan",
  name: "Peter Phan",
  role: "Lead Developer",
  headshot: "/images/headshot.jpg",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/peterlphan",
      icon: Linkedin,
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      platform: "GitHub",
      url: "https://github.com/peterphann",
      icon: Github,
      color: "text-gray-400 hover:text-white",
    },
    {
      platform: "Website",
      url: "https://peterphan.dev",
      icon: Globe,
      color: "text-green-400 hover:text-green-300",
    },
  ],
};
const sophiaPhu: TeamMember = {
  id: "sophia-phu",
  name: "Sophia Phu",
  role: "Frontend Developer",
  headshot: "/images/headshots/sophia-phu.png",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/sophiaphu/",
      icon: Linkedin,
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      platform: "GitHub",
      url: "https://github.com/sophiaaphu",
      icon: Github,
      color: "text-gray-400 hover:text-white",
    },
    {
      platform: "Website",
      url: "https://www.sophiaphu.com/",
      icon: Globe,
      color: "text-green-400 hover:text-green-300",
    },
  ],
};
const ericLiu: TeamMember = {
  id: "eric-liu",
  name: "Eric Liu",
  role: "Developer",
  headshot: "/images/headshots/eric-liu.jpg",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/eric-cb-liu/",
      icon: Linkedin,
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      platform: "GitHub",
      url: "https://github.com/ericliu-12",
      icon: Github,
      color: "text-gray-400 hover:text-white",
    },
  ],
};
const ashleyZhang: TeamMember = {
  id: "ashley-zhang",
  name: "Ashley Zhang",
  role: "Developer",
  headshot: "/images/headshots/ashley-zhang.jpg",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/ashley-j-zhang/",
      icon: Linkedin,
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      platform: "GitHub",
      url: "https://github.com/ashlxyzhang",
      icon: Github,
      color: "text-gray-400 hover:text-white",
    },
    {
      platform: "Website",
      url: "https://www.ashs.world/",
      icon: Globe,
      color: "text-green-400 hover:text-green-300",
    },
  ],
};
const leonNguyen: TeamMember = {
  id: "leon-nguyen",
  name: "Leon Nguyen",
  role: "Developer",
  headshot: "/images/headshots/leon-nguyen.jpg",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/leonlnguyen/",
      icon: Linkedin,
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      platform: "GitHub",
      url: "https://github.com/leon934",
      icon: Github,
      color: "text-gray-400 hover:text-white",
    },
  ],
};

const michaelTran: TeamMember = {
  id: "michael-tran",
  name: "Michael Tran",
  role: "Developer",
  headshot: "/images/headshots/michael-tran.jpg",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/michtra/",
      icon: Linkedin,
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      platform: "Website",
      url: "https://ttrraann.com/",
      icon: Globe,
      color: "text-green-400 hover:text-green-300",
    },
  ],
};

const aaronKim: TeamMember = {
  id: "aaron-kim",
  name: "Aaron Kim",
  role: "Developer",
  headshot: "/images/headshots/aaron-kim.jpg",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/aarkim/",
      icon: Linkedin,
      color: "text-blue-400 hover:text-blue-300",
    },
  ],
};

export const aggieSeekTeam: TeamMember[] = [
  { ...peterPhan, role: "Founder" },
  { ...sophiaPhu, role: "Full Stack Developer" },
  {
    id: "daniel-zhang",
    name: "Daniel Zhang",
    role: "Frontend Developer",
    headshot: "/images/headshots/daniel-zhang.jpg",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/zhangdaniel62/",
        icon: Linkedin,
        color: "text-blue-400 hover:text-blue-300",
      },
      {
        platform: "GitHub",
        url: "https://github.com/zhangdaniel62",
        icon: Github,
        color: "text-gray-400 hover:text-white",
      },
    ],
  },

  {
    id: "hazem-salem",
    name: "Hazem Salem",
    role: "Frontend Developer",
    headshot: "/images/headshots/hazem-salem.jpg",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/hhasalem/",
        icon: Linkedin,
        color: "text-blue-400 hover:text-blue-300",
      },
      {
        platform: "GitHub",
        url: "https://github.com/hazcazdaz",
        icon: Github,
        color: "text-gray-400 hover:text-white",
      },
      {
        platform: "Website",
        url: "https://hazemwebsite.vercel.app/",
        icon: Globe,
        color: "text-green-400 hover:text-green-300",
      },
    ],
  },
];

export const flockTeam: TeamMember[] = [
  { ...peterPhan, role: "Developer" },
  { ...ericLiu, role: "Developer" },
  { ...sophiaPhu, role: "Developer" },
  { ...ashleyZhang, role: "Developer" },
];

export const arcadiaTeam: TeamMember[] = [
  { ...peterPhan, role: "Developer" },
  { ...leonNguyen, role: "Developer" },
  { ...ericLiu, role: "Developer" },
  { ...ashleyZhang, role: "Developer" },
];

export const zephyrTeam: TeamMember[] = [
  { ...peterPhan, role: "Developer" },
  { ...aaronKim, role: "Developer" },
  { ...leonNguyen, role: "Developer" },
  { ...michaelTran, role: "Developer" },
];
