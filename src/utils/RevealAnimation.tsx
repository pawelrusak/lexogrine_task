import { motion, useInView, useAnimationControls } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

import type { Variants } from "motion/react";

type RevealProps = {
  children: ReactNode;
};

const variants: Variants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.4, delay: 0, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const RevealAnimation = ({ children }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={variants}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
