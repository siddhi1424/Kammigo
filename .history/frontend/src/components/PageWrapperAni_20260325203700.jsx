import { motion } from "framer-motion";
import { pageTransition } from "../animations/Variants";
import React from "react";

const PageWrapperAni = ({ children }) => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4 }}
    ></motion.div>
  );
};

export default PageWrapperAni;
