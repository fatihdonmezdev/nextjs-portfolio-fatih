import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";
import ServicesCard from "./ServicesCard";
import { useTranslation } from "react-i18next";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const { t } = useTranslation();
  const isInView = useInView(ref, {
    margin: "-100px",
  });
  const cardData = [
    {
      title: t("services.card1-title"),
      description: t("services.card1-text"),
    },
    {
      title: t("services.card2-title"),
      description: t("services.card2-text"),
    },
    {
      title: t("services.card3-title"),
      description: t("services.card3-text"),
    },
    {
      title: t("services.card4-title"),
      description: t("services.card4-text"),
    },
  ];
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          {t("services.heading")} <br /> {t("services.heading2")}
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>
              {t("services.title1-1")}
            </motion.b>{" "}
            {t("services.title1-2")}
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>
              {t("services.title2-1")}
            </motion.b>{" "}
            {t("services.title2-2")}
          </h1>
          <button>{t("services.button")}</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {cardData.map((card, index) => (
          <ServicesCard
            key={index}
            title={card.title}
            description={card.description}
            go={t("services.go")}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
