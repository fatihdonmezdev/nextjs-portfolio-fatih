import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import ServicesCard from "./ServicesCard";

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

  const isInView = useInView(ref, {
    margin: "-100px",
  });

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
      <motion.div
        className="textContainer"
        variants={variants}
      >
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
      >
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b
              whileHover={{ color: "orange" }}
            >
              Unique
            </motion.b>{" "}
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b
              whileHover={{ color: "orange" }}
            >
              For Your
            </motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
      >
        <ServicesCard
          title={"Frontend Development"}
          description={
            "I can create a beautiful and responsive website for you. I can use React, Angular, or Vue.js. I can also use plain HTML, CSS, and JavaScript. I can also use Bootstrap, Tailwind CSS,MaterialUI,antd."
          }
        />
        <ServicesCard
          title={"Backend Development"}
          description={
            "I can create a backend for your website. I can use Node.js, Express.js,Typescript. I can also use MongoDB, MySQL, or PostgreSQL. I can also use Firebase & REST API or GraphQL."
          }
        />
        <ServicesCard
          title={"Cloud & Other Technologies"}
          description={
            "I can use Docker, Git/Github, Github actions for continous integration and delivery. I can use AWS RDS for database management and AWS EC2 instances with AWS EBS to deploy the backend. "
          }
        />
        <ServicesCard
          title={"Personality"}
          description={
            "I am a hardworking and dedicated person. I am always ready to learn new things. I am a team player and I can work in a team. I've have experience with projects and I can work under pressure. I have worked with other developers in many projects and I've overcome the challenges."
          }
        />
      </motion.div>
    </motion.div>
  );
};

export default Services;
