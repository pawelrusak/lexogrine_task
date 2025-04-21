import React from "react";
import { motion, useInView, useAnimationControls } from "motion/react";

import type { Variants } from "motion/react";

type RevealAnimationProps = {
  children: React.ReactNode;
};

const variants: Variants = {
  hidden: {
    clipPath: "inset(0% 0% 100% 0%)",
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const RevealAnimation = ({ children }: RevealAnimationProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const controls = useAnimationControls();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={variants}
      style={{
        overflow: "hidden",
        willChange: "clip-path",
        display: "block",
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
