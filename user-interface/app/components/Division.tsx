"use client";
import { motion } from "framer-motion";

const Division = ({
  divisionComponents,
  classStyles,
  animateTo,
  animateFrom,
  animationTransition,
}: any) => {
  return (
    <motion.div
      animate={animateTo}
      initial={animateFrom}
      transition={animationTransition}
      className={classStyles}
    >
      {divisionComponents}
    </motion.div>
  );
};

export default Division;
