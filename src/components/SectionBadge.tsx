interface SectionBadgeProps {
  label: string;
  align?: 'center' | 'left';
}

const SectionBadge = ({ label, align = 'center' }: SectionBadgeProps) => (
  <div className={`flex ${align === 'center' ? 'justify-center' : 'justify-start'} mb-4`}>
    <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full uppercase tracking-widest">
      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
      {label}
    </span>
  </div>
);

export default SectionBadge;
