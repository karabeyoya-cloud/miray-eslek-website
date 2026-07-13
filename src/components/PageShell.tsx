type PageShellProps = {
  children: React.ReactNode;
  /** Narrower text column, still left-aligned within the site grid */
  reading?: boolean;
  className?: string;
};

export function PageShell({ children, reading = false, className = "" }: PageShellProps) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-6 pb-24 pt-28 md:pt-32 ${className}`.trim()}
    >
      <div className={reading ? "max-w-3xl" : "w-full"}>{children}</div>
    </div>
  );
}
