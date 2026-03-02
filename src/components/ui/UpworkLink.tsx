import React from 'react';
import { ExternalLink } from 'lucide-react';
import { track } from '../../lib/analytics';
import { buildUpworkUrl } from '../../lib/upwork';

const cx = (...classes: Array<string | undefined | false>) => classes.filter(Boolean).join(' ');

type UpworkLinkProps = {
  placement: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  variant?: 'inline' | 'subtle' | 'button' | 'chip';
  ariaLabel?: string;
};

const variantClasses: Record<NonNullable<UpworkLinkProps['variant']>, string> = {
  inline: 'inline-flex items-center gap-1 text-sm font-semibold text-text-body underline-offset-4 hover:text-brand hover:underline',
  subtle: 'inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-text-muted hover:text-brand',
  button:
    'inline-flex items-center gap-2 rounded-md border border-line bg-surface-1 px-4 py-2 text-sm font-semibold text-text-body transition-colors hover:border-brand/30 hover:text-brand',
  chip: 'inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-3 py-1.5 text-xs font-semibold text-text-body hover:border-brand/30 hover:text-brand',
};

export const UpworkLink: React.FC<UpworkLinkProps> = ({
  placement,
  children,
  className,
  icon,
  showIcon = false,
  variant = 'inline',
  ariaLabel,
}) => (
  <a
    href={buildUpworkUrl(placement)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    onClick={() => track('upwork_click', { placement })}
    className={cx('ring-focus rounded-md', variantClasses[variant], className)}
  >
    <span>{children}</span>
    {showIcon ? icon ?? <ExternalLink size={14} /> : null}
  </a>
);

