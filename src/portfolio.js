/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Harpreet Singh",
  title: "Hi all, I'm Harpeet",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs /MongoDB and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1nr1VeKWG2ZVn2HK5aY8gFEOGBHe0PibG/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harpreet-singh-au7",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "simransingh12340@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/harpreet12/',
  twitter: 'https://twitter.com/harpreet12',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean / Github"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "SpringBoot",
      fontAwesomeClassname: "fas fa-spring"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indore Public School(IPS)",
      logo: require("./assets/images/IPSLogo.png"),
      subHeader: "Bachelor Of Computer Application",
      duration: "September 2017 - April 2019",
      desc: "Participated in the Department Of Computer Science & Research and published 3 papers.",
      descBullets: [
        "Graduated with A grade and awarded for research and kali Linux"
      ]
    },
    {
      schoolName: "Attainu University",
      logo: require("./assets/images/attainu.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Feb 2020 - October 2020",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Learn skills of MERN Technology and did practical projects"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Github",
      progressPercentage: "90%"
    },
    {
      Stack: "Docker",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Idexcel Technologies Pvt. Ltd",
      companylogo: require("./assets/images/idexcel.png"),
      date: "May 2021 – Present",
      desc:
        "Digital Transformation",
      descBullets: [
        "Works in a financial project React js",
        "Worked on independent Component and daily tasks includes enhancement and bug fixing",
        "Tech used are React JS, Node JS, Module fedration, JIRA, Spring Boot, AWS.",
        "Deciding Architechture of the Application.",
        "Developing application moblle/web react, generating workspace, jest, Ag-grid, typescript, Functional Components, Context API, Module Federation."
      ]
    },
    {
      role: "Software Development Virtual Experience",
      company: "JP Morgan & Chase",
      companylogo: require("./assets/images/jpLogo.png"),
      date: "June 2020–Oct 2020",
      desc:
        "Accomplish python based daily task to meet client requirement using modules like matplotlib, GraphQl ,Realtime Jp morgan Software."
    },
    {
      role: "Technical Support Engineer",
      company: "Amazon Inc",
      date: "Mar 2019 –  Jun 2020",
      companylogo: require("./assets/images/AmznLogo.png"),
      desc:
      "Working with sellers to create detail pages on Amazon and using XML, MWS technologies, jest, API calling to create detail pages and make sure that process requirement has been met"
    },
    {
      role: "Online Business Manager",
      company: "Needbags Pvt Ltd.",
      date: "Feb 2018 – Dec 2018",
      companylogo: require("./assets/images/nbLogo.jpg"),
      desc:
      "Designing website for the company and managing SOR process and Online business, Generating leads Online via google ads managing team of 7."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "harpreet-singh-au7", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Full Stack Amazon Website",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/AmznLogo.png"),
      projectName: "Clone Amazon",
      projectDesc: "Amazon MERN stack Project",
      footerLink: [
        {
          name: "View Website",
          url: "http://aclone-4da0f.web.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/scratchNest.png"),
      projectName: "Scratchnest.com",
      projectDesc: "A full stack website with react, typescript, ionic, capacitor, HTTP, O Auth, tcss, BlackDUck",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://scratchnest-ff76c.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/candenceLogo.png"),
      projectName: "Cadence Academy",
      projectDesc: "A institutional website for fashion designing offer page with react and rest website with WordPress",
      footerLink: [
        {
          name: "Visit Website",
          url: " https://cadence- 3e4e5.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/paleoLogo.png"),
      projectName: "Paleo Bakes",
      projectDesc: "A bakery website based on Mumbai - Client Requirement",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://paleoobakes.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@harpreet12/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Contact On below details.",
  number: "8109-4345-01",
  email_address: "simransingh12340@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "harpreet903", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
