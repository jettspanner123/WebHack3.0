"use client";
import React from "react";
import { motion } from "framer-motion";

interface MainProps {
  mainComponent: React.ReactNode;
  classStyles: string;
  animateTo: any;
  animateFrom: any;
  animationTransition: any;
}

const Main = ({
  mainComponent,
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
      {mainComponent}
    </motion.div>
  );
};

export default Main;
