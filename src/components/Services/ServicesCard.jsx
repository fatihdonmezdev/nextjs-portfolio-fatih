import React from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ title, description, go }) => {
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
      <button>{go}</button>
    </motion.div>
  );
};

export default ServicesCard;
