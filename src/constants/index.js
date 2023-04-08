import {
    starbucks,
    tesla,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
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
  

  const experiences = [
    {
      title: "Python and Algebra Tutor",
      company_name: "Mayor's Youth Summer Program",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2018 - August 2018",
      points: [
        "Teaching Python to high school students",
        "Developing interactive lesson plans to make algebra exciting for young kids.",
        "Implemented these lesson plans for students ages 6-12."
      ],
    },
    {
      title: "Embedded Software Intern",
      company_name: "Novatio Engineering",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2022 - August 2022",
      points: [
        "Updated depreciated legacy code, tripling the number of compatible microprocessors and solving stock issues.",
        "Automated parts of QC using Arduino and Python, safeguarding against human error and shaving 20 minutes off of the production process.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products."
      ],
    },
  ];
  
  const projects = [
    {
      name: "Audio Manipulation CLI",
      description:
        "Audio signal processing and manipulation command line interface in C++, primarily for music and sound art production. Capable of a myriad of audio effects/filters. Still in development.",
      tags: [
      ],
      image: carrent,
      source_code_link: "https://github.com/y4umeng/4rer",
    },
    {
      name: "SkateDB",
      description:
        "Web application created with Flask and PostgreSQL that enables users to browse and post skate tricks and skate spots.",
      tags: [
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio Website",
      description:
        "The website you're currently looking at. Created using React.js, React Three Fiber, TailwindCSS, and Framer Motion.",
      tags: [
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Multi-Process Server in C",
      description:
        "Final project for Advanced Programming in C. Serves HTML files to multiple HTTP clients simultaneously over socket connection with multi-threading.",
      tags: [
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Twitter Bot",
      description:
        "Automated Twitter account that web scrapes a Substack blog and recursively parses a random string to tweet. Gained 200+ followers by itself.",
      tags: [
      ],
      image: tripguide,
      source_code_link: "https://github.com/y4umeng/angel-bot",
    },
    {
      name: "Columbia Mutual Aid",
      description:
      "A web app strictly for students and faculty of Columbia University to request monetary aid/crowdfund from the community for any personal or community purpose. Still in the development stage.",
      tags: [
      ],
      image: tripguide,
      source_code_link: "https://devpost.com/software/columbia-mutual-aid",
    },
    {
      name: "Mandelbrot Fractal Render",
      description:
        "Java program that renders Mandelbrot set up to 1000x magnification with algorithmic coloring",
      tags: [
      ],
      image: tripguide,
      source_code_link: "https://github.com/y4umeng/javandel",
    },
  ];
  
  export { experiences, projects };