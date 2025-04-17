import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a computer and network engineer specialized in MIAGE (Computer Methods Applied to Business Management). Passionate about software development and new technologies, I have worked on several projects using Spring Boot, React, Angular, and Machine Learning. I also have solid skills in project management, particularly in project study, analysis, and UML-based design. I apply structured and scalable approaches to build efficient solutions. Constantly learning and improving, I enjoy tackling challenges and delivering high-quality digital products. I am currently seeking a new opportunity to grow professionally and contribute to meaningful projects.`;

export const ABOUT_TEXT = `I am a computer and network engineer (MIAGE) graduate from EMSI, with diversified expertise in web development, project management, and data science. I have carried out several academic and professional projects, implementing innovative and efficient solutions.`;

export const EXPERIENCES = [
  {
    year: "03/2024 - 09/2024",
    role: "Full Stack Web Developer Intern",
    company: "Munisys - Ville Verte Bouskoura",
    description: [
      "Designed and developed a full-stack module for managing IT equipment requests with multi-level approval workflow",
      "Implemented role-based access control (RBAC) for different departments and approval levels",
      "Created interactive dashboards for request tracking and equipment status monitoring",
      "Optimized database queries reducing response time by 30%"
    ],
    technologies: ["Spring Boot", "React.js", "AntDesign", "SQL Server", "JWT", "REST API"],
  },
  {
    year: "07/2023 - 09/2023",
    role: "Full Stack Web Developer Intern",
    company: "Eurafric Information - Ville Verte Bouskoura",
    description: [
      "Developed a complete inventory management system with barcode support",
      "Implemented CRUD operations for product and inventory management",
      "Created reporting module with export to Excel functionality",
      "Integrated with existing financial systems for automated stock valuation"
    ],
    technologies: ["Spring Framework", "Angular", "Bootstrap", "MySQL", "REST API"],
  },
  {
    year: "12/2023 - 02/2024",
    role: "Academic Project - Team Lead",
    company: "EMSI Casablanca",
    description: [
      "Led a team of 4 developers to create a DevOps maturity assessment platform",
      "Designed dynamic questionnaire engine with conditional logic",
      "Implemented scoring algorithms and benchmarking features",
      "Created comprehensive reports with actionable recommendations"
    ],
    technologies: ["Spring Boot", "Angular", "Bootstrap", "MySQL", "Chart.js"],
  },
  {
    year: "06/2022 - 09/2022",
    role: "Academic Project - Backend Developer",
    company: "EMSI Casablanca",
    description: [
      "Developed Windows desktop application for IT asset management",
      "Designed relational database schema for equipment tracking",
      "Implemented depreciation calculations for financial reporting",
      "Created barcode generation module for asset identification"
    ],
    technologies: ["C#", "ADO.NET", "SQL Server", "Windows Forms"],
  },
];

export const PROJECTS = [
  {
    title: "IT Equipment Management System",
    image: project1,
    description: [
      "Full-stack module for managing IT equipment requests with approval workflow",
      "Reduced processing time by 40% through automation",
      "Role-based access control for different organizational levels",
      "Interactive dashboards for real-time tracking"
    ],
    technologies: ["Spring Boot", "React.js", "AntDesign", "SQL Server", "JWT"],
  },
  {
    title: "DevOps Maturity Assessment",
    image: project2,
    description: [
      "Web application for evaluating DevOps practices maturity level",
      "Dynamic questionnaire with conditional branching",
      "Scoring algorithms across 5 capability dimensions",
      "Benchmarking against industry standards"
    ],
    technologies: ["Spring", "Angular", "Bootstrap", "MySQL", "Chart.js"],
  },
  {
    title: "Portfolio",
    image: project3,
    description: [
      "Interactive modern portfolio showcasing projects and skills",
      "Responsive design for all device sizes",
      "Animated elements for enhanced user experience",
      "Clean and professional layout"
    ],
    technologies: ["React.js", "Tailwind CSS", "Motion", "Framer Motion"],
  },
  {
    title: "Insect Detection App",
    image: project4,
    description: [
      "CNN-based application for insect classification with 95% accuracy",
      "Flutter mobile interface for easy field use",
      "Image preprocessing pipeline for better detection",
      "Support for 15+ common insect species"
    ],
    technologies: ["Flutter", "Python", "TensorFlow", "CNN"],
  },
];

export const CERTIFICATIONS = [
  {
    name: "Software Engineering: Modeling Software Systems using UML",
    issuer: "The Hong Kong University of Science and Technology",
    year: "2023"
  },
  {
    name: "Java FullStack Developer",
    issuer: "Board Infinity",
    year: "2023"
  },
  {
    name: "Building Scalable Java Microservices",
    issuer: "Google Cloud",
    year: "2023"
  },
  {
    name: "Advanced React",
    issuer: "Meta",
    year: "2023"
  },
  {
    name: "DevOps, Cloud, and Agile Foundations",
    issuer: "IBM",
    year: "2023"
  }
];

export const CONTACT = {
  address: "Casablanca, Morocco",
  phoneNo: "+212 696105562",
  email: "imad.jennah.pro@gmail.com",
  linkedin: "https://www.linkedin.com/in/imad-jennah/",
  github: "https://github.com/JENNAH-IMAD",
  languages: [
    { name: "French", level: "Advanced" },
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Intermediate" }
  ]
};