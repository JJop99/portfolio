interface WinshotProps {
  variant?: "default" | "terra" | "ink";
  code?: boolean;
  url: string;
  title?: React.ReactNode;
  tags?: string;
  children?: React.ReactNode; // code content for code variant
  className?: string;
  style?: React.CSSProperties;
}

export default function Winshot({
  variant = "default",
  code = false,
  url,
  title,
  tags,
  children,
  className = "",
  style,
}: WinshotProps) {
  const variantClass = variant !== "default" ? ` ${variant}` : "";
  const codeClass = code ? " code" : "";

  return (
    <div className={`winshot${variantClass}${codeClass} ${className}`.trim()} style={style}>
      <div className="winshot-header">
        <span className="winshot-dot r" />
        <span className="winshot-dot y" />
        <span className="winshot-dot g" />
        <span className="winshot-url">{url}</span>
      </div>
      <div className="winshot-body">
        {code ? (
          children
        ) : (
          <>
            {title && <h4>{title}</h4>}
            {tags && <span className="tags">{tags}</span>}
            <span className="stack-arrow">→</span>
          </>
        )}
      </div>
    </div>
  );
}
