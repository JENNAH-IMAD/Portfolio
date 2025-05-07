export const PROJECT_IMAGES = {
  project1: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/project-1.jpg",
  project2: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/project-2.jpg",
  project3: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/project-3.jpg",
  project4: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/project-4.jpg",
  project5: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/projects/project-5.jpg",
};
export const InfoHero = {
  logo:  "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/logo.png",
  photo: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/photo.jpg",
  slogo: "https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/slogo.png",
  resume:"https://raw.githubusercontent.com/JENNAH-IMAD/Portfolio/refs/heads/main/src/assets/Resume.pdf",
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

export const HERO_CONTENT = "I am a computer and network engineer specialized in MIAGE (Computer Methods Applied to Business Management). Passionate about software development and new technologies, I have worked on several projects using Spring Boot, React, Angular, and Machine Learning. I also have solid skills in project management, particularly in project study, analysis, and UML-based design. I apply structured and scalable approaches to build efficient solutions. Constantly learning and improving, I enjoy tackling challenges and delivering high-quality digital products. I am currently seeking a new opportunity to grow professionally and contribute to meaningful projects.";

export const ABOUT_TEXT = "I am a computer and network engineer (MIAGE) graduate from EMSI, with diversified expertise in web development, project management, and data science. I have carried out several academic and professional projects, implementing innovative and efficient solutions.";

export const EXPERIENCES = [
  {
    year: "03/2024 - 09/2024",
    role: "Full Stack Web Developer Intern",
    company: "Munisys - Ville Verte Bouskoura",
    description: [
      "As a full stack web developer intern, I was responsible for leading the development of a key internal module, working directly with business stakeholders to gather requirements and transform them into a scalable and maintainable solution. I engaged in cross-functional collaboration to design robust backend architectures using Spring Boot and built responsive, user-friendly interfaces with React.js. Throughout the project, I emphasized security best practices by implementing JWT-based authentication and ensured smooth integration with SQL Server. This experience significantly strengthened my problem-solving abilities and deepened my understanding of enterprise-level software delivery."
    ],
    technologies: ["Spring Boot", "React.js", "AntDesign", "SQL Server", "JWT", "REST API"],
  },
  {
    year: "07/2023 - 09/2023",
    role: "Full Stack Web Developer Intern",
    company: "Eurafric Information - Ville Verte Bouskoura",
    description: [
      "During this internship, I developed a full stack web application for assessing the DevOps and Agile maturity levels of development teams. I was responsible for designing and implementing the application using Spring Boot, Angular, and MySQL, integrating role-based access control with JWT authentication. This project allowed me to tackle challenges such as aligning business requirements with technical solutions, optimizing backend performance, and ensuring a smooth user experience, ultimately enhancing my adaptability and technical versatility."
    ],
    technologies: ["Spring Boot", "Angular", "Bootstrap", "MySQL", "JWT", "REST API"],
  },
  {
    year: "12/2023 - 02/2024",
    role: "Academic Project - Team Lead",
    company: "EMSI Casablanca",
    description: [
      "As the team lead for this academic project, I managed the planning, task distribution, and delivery of a full stack web application for inventory management. The system was developed using Angular, Spring Boot, and MySQL, with JWT-based authentication supporting both admin and regular user roles. I applied agile methodologies, coordinated regular stand-ups, and ensured adherence to deadlines, while also playing a key role in stakeholder communication and project reporting. This experience strengthened my leadership, organizational, and technical skills."
    ],
    technologies: ["Spring Boot", "Angular", "Bootstrap", "MySQL", "JWT", "REST API"],
  },
  {
    year: "06/2022 - 09/2022",
    role: "Academic Project - Backend Developer",
    company: "EMSI Casablanca",
    description: [
      "In this academic initiative, I focused on developing backend components for a desktop application dedicated to IT asset management. I worked on designing an efficient relational database schema and implemented core backend logic using C# and ADO.NET. This experience enhanced my understanding of software architecture for Windows-based environments and taught me how to handle critical aspects like data integrity and system performance in real-world scenarios."
    ],
    technologies: ["C#", "ADO.NET", "SQL Server", "Windows Forms"],
  },
];

export const PROJECTS = [
  {
    title: "IT Equipment Management System",
    image: PROJECT_IMAGES.project1,
    link: "https://github.com/JENNAH-IMAD/Application-web-de-gestion-des-demandes-des-equipements",
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
    image: PROJECT_IMAGES.project2,
    link: "#",
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
    image: PROJECT_IMAGES.project3,
    link: "#",
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
    image: PROJECT_IMAGES.project4,
    link: "https://github.com/JENNAH-IMAD/Insect-detector",
    description: [
      "CNN-based application for insect classification with 95% accuracy",
      "Android mobile interface for easy field use",
      "Image preprocessing pipeline for better detection",
      "Support for 15+ common insect species"
    ],
    technologies: ["Flutter", "Python", "TensorFlow", "CNN"],
  },
  {
    title: "Meeting Planner System Web Application",
    image: PROJECT_IMAGES.project5,
    link: "https://github.com/JENNAH-IMAD/Meeting-Planner",
    description: [
      "Web application for managing and planning team meetings",
      "Room reservation system based on availability",
      "Conflict-free scheduling to optimize team calendars",
      "User-friendly interface for booking and managing meetings"
    ],
    technologies: ["Spring", "React.js", "AntDesign", "MySQL", "JWT"],
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
