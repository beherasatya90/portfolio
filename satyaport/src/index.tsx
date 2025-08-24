"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";

// === Editable Profile Data ===
const profile = {
  name: "Satyabrata Behera",
  role: "Full-Stack Developer | QA Tester",
  summary:
    "Full-stack developer with hands-on experience in React, Node.js, and API testing (Postman). Passionate about building scalable UIs, clean backend APIs, and shipping reliable software through testing.",
  photo:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=512&auto=format&fit=crop",
  location: "Mumbai, Maharashtra, India",
  email: "satyabrata9080@gmail.com",
  phone: "+91 9861026946",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    website: "https://your-portfolio.com",
    resume: "/Satyabrata_Behera_Resume.pdf",
  },
  skills: {
    frontend: ["HTML", "CSS", "Bootstrap", "React.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "TypeScript"],
    testing: ["Postman", "Manual QA", "API Testing"],
    tools: ["Git", "MongoDB (basic)", "Agile/Scrum"],
  },
  experience: [
    {
      title: "Associate Junior Web Developer",
      company: "Client Projects",
      location: "Mumbai (Hybrid)",
      start: "Aug 2024",
      end: "Present",
      bullets: [
        "Built responsive frontends with React and Tailwind; improved Core Web Vitals on key pages.",
        "Developed RESTful APIs with Node.js and Express; wrote request/response validators.",
        "Integrated Postman collections for API testing and automated regression checks.",
      ],
      stack: ["React", "Tailwind", "Node.js", "Express", "Postman"],
    },
    {
      title: "Manual QA Tester",
      company: "Client Projects",
      location: "Remote",
      start: "Jan 2023",
      end: "Sep 2023",
      bullets: [
        "Created end-to-end functional test cases covering key user journeys.",
        "Logged and tracked defects; collaborated with developers to reproduce and resolve issues.",
        "Used Postman for API validation and smoke testing across environments.",
      ],
      stack: ["Postman", "Functional Testing", "Regression"],
    },
  ],
  projects: [
    {
      name: "Online Examination System",
      description:
        "Web-based platform for digital exams with question banks, real-time progress, and instructor dashboards.",
      impact:
        "Reduced manual evaluation time and improved exam integrity with role-based access.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      links: { demo: "#", code: "#" },
    },
    {
      name: "E-Commerce (Frontend + APIs)",
      description:
        "Responsive storefront with product browsing, cart, and checkout UX; backend APIs for product and cart ops.",
      impact:
        "Delivered reusable UI components and clean REST endpoints for faster feature development.",
      tech: ["React", "Tailwind", "Node.js", "Express"],
      links: { demo: "#", code: "#" },
    },
  ],
  education: [
    {
      degree: "MCA",
      school: "Biju Patnaik University of Technology, Rourkela",
      period: "2022 – 2024",
      details: "CGPA: 7.70",
    },
    {
      degree: "BCA",
      school: "Utkal University, Bhubaneswar",
      period: "2019 – 2022",
      details: "CGPA: 8.49",
    },
  ],
};
// === End Editable Data ===

const Section = ({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <h2 className="text-2xl font-semibold tracking-tight text-indigo-700">
        {title}
      </h2>
    </div>
    <div className="space-y-4">{children}</div>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full border text-sm leading-none bg-indigo-50 border-indigo-200 text-indigo-700">
    {children}
  </span>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-indigo-100 p-5 shadow-sm bg-white/80 backdrop-blur hover:shadow-md transition">
    {children}
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-100 to-purple-100 text-slate-900">
      {/* Header / Hero */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-indigo-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-indigo-700">
            {profile.name}
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#experience" className="hover:text-indigo-600">
              Experience
            </a>
            <a href="#projects" className="hover:text-indigo-600">
              Projects
            </a>
            <a href="#skills" className="hover:text-indigo-600">
              Skills
            </a>
            <a href="#education" className="hover:text-indigo-600">
              Education
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </nav>
          <a
            href={profile.links.resume}
            className="inline-flex items-center gap-2 text-sm border px-3 py-1.5 rounded-xl hover:shadow-md bg-indigo-50 border-indigo-200 text-indigo-700 transition"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-12" id="home">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[2fr,1fr] gap-6 items-center"
        >
          <Card>
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-800">
                {profile.role}
              </h1>
              <p className="text-slate-700 leading-relaxed">
                {profile.summary}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-600" />{" "}
                  {profile.location}
                </span>
                <a
                  className="inline-flex items-center gap-2 hover:text-indigo-600"
                  href={`mailto:${profile.email}`}
                >
                  <Mail className="w-4 h-4" /> {profile.email}
                </a>
                <a
                  className="inline-flex items-center gap-2 hover:text-indigo-600"
                  href={`tel:${profile.phone}`}
                >
                  <Phone className="w-4 h-4" /> {profile.phone}
                </a>
              </div>
              <div className="flex gap-3 pt-1">
                <a
                  className="rounded-xl border px-3 py-1.5 inline-flex items-center gap-2 hover:shadow bg-indigo-50 border-indigo-200 text-indigo-700 transition"
                  href={profile.links.github}
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  className="rounded-xl border px-3 py-1.5 inline-flex items-center gap-2 hover:shadow bg-indigo-50 border-indigo-200 text-indigo-700 transition"
                  href={profile.links.linkedin}
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  className="rounded-xl border px-3 py-1.5 inline-flex items-center gap-2 hover:shadow bg-indigo-50 border-indigo-200 text-indigo-700 transition"
                  href={profile.links.website}
                >
                  <Globe className="w-4 h-4" /> Website
                </a>
              </div>
            </div>
          </Card>
          <Card>
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full aspect-square object-cover rounded-2xl"
            />
          </Card>
        </motion.div>

        {/* Experience */}
        <Section id="experience" title="Experience" icon={<Briefcase className="w-5 h-5 text-indigo-600" />}>
          <div className="grid md:grid-cols-2 gap-4">
            {profile.experience.map((exp, i) => (
              <Card key={i}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-lg text-indigo-700">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full border bg-indigo-50 border-indigo-200 text-indigo-700 whitespace-nowrap">
                    {exp.start} – {exp.end}
                  </span>
                </div>
                <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.stack.map((t, k) => (
                    <Pill key={k}>{t}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" icon={<Code2 className="w-5 h-5 text-indigo-600" />}>
          <div className="grid md:grid-cols-2 gap-4">
            {profile.projects.map((p, i) => (
              <Card key={i}>
                <h3 className="font-semibold text-lg text-indigo-700">
                  {p.name}
                </h3>
                <p className="text-slate-700 mt-1">{p.description}</p>
                <p className="text-slate-700 mt-1">
                  <span className="font-medium">Impact:</span> {p.impact}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((t, k) => (
                    <Pill key={k}>{t}</Pill>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <a
                    href={p.links.demo}
                    className="inline-flex items-center gap-1 text-sm border px-3 py-1.5 rounded-xl hover:shadow bg-indigo-50 border-indigo-200 text-indigo-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                  <a
                    href={p.links.code}
                    className="inline-flex items-center gap-1 text-sm border px-3 py-1.5 rounded-xl hover:shadow bg-indigo-50 border-indigo-200 text-indigo-700 transition"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <Card>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-medium mb-2 text-indigo-700">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.frontend.map((s, i) => (
                    <Pill key={i}>{s}</Pill>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-indigo-700">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.backend.map((s, i) => (
                    <Pill key={i}>{s}</Pill>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-indigo-700">Testing</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.testing.map((s, i) => (
                    <Pill key={i}>{s}</Pill>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-indigo-700">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.tools.map((s, i) => (
                    <Pill key={i}>{s}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" icon={<GraduationCap className="w-5 h-5 text-indigo-600" />}>
          <div className="grid md:grid-cols-2 gap-4">
            {profile.education.map((e, i) => (
              <Card key={i}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-indigo-700">
                      {e.degree}
                    </h3>
                    <p className="text-slate-700">{e.school}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full border bg-indigo-50 border-indigo-200 text-indigo-700 whitespace-nowrap">
                    {e.period}
                  </span>
                </div>
                <p className="text-slate-700 mt-2">{e.details}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <Card>
            <div className="grid md:grid-cols-3 gap-4 text-slate-800">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 hover:text-indigo-600"
              >
                <Mail className="w-5 h-5 text-indigo-600" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-2 hover:text-indigo-600"
              >
                <Phone className="w-5 h-5 text-indigo-600" /> {profile.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-600" />{" "}
                {profile.location}
              </span>
            </div>
          </Card>
        </Section>
      </main>

      <footer className="py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </div>
  );
}