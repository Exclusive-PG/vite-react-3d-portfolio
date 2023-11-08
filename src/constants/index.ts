import {
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
  webpack,
  ytdownloader,
  threejs,
  education,
  quartsoft,
  audioplayer,
  fitnessapp,
  starwarswiki,
  exlusivehelper,
  exclusiveplatform,
  feedbackQS,
  electron,
  sass,
} from "../assets";
import { navLinkI, projectsI, techI } from "../types/types";

const navLinks: navLinkI[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Desktop Developer",
    icon: creator,
  },
];

const technologies: techI[] = [
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
    name: "webpack",
    icon: webpack,
  },
  {
    name: "electron",
    icon: electron,
  },
  {
    name: "scss",
    icon: sass,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "DSEA-State Engineering Academy",
    icon: education,
    iconBg: "#383E56",
    date: "September 2019 - March 2022",
    points: [
      "Started my journey in web development.",
      "Gradually transitioned from working on simpler projects to tackling more complex and challenging ones.",
      "Acquired proficiency in various web development technologies, such as HTML, CSS, JavaScript, and advanced tools like Webpack and SCSS.",
      "Worked with popular framework React and state-management(Redux or MobX)",
    ],
  },
  {
    title: "Web Developer(Next.js)",
    company_name: "QuartSoft",
    icon: quartsoft,
    iconBg: "#E6DEDD",
    date: "April 2022 - June 2022",
    points: [
      "During my internship at Quartsoft, developed expertise in Next.js, a popular React framework for building efficient and performant web applications.",
      "Acquired proficiency in Firebase, a robust platform for developing web and mobile applications.",
      "Engaged in project that provided insights into project architecture, honing my ability to design and structure software applications for scalability and maintainability.",
    ],
  },
  {
    title: "Web Developer(Electron.js)",
    company_name: "DSEA-State Engineering Academy",
    icon: education,
    iconBg: "#383E56",
    date: "July 2022 - June 2023",
    points: [
      "I remain committed to enhancing my web development expertise, actively seeking opportunities to learn and grow in the field.",
      "I have delved into the realm of Electron.js, a framework for building cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript.",
      "I am actively developing multiple applications using Electron.js, gaining practical experience and expanding my skill set in this technology.",
      "I completed my Bachelor's degree Computer Science with honors.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "DSEA-State Engineering Academy",
    icon: education,
    iconBg: "#E6DEDD",
    date: "September 2023 - Present",
    points: [
      "I am dedicated to continuously upgrading my web development knowledge, keeping pace with the evolving industry standards and emerging technologies.",
      "I have been actively learning and applying techniques for optimizing web pages (PWA) to enhance performance and user experience.",
      "I have embarked on a journey to further my education by enrolling in a master's program.",
    ],
  },
];

const testimonials = [

  {
    testimonial:
      "In practice, Dmytro demonstrated proficiency in Next.js and Firebase technologies while showcasing his dedication and hardworking nature.",
    name: "Vitaliy Kuzmin",
    designation: "CTO",
    company: "QuartSoft",
    image: feedbackQS,
  },
];

const projects: projectsI[] = [
  {
    name: "YT-ExclusiveDownloader",
    description:
      "Special program for downloading content from YouTube to your computer, and also includes data analytics, history, quick settings, easy and modern user interface, convenient control of playlists on your PC.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "electron.js",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "webpack",
        color: "blue-text-gradient",
      },
    ],
    image: ytdownloader,
    source_code_link:
      "https://github.com/Exclusive-PG/electron-downloader-release",
    offcial_website:
      "https://exclusive-software.vercel.app/ua/exclusive-ytdownloader",
  },
  {
    name: "AudioPlayer",
    description:
      "Experience music like never before with our Audioplayer: music visualization and a powerful equalizer in one. Elevate your listening pleasure with captivating visuals and customized sound. Unleash the full potential of your music.",
    tags: [
      {
        name: "electron.js",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "webpack",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: audioplayer,
    source_code_link: "https://github.com/Exclusive-PG/audio-player-ts",
  },
  {
    name: "Fitness App",
    description:
      "Elevate your fitness with our all-in-one Fitness App. Get personalized training, diet plans, and more to reach your goals. Your journey to a healthier you starts here.",
    tags: [
      {
        name: "electron.js",
        color: "blue-text-gradient",
      },
      {
        name: "webpack",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
    ],
    image: fitnessapp,
    source_code_link: "https://github.com/Exclusive-PG/electron-fitness-app",
  },
  {
    name: "Star Wars Wiki",
    description:
      "Explore the Star Wars universe with the Star Wars Wiki app. Find details on characters, planets, starships, and films in one convenient place. The ultimate resource for Star Wars enthusiasts.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: starwarswiki,
    source_code_link: "https://github.com/Exclusive-PG/next-app-swapi",
    offcial_website:"https://next-app-swapi-15dlhcjg5-exclusive-pg.vercel.app"
  },
  {
    name: "Exclusiver Helper",
    description:
      "Experience the power of ExclusiveHelper, your go-to app for comprehensive PC information and hassle-free removal of temporary junk files. Get a complete overview of your computer and keep it running smoothly with just a few clicks.",
    tags: [
      {
        name: "electron.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "webpack",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: exlusivehelper,
    source_code_link: "https://github.com/Exclusive-PG/electron-app-ExlusiveHelper",
  },
  {
    name: "Exclusiver Platform",
    description:
      "Exclusive Platform offers a suite of six essential apps to enhance your daily experience, covering everything from weather and currency exchange to to-do lists, film searches, news, and radio stations. Streamline your life with us.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: exclusiveplatform,
    source_code_link: "https://github.com/Exclusive-PG/exclusive-platform-react-ts",
    offcial_website: "https://exclusive-platform-react-ts-f59ygsgmn-exclusive-pg.vercel.app/#/home"
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};
