import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import {
  ArrowIcon,
  GitHubIcon,
  Resume,
  LinkedIN,
  Email,
  PhoneIcon,
} from "../components/icons";

const projects = [
  {
    id: 1,
    title: "Music & Happiness",
    description:
      "Tracks Spotify user trends by country and links them to the happiness index, education levels, and GDP of the country. The data gives indications of the correlation between artist, genre, and socioeconomic standards and indicators across the world, over time.",
    imageUrl: "/music.jpg",
    githubLink: "https://github.com/AntonioKaram/MusicData",
    websiteLink: "https://music-and-happiness.vercel.app/",
  },
  {
    id: 2,
    title: "Linear Shift Feedback Register Chip",
    description:
      "Proposed, designed, tested, and synthesized an 8-bit LFSR chip in Verilog for the Google-Sponsored eFabless digital GF180nm shuttle, passing the Multi-Project Wafer and Tapeout tests.",
    imageUrl: "/lfsr.png",
    githubLink: "https://github.com/AntonioKaram/Final-Project-LFSR",
    websiteLink: "https://repositories.efabless.com/akaram/nd-cool-ranch",
  },
  {
    id: 3,
    title: "Multithreaded HTTP Client/Server",
    description:
      "Designed and tested a client that makes parallel HTTP requests and a Pub/Sub Server with channels and conversations in Python, Bash, and C/C++ using networking, system calls, and sockets.",
    imageUrl: "/cliserv.png",
    githubLink: "",
    websiteLink: "",
  },
  {
    id: 4,
    title: "Operating Systems Fundamentals",
    description:
      "Designed and tested a Process Scheduler (FIFO, Round Robin), Heap Management (malloc, calloc), and File System (Unix) in C/C++ using system calls, paging, and multithreading.",
    imageUrl: "/fs.gif",
    githubLink: "",
    websiteLink: "",
  },
  {
    id: 5,
    title: "Windows Freecell Solver",
    description:
      "Reverse-engineered Windows XP Freecell using IDA Pro and OllyDbg for dynamic and static analysis to locate card state memory. Implemented BFS, DFS, and A* search algorithms for optimal win strategies and built a Python GUI to guide users.",
    imageUrl: "/freecell.png",
    githubLink: "https://github.com/AntonioKaram/Freecell-AI-Solver",
    websiteLink: "",
  },
];

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#121212] font-mono"
      )}
    >
      <body className="antialiased px-10 py-20">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-auto pl-20 min-w-0 mt-6 md:mt-0 flex flex-col">
            {children}
            <AboutSection />
            <ProjectsSection projects={projects} />
            <WorkExperienceSection />
          </main>
        </div>
      </body>
    </html>
  );
}

function AboutSection() {
  return (
    <section id="about" className="max-w-screen-lg">
      <div className="hidden sm:block mt-12" />
      <h1 className="font-bold text-2xl">About Me</h1>
      <hr className="my-4" />
      <div className="text-sm prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200 max-w-full">
        <p>
          I am <strong>Varun Taneja</strong>, a Senior at the <strong>University of Notre Dame</strong> majoring in 
          <strong> Computer Engineering</strong> with a concentration in <strong>cybersecurity</strong> and <strong>AI</strong>.
        </p>
        <p>
          My diverse background, growing up in Singapore, has equipped me with the valuable skill of bridging cultural divides 
          and connecting with individuals from various backgrounds.
        </p>
        <p>
          At Notre Dame, I am an active member of the club golf team, where I play competitive golf and proudly represent our university 
          at both regional and national levels. Golf has instilled in me the ability to confront and overcome adversity, teaching me to 
          persevere through mentally challenging situations – a skill I consider invaluable in fast-paced environments.
        </p>
        <p>
          My two years of mandatory conscription in Singapore&apos;s armed forces further honed my teamwork and discipline, attributes I carried with 
          me when I joined the club boxing team at Notre Dame. These qualities, along with my technical knowledge in software engineering, gained 
          through coursework and hands-on experience at <strong>Vena Energy</strong> in <strong>Cloud Computing</strong>, <strong>Data Engineering</strong> at <strong>Partior</strong>
          , and <strong>AI research</strong> at <strong>Notre Dame</strong>, are integral to my professional development.
        </p>
        <p>
          I expect to graduate in May 2025, and I am currently interested in full-time positions. I am excited to contribute my unique background, 
          technical expertise, and dedication to teamwork and discipline to your company&apos;s team.
        </p>
        <p>
          Here is my<a href="/Varun_Taneja_Resume.pdf" download>
            <button className="px-2 py-2 text-green-600 rounded"><strong>Resume</strong></button>
          </a>
        </p>
      </div>
    </section>
  );
}






function ProjectsSection({ projects }: { projects: typeof projects }) {
  return (
    <section id="projects">
      <div className="hidden sm:block mt-12" />
      <h1 className="font-bold text-2xl font-serif">Projects</h1>
      <hr className="my-4" />
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project) =>
          project.id % 2 === 0 ? (
            <ProjectCard key={project.id} project={project} />
          ) : (
            <ProjectCardReversed key={project.id} project={project} />
          )
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div
      key={project.id}
      className="bg-neutral-100 dark:bg-[#121212] h-auto flex flex-col sm:flex-row rounded-lg shadow-sm hover:shadow-xl p-6 w-full border border-neutral-200 dark:border-neutral-800 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 transition-all overflow-hidden"
    >
      <div className="flex-1 hidden sm:block">
        <div className="rounded-lg">
          <img
            src={project.imageUrl}
            alt={project.title}
            className={project.id < 4 ? "w-full h-full" : "h-72 rounded-lg"}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col h-full text-center p-3">
          <h3 className="text-xl font-bold mb-2 text-green-600">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-100 mb-4">
            {project.description}
          </p>
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
}

function ProjectCardReversed({ project }: { project: typeof projects[0] }) {
  return (
    <div
      key={project.id}
      className="bg-white h-auto flex flex-col sm:flex-row dark:bg-[#121212] rounded-lg shadow-sm hover:shadow-xl p-6 w-full border border-neutral-200 dark:border-neutral-800 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 transition-all justify-between overflow-hidden"
    >
      <div className="flex-1">
        <div className="flex flex-col text-center p-3">
          <h3 className="text-xl font-mono font-bold mb-2 text-green-600">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-100 mb-4">
            {project.description}
          </p>
          <ProjectLinks project={project} />
        </div>
      </div>
      <div className="flex-1 hidden sm:block">
        <div className="overflow-hidden rounded-lg">
          <img
            src={project.imageUrl}
            alt={project.title}
            className={project.id < 4 ? "w-full h-full" : "object-none h-72 rounded-lg"}
          />
        </div>
      </div>
    </div>
  );
}

function ProjectLinks({ project }: { project: typeof projects[0] }) {
  return (
    <div className="flex space-x-2 justify-center">
      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      )}
      {project.websiteLink && (
        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 5 50 50"
            width="30"
            height="30"
            className="dark:fill-neutral-100"
          >
            <path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z" />
          </svg>
        </a>
      )}
    </div>
  );
}

function WorkExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: "Yes-Lab at Notre Dame",
      role: "Undergraduate Research Assistant",
      link: "http://yes-lab.org/",
      logo: "/ND_Logo.png",
      tasks: [
        "Worked with Professor Ye's lab on Multi-objective Personalized Health-aware Food Recommendation System with LLM-enhanced Interpretation project.",
        "Implemented predetermined baseline models such as NCGF and HAFR using Pytorch and graph learning in Python.",
        "Paper was submitted to the KDD 2025 ADS Track for the August 2024 Cycle.",
      ],
    },
    {
      id: 2,
      company: "Partior",
      role: "Digital Intelligence Team Intern",
      link: "https://www.partior.com/",
      logo: "/Partior_logo.png",
      tasks: [
        "Completed Google Cloud Skills Boost - Introduction To Generative AI, as training for the use of Vertex AI for enterprise.",
        "Generated realistic mock billing data with natural growth and ingested it into GCS for dashboarding using Looker Studio.",
        "Conducted a comprehensive analysis of various prompting techniques, including Zero-shot, prompt-chaining, and Retrieval Augmented Generation, to optimize business data retrieval methods.",
        "Developed Python program to web scrape business data from PDFs using Google Gemini API and Google Vertex AI.",
      ],
    },
    {
      id: 3,
      company: "Alcor Solutions Inc.",
      role: "AWS Cloud/Development Group Intern",
      link: "https://www.alcortech.com/",
      logo: "/Alcor_logo.png",
      tasks: [
        "Reviewed AWS cloud application design documentation to ensure team was prepared for client meetings.",
        "Responsible for writing coding standards in Python, Java, and Angular to guide the development team.",
        "Identified and clarified any areas of confusion in both programming and design documentation.",
      ],
    },
    {
      id: 4,
      company: "Vena Energy",
      role: "Data Analytics and Programming Intern",
      link: "https://www.venaenergy.com/",
      logo: "Vena_logo.png",
      tasks: [
        "Worked on code migration from NodeJs to Python for Wind and Solar power plant SCADA Data.",
        "Created and implemented real-time Python program to update data on Google Firebase Server every minute.",
        "Wrote Python script to store long-term BigQuery data on Google Cloud Platform.",
      ],
    },
    {
      id: 5,
      company: "Notre Dame CSE Department",
      role: "Logic Design Teaching Assistant",
      link: "https://cse.nd.edu/",
      logo: "/ND_Logo.png",
      tasks: [
        "Helped students understand boolean algebra, assembly language, Logisim, and Verilog concepts during office hours and studio sessions.",
        "Assisted Dr. Aaron Dingler with grading homework assignments.",
      ],
    },
    {
      id: 6,
      company: "University of Notre Dame Summer Programs",
      role: "Introduction to Engineering Camp Counselor",
      link: "https://iep.nd.edu/",
      logo: "/ND_Logo.png",
      tasks: [
        "Collaborated with Professor Ramzi Bualuan to successfully manage the IEP Summer Camp at the University of Notre Dame.",
        "Led the NXT Mindstorms robot project, teaching high school seniors programming concepts, including functions, loops, and Bluetooth connectivity using the NXC language.",
        "Coordinated extracurricular activities for campers, working closely with fellow counselors to enhance the overall camp experience.",
      ],
    },
    {
      id: 7,
      company: "Singapore Armed Forces",
      role: "Guardroom In Charge and Service Role Security Trooper",
      link: "https://www.mindef.gov.sg/web/portal/mindef/home",
      logo: "SAF_logo.png",
      tasks: [
        "Conducted all guardroom operations in conjunction with Sergeant in charge, promoted to Corporal Rank.",
        "Responsibilities included issuing of SAR21 assault rifles, issuing camp clearance, and schedule planning.",
        "Facilitated vehicle access into the camp and conducted vehicle checks in accordance with military law.",
        "Expedited access for cleared individuals into the camp exchanging identity cards for camp passes.",
      ],
    },
  ];

  return (
    <section id="work_experience">
      <div className="hidden sm:block mt-12" />
      <h1 className="font-bold text-2xl font-serif">Work Experience</h1>
      <hr className="my-4" />
      <div className="space-y-4">
        {experiences.map((experience) => (
          <WorkExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}

function WorkExperienceCard({
  experience,
}: {
  experience: {
    company: string;
    role: string;
    link: string;
    logo: string;
    tasks: string[];
  };
}) {
  return (
    <div className="flex items-start p-4 border border-gray-400 rounded">
      <div className="flex-grow">
        <a
          target="_blank"
          href={experience.link}
          className="font-bold text-lg text-green-600 hover:underline"
        >
          {experience.company}
        </a>
        <h2 className="text-sm">{experience.role}</h2>
        <ul className="text-xs list-disc pl-5">
          {experience.tasks.map((task, index) => (
            <li key={index} className="ml-2">
              {task}
            </li>
          ))}
        </ul>
      </div>
      <img src={experience.logo} alt={`${experience.company} Logo`} className="w-16 h-16" />
    </div>
  );
}
