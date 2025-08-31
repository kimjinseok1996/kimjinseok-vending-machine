import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FramerMotionValues = {
  _uniqueKey: string | number;
  _initial?: any;
  _animate?: any;
  _transition?: any;
};

type FramerMotionProps = {
  children: ReactNode;
  values: FramerMotionValues;
};

const FramerMotion = ({ children, values }: FramerMotionProps) => {
  const { _uniqueKey, _initial, _animate, _transition } = values;
  return (
    <motion.div
      key={_uniqueKey}
      initial={_initial}
      animate={_animate}
      transition={_transition}
    >
      {children}
    </motion.div>
  );
};

export default FramerMotion;
