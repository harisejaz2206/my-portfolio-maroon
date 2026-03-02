import React from 'react';
import { motion } from 'framer-motion';
import { MotionReveal } from './MotionReveal';

const cx = (...classes: Array<string | undefined | false>) => classes.filter(Boolean).join(' ');

type CTAProps = {
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
};

export const SectionShell: React.FC<{
  children: React.ReactNode;
  className?: string;
  withGrid?: boolean;
}> = ({ children, className, withGrid = false }) => (
  <section
    className={cx(
      'relative py-section',
      withGrid && 'section-grid-bg',
      className
    )}
  >
    {children}
  </section>
);

export const SectionHeader: React.FC<{
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  className?: string;
}> = ({ title, subtitle, eyebrow, align = 'center', className }) => {
  const textAlignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={cx(textAlignClass, 'mb-12 md:mb-14', className)}>
      {eyebrow && (
        <MotionReveal y={14} duration={0.42} className="mb-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        </MotionReveal>
      )}
      <MotionReveal y={20} delay={0.04}>
        <h2 className="text-4xl md:text-5xl font-bold text-text-strong text-balance">{title}</h2>
      </MotionReveal>
      {subtitle && (
        <MotionReveal y={20} delay={0.1}>
          <p className={cx('mt-4 text-base md:text-lg text-text-body max-w-3xl', align === 'center' && 'mx-auto')}>
            {subtitle}
          </p>
        </MotionReveal>
      )}
    </div>
  );
};

export const SurfaceCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}> = ({ children, className, interactive = false }) => (
  <motion.div
    whileHover={interactive ? { y: -4 } : undefined}
    transition={interactive ? { duration: 0.24, ease: [0.22, 1, 0.36, 1] } : undefined}
    className={cx(
      'surface-card',
      interactive && 'hover:shadow-surface-lg hover:border-brand/20',
      className
    )}
  >
    {children}
  </motion.div>
);

export const TagChip: React.FC<{
  label: string;
  className?: string;
}> = ({ label, className }) => (
  <span
    className={cx(
      'inline-flex items-center rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-semibold text-text-body',
      className
    )}
  >
    {label}
  </span>
);

export const TrustChip: React.FC<{
  label: string;
  detail?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}> = ({ label, detail, icon, action, className }) => (
  <div
    className={cx(
      'inline-flex flex-wrap items-center gap-2 rounded-full border border-line bg-surface-2 px-3 py-2 text-xs text-text-body',
      className
    )}
  >
    {icon ? <span className="text-brand">{icon}</span> : null}
    <span className="font-semibold text-text-strong">{label}</span>
    {detail ? <span className="text-text-muted">{detail}</span> : null}
    {action ? <span className="pl-1">{action}</span> : null}
  </div>
);

export const InlineProof: React.FC<{
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}> = ({ children, icon, className }) => (
  <p className={cx('inline-flex items-center gap-2 text-sm text-text-muted', className)}>
    {icon ? <span className="text-brand">{icon}</span> : null}
    <span>{children}</span>
  </p>
);

export const MetricPill: React.FC<{
  value: string;
  label: string;
  className?: string;
}> = ({ value, label, className }) => (
  <div className={cx('rounded-md border border-line bg-surface-2 px-4 py-3', className)}>
    <div className="font-mono text-lg font-semibold text-brand">{value}</div>
    <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">{label}</div>
  </div>
);

const PrimaryBase = ({ children, icon, className }: Pick<CTAProps, 'children' | 'icon' | 'className'>) => (
  <span
    className={cx(
      'inline-flex items-center gap-2 rounded-md border border-brand/80 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-surface transition-all hover:-translate-y-0.5 hover:shadow-surface-lg',
      className
    )}
  >
    <span>{children}</span>
    {icon}
  </span>
);

const SecondaryBase = ({ children, icon, className }: Pick<CTAProps, 'children' | 'icon' | 'className'>) => (
  <span
    className={cx(
      'inline-flex items-center gap-2 rounded-md border border-line bg-surface-1 px-5 py-2.5 text-sm font-semibold text-text-strong transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand',
      className
    )}
  >
    <span>{children}</span>
    {icon}
  </span>
);

export const PrimaryCTA: React.FC<CTAProps> = ({
  children,
  href,
  icon,
  className,
  target,
  rel,
  onClick,
  type = 'button',
  disabled,
  ariaLabel,
}) => {
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileTap={{ scale: 0.98 }}
        className="ring-focus rounded-md"
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        aria-label={ariaLabel}
      >
        <PrimaryBase className={className} icon={icon}>
          {children}
        </PrimaryBase>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.98 }}
      className="ring-focus rounded-md"
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <PrimaryBase className={className} icon={icon}>
        {children}
      </PrimaryBase>
    </motion.button>
  );
};

export const SecondaryCTA: React.FC<CTAProps> = ({
  children,
  href,
  icon,
  className,
  target,
  rel,
  onClick,
  type = 'button',
  disabled,
  ariaLabel,
}) => {
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileTap={{ scale: 0.98 }}
        className="ring-focus rounded-md"
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        aria-label={ariaLabel}
      >
        <SecondaryBase className={className} icon={icon}>
          {children}
        </SecondaryBase>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.98 }}
      className="ring-focus rounded-md"
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <SecondaryBase className={className} icon={icon}>
        {children}
      </SecondaryBase>
    </motion.button>
  );
};
