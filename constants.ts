import { ExperienceItem, ProjectItem, SkillItem, AwardItem, CertificationItem } from './src/constants/types';

export const RESUME_SUMMARY = `
Abhishek Malviya is an Electrical Maintenance Engineer at HEG Limited. 
He has a B.Tech in Electrical Engineering from Samrat Ashok Technological Institute (2021-2025) with a CGPA of 7.2.
He specializes in PLC, SCADA, Industrial Maintenance, Embedded Systems, and IoT.
He has interned at Emertxe Information Technologies (Embedded & IoT) and SATI Vidisha (PCB Design).
He has built projects like an IoT Smart Home Automation System, Power Factor Corrector, and Gas Leakage Detector.
`;

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    role: "Electrical Maintenance Engineer",
    company: "HEG Limited, Mandideep",
    period: "JAN 2025 - PRESENT",
    description: "Preventive & predictive maintenance to minimize plant downtime.",
    points: [
      "Troubleshooting electrical faults in machinery & power systems.",
      "Working with PLC, SCADA, Motors, Transformers & Switchgear.",
      "Performing Root Cause Analysis (RCA) for fault prevention."
    ],
    icon: "fas fa-bolt",
    isCurrent: true
  },
  {
    id: 2,
    role: "Campus Ambassador",
    company: "Emertxe Information Technologies",
    period: "JUNE 2024 - AUG 2024",
    description: "Selected for CAP-24-004 cohort. Promoted technical workshops and increased student engagement with digital marketing initiatives.",
    icon: "fas fa-bullhorn"
  },
  {
    id: 3,
    role: "Embedded Systems Intern",
    company: "Emertxe Information Technologies",
    period: "FEB 2024 - APRIL 2024",
    description: "Hands-on SDLC based project building. Developed washing machine automation using Embedded C and MPLAB X IDE.",
    icon: "fas fa-microchip"
  },
  {
    id: 4,
    role: "PCB Design & Fabrication Intern",
    company: "SATI Vidisha",
    period: "MAY 2023 (2 Weeks)",
    description: "Completed intensive training on circuit design, PCB layout, and fabrication processes.",
    icon: "fas fa-memory"
  },
  {
    id: 5,
    role: "IoT Intern",
    company: "Emertxe Information Technologies",
    period: "MAR 2023 - MAY 2023",
    description: "Gained exposure to foundational programming in C and microcontroller integration for IoT applications.",
    icon: "fas fa-wifi"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "IoT-Based Smart Home Automation",
    description: "Designed and simulated a complete IoT solution using ESP32 and Blynk. Automates climate control, lighting, and water management.",
    tags: ["ESP32", "Blynk IoT", "C++", "DHT22"],
    category: "IoT",
    highlight: true,
    icon: "fas fa-home",
    links: [
        { url: "https://github.com/malviyabhishek/emertxe---iot-based-home-automation-blynk-iot-", type: "github", label: "Repo" },
        { url: "https://youtu.be/T7p4jgFSWqU", type: "youtube", label: "Demo" }
    ]
  },
  {
    id: 5,
    title: "Intelligent Climate Control",
    description: "Advanced climate automation logic using ESP32, integrating temperature sensing and actuation systems.",
    tags: ["ESP32", "IoT", "Automation"],
    category: "IoT",
    icon: "fas fa-temperature-high",
    links: [
        { url: "https://github.com/malviyabhishek/smart-home-automation-useingesp32", type: "github", label: "Repo" }
    ]
  },
  {
    id: 4,
    title: "Machine Simulation (Washing & Oven)",
    description: "Software-based simulation of a Washing Machine and Microwave Oven using PICSimLab and MPLAB X IDE.",
    tags: ["Embedded C", "Simulation", "MPLAB X"],
    category: "Simulation",
    icon: "fas fa-cog",
    links: [
        { url: "https://github.com/malviyabhishek/washing-machine-simulation-", type: "github", label: "Washing Machine" },
        { url: "https://github.com/malviyabhishek/oven-simulations-", type: "github", label: "Microwave Oven" },
        { url: "https://youtu.be/LC40XEzVmDM", type: "youtube", label: "Simulation Demo" }
    ]
  },
  {
    id: 2,
    title: "Automatic Power Factor Corrector",
    description: "Built using Arduino to automatically monitor and correct the power factor of an electrical load, improving energy efficiency.",
    tags: ["Arduino", "Power Systems", "Electronics"],
    category: "Electrical",
    icon: "fas fa-battery-full"
  },
  {
    id: 3,
    title: "IoT Gas Leakage Detector",
    description: "GSM and IoT based LPG gas leakage detector and alarm system for industrial and home safety.",
    tags: ["IoT", "GSM Module", "Sensors"],
    category: "IoT",
    icon: "fas fa-exclamation-triangle"
  }
];

export const SKILLS: SkillItem[] = [
  { name: "PLC & SCADA", level: 85 },
  { name: "Circuit Analysis", level: 90 },
  { name: "Industrial Maintenance", level: 95 },
  { name: "Root Cause Analysis", level: 80 },
  { name: "Embedded C", level: 75 },
  { name: "IoT (ESP32/Blynk)", level: 85 }
];

export const AWARDS: AwardItem[] = [
  {
    title: "Satyarth 23",
    rank: "2nd Position",
    description: "Energy Efficient Project competition at Techfest-23.",
    icon: "fas fa-trophy",
    colorClass: "yellow"
  },
  {
    title: "Technovision 2024",
    rank: "3rd Position",
    description: "Paper Presentation (Electrical Engineering Dept).",
    icon: "fas fa-award",
    colorClass: "blue"
  },
  {
    title: "BIS Standards Club",
    rank: "Winner",
    description: "Standard Writing Competition held by Electrical Engineering Dept.",
    icon: "fas fa-star",
    colorClass: "purple"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
    { title: "Power Gen & Transmission", issuer: "NPTI", date: "Jan 2024", icon: "fas fa-bolt", colorClass: "text-elec-blue" },
    { title: "Career Edge - Young Pro", issuer: "TCS iON", date: "2023 - 2024", icon: "fas fa-briefcase", colorClass: "text-indigo-600" },
    { title: "Robotics Workshop", issuer: "SATI Vidisha", date: "March 2023", icon: "fas fa-robot", colorClass: "text-red-600" },
    { title: "IoT & Embedded Systems", issuer: "CRISP Bhopal", date: "May 2023", icon: "fas fa-microchip", colorClass: "text-teal-600" },
];