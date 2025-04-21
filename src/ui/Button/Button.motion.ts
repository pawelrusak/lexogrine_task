import { Variants as MotionVariants } from "motion/react";
import "./Button.scss";

const pulseVariants: MotionVariants = {
  hover: {
    scale: [1, 1.07, 0.97, 1],
  },
  tap: {
    scale: [1, 0.78, 1.2, 0.92, 1],
    transition: {
      duration: 0.7,
      ease: "easeIn",
    },
  },
};

export { pulseVariants };
