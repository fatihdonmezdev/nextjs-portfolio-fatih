import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const { t } = useTranslation();
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <h3>{t("works.techStack")}</h3>
            <ul>
              {item.techStack.map((item) => {
                return <li key={item.id}>{item}</li>;
              })}
            </ul>
            <div className="links">
              <a href={item.link} target="_blank">
                <button>{item.demo}</button>
              </a>
              <a href={item.github} target="_blank">
                <button className="github">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {item.source}
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
  const { t } = useTranslation();
  const items = [
    {
      id: t("works.work1.id"),
      demo: t("works.demo"),
      source: t("works.source"),
      title: t("works.work1.title"),
      desc: t("works.work1.desc"),
      techStack: t("works.work1.techStack", { returnObjects: true }),
      img: t("works.work1.img"),
      link: t("works.work1.link"),
      github: t("works.work1.github"),
    },
    {
      id: t("works.work2.id"),
      demo: t("works.demo"),
      source: t("works.source"),
      title: t("works.work2.title"),
      desc: t("works.work2.desc"),
      techStack: t("works.work2.techStack", { returnObjects: true }),
      img: t("works.work2.img"),
      link: t("works.work2.link"),
      github: t("works.work2.github"),
    },
    {
      id: t("works.work3.id"),
      demo: t("works.demo"),
      source: t("works.source"),
      title: t("works.work3.title"),
      desc: t("works.work3.desc"),
      techStack: t("works.work3.techStack", { returnObjects: true }),
      img: t("works.work3.img"),
      link: t("works.work3.link"),
      github: t("works.work3.github"),
    },
    {
      id: t("works.work4.id"),
      demo: t("works.demo"),
      source: t("works.source"),
      title: t("works.work4.title"),
      desc: t("works.work4.desc"),
      techStack: t("works.work4.techStack", { returnObjects: true }),
      img: t("works.work4.img"),
      link: t("works.work4.link"),
      github: t("works.work4.github"),
    },
  ];
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
        <h1>{t("works.heading")}</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
