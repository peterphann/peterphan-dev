import { Technology } from "@/types/technology";

const python = {
  name: "Python",
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
};
const java = {
  name: "Java",
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
};
const typescript = {
  name: "TypeScript",
  icon: "devicon-typescript-plain colored",
};
const javascript = {
  name: "JavaScript",
  icon: "devicon-javascript-plain colored",
};
const html = {
  name: "HTML",
  icon: "devicon-html5-plain colored",
};
const css = {
  name: "CSS",
  icon: "devicon-css3-plain colored",
};
const cplusplus = {
  name: "C++",
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
};
const sql = {
  name: "SQL",
  icon: "devicon-sqldeveloper-plain",
};
const bash = {
  name: "Bash",
  icon: "devicon-bash-plain colored",
};

const react = {
  name: "React",
  icon: "devicon-react-plain colored",
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
};
const vue = {
  name: "Vue.js",
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
};
const next = {
  name: "Next.js",
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
};
const tailwind = {
  name: "Tailwind CSS",
  icon: "devicon-tailwindcss-plain colored",
  src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
};
const figma = {
  name: "Figma",
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
};
const node = {
  name: "Node.js",
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
};
const spring = {
  name: "Spring Boot",
  icon: "devicon-spring-plain colored",
};
const flask = {
  name: "Flask",
  icon: "devicon-flask-original",
};
const postgresql = {
  name: "PostgreSQL",
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
};

const git = {
  name: "Git",
  icon: "devicon-git-plain colored",
};
const docker = {
  name: "Docker",
  icon: "devicon-docker-plain-wordmark colored",
  src: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/docker/docker-plain-wordmark.svg",
};
const aws = {
  name: "AWS",
  icon: "devicon-amazonwebservices-plain-wordmark colored",
};
const terraform = {
  name: "Terraform",
  icon: "devicon-terraform-plain colored",
};
const nginx = {
  name: "Nginx",
  icon: "devicon-nginx-original colored",
};
const openai = {
  name: "OpenAI API",
  src: "https://img.icons8.com/androidL/512/FFFFFF/chatgpt.png",
};
const googleMaps = {
  name: "Google Maps API",
  src: "https://static.wikia.nocookie.net/google/images/1/19/Google_Maps_Icon.png/revision/latest?cb=20201022161440",
};
const threejs = {
  name: "Three.js",
  icon: "devicon-threejs-original",
};

const mediapipe = {
  name: "MediaPipe",
  src: "https://viz.mediapipe.dev/logo.png",
};

const supabase = {
  name: "Supabase",
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
};

export const languages: Technology[] = [
  python,
  java,
  typescript,
  javascript,
  html,
  css,
  cplusplus,
  sql,
  bash,
];
export const frontend: Technology[] = [react, vue, next, tailwind, figma];
export const backend: Technology[] = [node, spring, flask, postgresql];
export const devops: Technology[] = [git, docker, aws, terraform, nginx];

export {
  python,
  java,
  typescript,
  javascript,
  html,
  css,
  cplusplus,
  sql,
  bash,
  react,
  vue,
  next,
  tailwind,
  figma,
  node,
  spring,
  flask,
  postgresql,
  git,
  docker,
  aws,
  terraform,
  nginx,
  openai,
  googleMaps,
  threejs,
  mediapipe,
  supabase,
};
