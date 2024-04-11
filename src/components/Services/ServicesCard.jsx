import React from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ title, description }) => {
  return (
    <motion.div
      className="box"
      whileHover={{
        background: "lightgray",
        color: "black",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Go</button>
    </motion.div>
  );
};

export default ServicesCard;
