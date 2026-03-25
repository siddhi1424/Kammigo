import React from "react";
import { motion } from "framer-motion";
import { buttonAnimation } from "../animations/Variants";

const AnimatedButton = ({ children, ...props }) => {
  return (
    <motion.div
      variants={buttonAnimation}
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedButton;
