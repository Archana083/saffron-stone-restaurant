type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'between';
};

export function SectionHeader({ eyebrow, title, description, align = 'between' }: SectionHeaderProps) {
  return (
    <div className={`section-head ${align === 'left' ? 'section-head-left' : ''}`}>
      <div>
        <div className="section-kicker">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
