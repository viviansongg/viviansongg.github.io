import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    uoft,
    cucai,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    qsite,
    bias,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Research Assistant",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Python Instructor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Undergraduate Researcher",
      company_name: "University of Toronto",
      icon: uoft,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        "Functioning as an undergraduate game design researcher under the supervision of Professor Steve Engels and Dr. Vivienne Luk.",
        "Utilizing the ren'py framework to model forensics science processes through a playable prototype.",
        "Designing an attractive user interface and applying principles of game design to optimize client interaction.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Canadian Undergraduate Conference on Artificial Intelligence (CUCAI)",
      icon: cucai,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Developing, designing, and managing CUCAI’s official website using React, HTML, CSS and JavaScript prototyped by web designs created on Figma.",
        "Managing the backend of CUCAI’s application portal using Python.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Q-SITE",
      icon: qsite,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developed and managed the website for Q-SITE, an undergraduate quantum computing conference.",
        "Used Wix’s full-stack development platform, Velo to build and develop the Q-SITE website, applying web development languages such as HTML, CSS and JavaScript.",
        "Created and designed website frameworks using Figma.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "bias.io",
      description:
        "A web-based application that evaluates articles' credibility based on various criteria including key phrases found in the articles, the political reputation of the site, source credibility, author/publisher reliability, site extension and more",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "chakra",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "yellow-text-gradient",
        },
        {
          name: "gemini",
          color: "pink-text-gradient",
        },
      ],
      image: bias,
      source_code_link: "https://github.com/viviansongg/bias.io",
    },
    {
      name: "Forensics Pursuit",
      description:
        "A collection of forensics games, developed to educate forensics students on the process of crime scene analysis.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "ren'py",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/viviansongg/Forensics-Pursuit",
    },
    {
      name: "tasuku",
      description:
        "A fully functional project/task management system that allows the user to schedule events, create to-do lists and prioritize tasks.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "javafx",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/viviansongg/tasuku",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };