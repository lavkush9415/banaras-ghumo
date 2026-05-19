'use client';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            {badge}
          </span>
        </div>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
        {title}{' '}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
