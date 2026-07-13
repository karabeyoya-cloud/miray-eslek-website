type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-10 text-left">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-fg md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </header>
  );
}
