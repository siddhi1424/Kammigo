import React from "react";
import { motion } from "framer-motion";
import { buttonAnimation } from "../animations/Variants";

const AnimatedButton = ({ children }) => {
  return (
    <motion.div
      variants={buttonAnimation}
      whileHover="hover"
      whileTap="tap"
    ></motion.div>
  );
};

export default AnimatedButton;
