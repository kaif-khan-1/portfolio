// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import shadcnLogo from './assets/tech_logo/shadcn.png';

// Education Section Logo's
import aiktcLogo from './assets/education_logo/aiktc_logo.jpg';
import mhssjcLogo from './assets/education_logo/mhssjc_logo.png';
import smchLogo from './assets/education_logo/smch_logo.png';

// Project Section Logo's
import axweatherLogo from './assets/work_logo/axweather.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      {name:'ShadCn UI', logo: shadcnLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Hugging Face', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
    ],
  },
];

  export const education = [
    
    {
      id: 0,
      img: aiktcLogo,
      school: "Anjuman-I-Islam's Kalsekar Technical Campus, Panvel",
      date: "June 2022 - May 2026",
      grade: "8.0 CGPA (Till 6th Sem)",
      desc: "I am pursuing my Bachelor's degree in Computer Engineering (B.E. Computer Engineering) from AIKTC College, Panvel. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at AIKTC College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Engineering - B.E.(Computer Engineering)",
    },
    {
      id: 1,
      img: mhssjcLogo,
      school: "M. H. Saboo Siddik College High School and Junior College, Mumbai",
      date: "June 2020 - March 2022",
      grade: "86.17%",
      desc: "I completed my class 12 education from M. H. Saboo Siddik College High School and Junior College, Mumbai, under the Maharashtra board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "Maharashtra Board(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: smchLogo,
      school: "St. Mary's Convent High School, Thane",
      date: "June 2019 - May 2020",
      grade: "92%",
      desc: "I completed my class 10 education from St. Mary's Convent High School, Thane, under the Maharashtra board, where I studied Science with Computer.",
      degree: "Maharashtra Board(X), Science with Computer",
    },
  ];
  
  export const projects = [
      {
    id: 4,
    title: "ModelVerse Hub",
    description:
      "A centralized platform built using Streamlit and Python that hosts a wide range of machine learning and deep learning models, each with interactive demos and expandable code explanations. Inspired by platforms like Expandable.com, ModelVerse Hub allows users to explore, understand, and experiment with models such as logistic regression, decision trees, random forests, CNNs, RNNs, and transformers—all in one place. Each model page includes input forms, visual outputs, and annotated code blocks to help users grasp both the theory and implementation. Ideal for learners, researchers, and developers seeking hands-on experience with real-world ML workflows.",
    tags: ["Python", "Streamlit", "Machine Learning", "Deep Learning", "Model Hub", "Education"],
    github: "https://github.com/kaif-khan-1/ModelHQ",
    },
    {
    id: 1,
    title: "HealthPredict Web App",
    description:
      "An interactive disease risk prediction platform built using Streamlit and Python. It allows users to assess their likelihood of developing conditions like heart disease, Parkinson’s, and diabetes by entering key health metrics. The app leverages trained machine learning models to deliver instant predictions, along with personalized suggestions such as lifestyle changes, dietary tips, and medical follow-ups. Its clean layout, responsive design, and intuitive flow make it accessible for users seeking early health insights and preventive care.",
    tags: ["Python", "Streamlit", "Machine Learning", "Data Science", "Healthcare"],
    github: "https://github.com/kaif-khan-1/Multiple_disease_prediction"
   },
    {
      id: 2,
      title: "AXWeather Website",
      description:
        "A responsive and visually engaging weather app built using React, HTML, CSS, and the OpenWeatherMap API. It delivers real-time weather updates based on user input, including temperature, humidity, wind speed, and atmospheric conditions. The intuitive interface and smooth performance make it a reliable tool for users seeking quick and accurate forecasts.It also give suggestions according to weather like if raining then take umbrella.",
        image: axweatherLogo,
      tags: [ "HTML", "CSS", "JavaScript", "API",],
      github: "https://github.com/kaif-khan-1/axweather1",
      webapp: "https://kaif-khan-1.github.io/axweather1/",
    }, 
  ];  