import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Josephine Meyers",
    email: "josephine.meyers@mail.co.uk",
    phoneNumber: "+44 3245 5521 5521",
    address: "London, UK",
    linkedin: "https://www.linkedin.com/in/josephinemeyers",
    github: "https://github.com/josephinemeyers",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in Economics",
        schoolName: "London City University",
        location: "New York City, US",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        degree: "Master's Degree in Math",
        schoolName: "Hidden University",
        location: "New York City, US",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: true,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "Umbrella Inc.",
        positionTitle: "UX & UI Designer",
        location: "New York City, US",
        description:
          "Designed and prototyped user interface patterns for various clients in various industries.",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        companyName: "Black Mesa Labs",
        positionTitle: "UX Research Assistant",
        location: "Berlin, Germany",
        description:
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes.",
        startDate: "04/2018",
        endDate: "02/2019",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],

    skills: [
      {
        name: "JavaScript",
        level: "Advanced",
        id: uniqid(),
      },
      {
        name: "React.js",
        level: "Advanced",
        id: uniqid(),
      },
      {
        name: "Figma",
        level: "Intermediate",
        id: uniqid(),
      },
      {
        name: "User Research",
        level: "Intermediate",
        id: uniqid(),
      },
    ],

    projects: [
      {
        title: "Personal Portfolio Website",
        description:
          "Developed a fully responsive portfolio website using React.js and Tailwind CSS. Features include a dark/light mode toggle and smooth animations.",
        technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
        link: "https://josephinemeyers.dev",
        id: uniqid(),
      }
    ],
  },
};

export default exampleData;
