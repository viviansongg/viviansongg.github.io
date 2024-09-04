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
    forensics,
    tasuku,
    pet,
    movie,
    assembly,
    c,
    c_plus,
    chakra,
    django,
    flask,
    java,
    mysql,
    photoshop,
    python,
    r,
    vite,
    illustrator,
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
      title: "Software Developer Intern",
      icon: web,
    },
    {
      title: "Undergraduate Researcher",
      icon: mobile,
    },
    {
      title: "Game Developer",
      icon: backend,
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
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    // {
    //   name: "C",
    //   icon: c,
    // },
    {
      name: "C++",
      icon: c_plus,
    },
    {
      name: "react",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "Chakra",
    //   icon: chakra,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    
    {
      name: "R",
      icon: r,
    },
    // {
    //   name: "Vite",
    //   icon: vite,
    // },
    // {
    //   name: "Photoshop",
    //   icon: photoshop,
    // },
    // {
    //   name: "Illustrator",
    //   icon: illustrator,
    // },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Prep Doctors",
      icon: cucai,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Developing, designing, and managing CUCAI’s official website using React, HTML, CSS and JavaScript prototyped by web designs created on Figma.",
        "Managing the backend of CUCAI’s application portal using Python.",
      ],
    },
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
      image: forensics,
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
      image: tasuku,
      source_code_link: "https://github.com/viviansongg/tasuku",
    },
    {
      name: "PetPal",
      description:
        "An application aimed at facilitating pet adoption and social interaction between pet owners using the Petfinder API.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "swing",
          color: "green-text-gradient",
        },
      ],
      image: pet,
      source_code_link: "https://github.com/viviansongg/CSC207-PetPal",
    },
    {
      name: "Movie Recommendation System",
      description:
        "A movie recommendation system leveraging the graph data structure to model relationships between users, movies, and their attributes.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tkinter",
          color: "green-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/viviansongg/CSC111-Project",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };