import resumeFile from "../assets/Resume.pdf";

export const PROJECT_IMAGES = {
  project1: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/project-1.jpg",
  project2: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/project-2.jpg",
  project3: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/project-3.jpg",
  project4: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/project-4.jpg",
  project5: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/project-5.jpg",
  project6: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/project-6.jpg",
  project7: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/project-7.jpg",
};

export const InfoHero = {
  logo: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/logo.png",
  photo: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/photo.jpg",
  slogo: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/slogo.png",
  resume: resumeFile,
};

export const CERTIFICATIONS_IMAGES = {
  C1: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/C1.jpeg",
  C2: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/C2.jpeg",
  C3: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/C3.jpeg",
  C4: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/C4.jpeg",
  C5: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/C5.jpeg",
  C6: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/C6.jpeg",
  C7: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/C7.jpeg",
  C8: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/C8.jpeg",
  C9: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/C9.jpeg",
};

export const PROJECTS_META = [
  {
    image: PROJECT_IMAGES.project1,
    link: "https://github.com/JENNAH-IMAD/Application-web-de-gestion-des-demandes-des-equipements",
    technologies: ["Spring Boot", "React.js", "AntDesign", "SQL Server", "JWT"],
  },
  {
    image: PROJECT_IMAGES.project2,
    link: "https://github.com/JENNAH-IMAD/Application-web-de-gestion-des-demandes-des-equipements",
    technologies: ["Spring", "Angular", "Bootstrap", "MySQL", "Chart.js"],
  },
  {
    image: PROJECT_IMAGES.project3,
    link: "https://github.com/JENNAH-IMAD/Portfolio",
    previewLink: "https://jennah-imad.github.io/Portfolio/",
    technologies: ["React.js", "Tailwind CSS", "Motion", "Framer Motion"],
  },
  {
    image: PROJECT_IMAGES.project4,
    link: "https://github.com/JENNAH-IMAD/Insect-detector",
    technologies: ["Flutter", "Python", "TensorFlow", "CNN"],
  },
  {
    image: PROJECT_IMAGES.project5,
    link: "https://github.com/JENNAH-IMAD/Meeting-Planner",
    previewLink: "https://meeting-planner-ten.vercel.app/",
    technologies: ["Spring", "React.js", "AntDesign", "MySQL", "JWT"],
  },
  {
    image: PROJECT_IMAGES.project6,
    link: "https://github.com/JENNAH-IMAD/kechmara",
    previewLink: "https://kechmara.vercel.app/",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
  {
    image: PROJECT_IMAGES.project7,
    link: "https://github.com/JENNAH-IMAD/Team-Talk",
    previewLink: "https://teamt.vercel.app",
    technologies: ["ASP.NET Core", "React.js", "Tailwind CSS", "PostgreSQL", "Vercel", "Render"],
  },
];

export const CERTIFICATIONS_META = [
  { src: CERTIFICATIONS_IMAGES.C1, link: "https://www.coursera.org/account/accomplishments/verify/2G5A7W2SX97T" },
  { src: CERTIFICATIONS_IMAGES.C2, link: "https://www.coursera.org/account/accomplishments/specialization/BFYBZ3TVW53L" },
  { src: CERTIFICATIONS_IMAGES.C3, link: "https://www.coursera.org/account/accomplishments/specialization/Q3R6ZGNS69D2" },
  { src: CERTIFICATIONS_IMAGES.C4, link: "https://www.coursera.org/account/accomplishments/verify/V273Y5SWFURZ" },
  { src: CERTIFICATIONS_IMAGES.C5, link: "https://www.coursera.org/account/accomplishments/specialization/WK7NPNM99Z3R" },
  { src: CERTIFICATIONS_IMAGES.C6, link: "https://www.coursera.org/account/accomplishments/verify/SMW3WW3KH9BR" },
  { src: CERTIFICATIONS_IMAGES.C7, link: "https://www.coursera.org/account/accomplishments/verify/PC5WLKE8WWTU" },
  { src: CERTIFICATIONS_IMAGES.C8, link: "https://www.coursera.org/account/accomplishments/verify/N9JWG28TFYAU" },
  { src: CERTIFICATIONS_IMAGES.C9, link: "https://www.coursera.org/account/accomplishments/verify/QQH2N78B9X3U" },
];

export const TIMELINE_STYLES = [
  { color: "bg-green-700", borderColor: "border-green-700", textColor: "text-green-400" },
  { color: "bg-green-700", borderColor: "border-green-700", textColor: "text-green-400" },
  { color: "bg-green-700", borderColor: "border-green-700", textColor: "text-green-400" },
  { color: "bg-blue-600", borderColor: "border-blue-500", textColor: "text-blue-400" },
  { color: "bg-blue-400", borderColor: "border-blue-300", textColor: "text-blue-300" },
  { color: "bg-purple-500", borderColor: "border-purple-400", textColor: "text-purple-400" },
];

export const CONTACT = {
  phoneNo: "+212 696105562",
  email: "imad.jennah.pro@gmail.com",
  linkedin: "https://www.linkedin.com/in/imad-jennah/",
  github: "https://github.com/JENNAH-IMAD",
};

