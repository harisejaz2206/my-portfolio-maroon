import { useRef, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { EDITORIAL_EASE } from '../lib/motion';

type MotionPrimitiveProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.18,
}: MotionPrimitiveProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.72, delay, ease: EDITORIAL_EASE }}
    >
      {children}
    </motion.div>
  );
}

export function ClipReveal({
  children,
  className,
  delay = 0,
  amount = 0.25,
}: MotionPrimitiveProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount });

  return (
    <div
      ref={containerRef}
      className={`motion-clip${className ? ` ${className}` : ''}`}
    >
      <motion.div
        initial={reduceMotion ? false : { y: '102%', opacity: 0 }}
        animate={reduceMotion || isInView ? { y: '0%', opacity: 1 } : { y: '102%', opacity: 0 }}
        transition={{ duration: 0.82, delay, ease: EDITORIAL_EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function MediaReveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
}: MotionPrimitiveProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { clipPath: 'inset(7% 0 7% 0)', scale: 0.975 }}
      whileInView={reduceMotion ? undefined : { clipPath: 'inset(0% 0 0% 0%)', scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 1.05, delay, ease: EDITORIAL_EASE }}
    >
      {children}
    </motion.div>
  );
}
