// All CV content lives here. Edit this file to update the whole website.
export const profile = {
  name: "Aleeza Qadeer",
  role: "QA / Software Tester",
  location: "Islamabad, Pakistan",
  phone: "+92 309 9749934",
  phoneHref: "tel:+923099749934",
  email: "aleezaqadeer8@gmail.com",
  linkedin: "https://www.linkedin.com/in/aleeza-qadeer-4184043bb/",
  summary:
    "Detail-oriented QA professional with hands-on internship experience in manual software testing, test case design, and bug reporting. Skilled in Agile methodologies, test documentation, and basic test automation using Selenium and Python. Eager to bring strong analytical skills and a quality-first mindset to an entry-level QA / Software Tester role.",
  typed: ["Manual Testing", "Test Case Design", "Bug Reporting", "Agile & Scrum"],
};

export const competencies = [
  {
    title: "Software Testing & QA",
    icon: "bug",
    items: [
      "Manual Testing",
      "Test Case Design",
      "Bug Reporting",
      "Test Plan Creation",
      "Functional Testing",
      "Usability Testing",
    ],
  },
  {
    title: "Project & Process",
    icon: "process",
    items: [
      "Agile & Scrum",
      "Requirement Analysis",
      "Risk Management",
      "SDLC & STLC",
      "Documentation",
    ],
  },
  {
    title: "Technical Writing",
    icon: "write",
    items: ["Test Cases", "SRS Documentation", "User Manuals", "Reports"],
  },
];

export const experience = [
  {
    role: "Software Quality Assurance Intern",
    company: "MRA Developers",
    location: "G-11/3, Islamabad, Pakistan",
    period: "May 2026 – August 2026",
    points: [
      "Performed manual testing on web applications, identifying and documenting functional and usability issues.",
      "Wrote clear, structured test cases and bug reports to support the development team's fixes.",
      "Collaborated with developers in an Agile environment to review requirements and verify fixes.",
    ],
  },
];

export const project = {
  title: "Neuroticism Detection in Tweets",
  type: "Final Year Project",
  institution: "COMSATS University Islamabad, Abbottabad, Pakistan",
  period: "December 2024 – February 2025",
  points: [
    "Managed the complete project lifecycle following Software Engineering best practices.",
    "Tested the application across multiple browsers and devices to catch issues before delivery.",
    "Prepared complete project documentation covering all phases of the development lifecycle.",
  ],
};

export const education = {
  degree: "Bachelor's Degree, Software Engineering",
  institution: "COMSATS University Islamabad, Abbottabad, Pakistan",
  period: "2021 – 2025",
  coursework: [
    "Web Technologies",
    "Object-Oriented Software Engineering",
    "Design Patterns",
    "Data Structures & Algorithm Analysis",
    "Human-Computer Interaction (HCI)",
    "Database Systems",
    "Mobile Application Development",
    "Requirement Engineering",
  ],
};

export const technicalSkills = [
  { group: "Testing Tools", items: [
    { name: "Selenium WebDriver", level: "Basic", value: 45 },
    { name: "Postman", level: "Hands-on", value: 70 },
    { name: "Newman", level: "Hands-on", value: 60 },
  ] },
  { group: "Programming", items: [
    { name: "Python", level: "Basic", value: 45 },
    { name: "Automated Test Scripts", level: "Basic", value: 45 },
  ] },
  { group: "Other Tools", items: [
    { name: "Jira", level: "Hands-on", value: 70 },
    { name: "GitHub", level: "Hands-on", value: 70 },
  ] },
];

export const softSkills = [
  { title: "Problem Solving", desc: "Strong analytical mindset for identifying and resolving issues.", icon: "puzzle" },
  { title: "Attention to Detail", desc: "Ensures high-quality testing and documentation.", icon: "eye" },
  { title: "Time Management", desc: "Efficiently handles multiple tasks and deadlines.", icon: "clock" },
  { title: "Critical Thinking", desc: "Assesses risks, debugs, and improves performance.", icon: "brain" },
  { title: "Team Collaboration", desc: "Works effectively in Agile and cross-functional teams.", icon: "users" },
];

export const languages = ["English", "Urdu"];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Project" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];
