import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const cx = (...classes: Array<string | undefined | false>) => classes.filter(Boolean).join(' ');

type MotionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  amount?: number;
};

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  className,
  delay = 0,
  y = 20,
  duration = 0.48,
  amount = 0.2,
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

type MotionStaggerProps = {
  children: React.ReactNode;
  className?: string;
  amount?: number;
  delayChildren?: number;
  staggerChildren?: number;
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export const MotionStagger: React.FC<MotionStaggerProps> = ({
  children,
  className,
  amount = 0.2,
  delayChildren = 0,
  staggerChildren = 0.1,
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        ...staggerVariants,
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionStaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={itemVariants} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className={cx(className)}>
      {children}
    </motion.div>
  );
};
