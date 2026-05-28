type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-12">
      <h1 className="font-serif text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">
          {description}
        </p>
      )}
    </header>
  );
}
