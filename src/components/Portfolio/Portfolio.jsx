import { useRef } from "react";
import "./portfolio.scss";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const items = [
  {
    id: 1,
    title: "Fatih Store",
    img: "https://private-user-images.githubusercontent.com/72231439/316265727-1e03eda4-46c5-443f-9e72-236afa4c3f86.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI4NjgyMDYsIm5iZiI6MTcxMjg2NzkwNiwicGF0aCI6Ii83MjIzMTQzOS8zMTYyNjU3MjctMWUwM2VkYTQtNDZjNS00NDNmLTllNzItMjM2YWZhNGMzZjg2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDExVDIwMzgyNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZkYTY5MDBmYmQzMTI0OTc5MWZjNjIzZTNkNDk4NTAxNjM3ODE0OWFiNWZlZjA5OGEzOTExM2Q2MTJjNGU3ZGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.hiNAszDeSxGowfMI9DBSuq-GT3hmEhg_egZT-XF_A1A",
    desc: "This project is an ecommerce project I made with next.js and Firebase Auth, firestore. This project also has an admin CMS in which you can add new products, edit products, remove products, see orders made by users. ",
    techStack: [
      "Next.js",
      "Firebase",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    link: "https://ecommerce-fatihstore.vercel.app/",
    github:
      "https://github.com/fatihdonmezdev/Ecommerce-Fatihstore",
  },
  {
    id: 2,
    title: "Uzman Sap",
    img: "https://i.ibb.co/MNTrzNV/uzmansap.jpg",
    desc: "This project is a local concrete screed company's website. I made this project with Next.js and Tailwind CSS. The project is 2nd on google results when you search for 'hatay şap' which means concrete screed in Hatay in Turkish. The website aims locals that live in the city.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Google Maps",
      "Google ADS",
      "Whatsapp Integration",
    ],
    link: "https://www.uzmansap.com/",
    github: "https://www.uzmansap.com/",
  },
  {
    id: 3,
    title: "Erbeyler Tesisat",
    img: "https://i.ibb.co/FBbVY9b/erbeyler.jpg",
    desc: "This project is a local plumber's website. I made this project with React.js and Tailwind CSS. The website aims locals that live in the city. I've also integrated Google maps and Google ADS to the website.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Google ADS",
      "Whatsapp Integration",
    ],
    link: "https://www.bodrumerbeylertesisat.com/",
    github:
      "https://www.bodrumerbeylertesisat.com/",
  },
  {
    id: 4,
    title: "React Meals",
    img: "https://i.ibb.co/ZKY0TJh/reactmeals.jpg",
    desc: "This project is a Food Order app I made at the beginning of my React journey. I made this project with React.js and Tailwind CSS. The website is simple and SPA, you can add meals to your cart and order them. The project is connected to Firebase, I can see orders made by users. I can add meals.",
    techStack: [
      "React.js",
      "Firebase",
      "Fetch API",
      "React Forms",
    ],
    link: "https://fanciful-klepon-9e9de1.netlify.app/",
    github:
      "https://github.com/fatihdonmezdev/Food-Order-App?tab=readme-ov-file",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div
            className="imageContainer"
            ref={ref}
          >
            <img src={item.img} alt="" />
          </div>
          <motion.div
            className="textContainer"
            style={{ y }}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <h3>Tech Stack</h3>
            <ul>
              {item.techStack.map((item) => {
                return (
                  <li key={item.id}>{item}</li>
                );
              })}
            </ul>
            <div className="links">
              <a href={item.link} target="_blank">
                <button>See Demo</button>
              </a>
              <a
                href={item.github}
                target="_blank"
              >
                <button className="github">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  See Github
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
