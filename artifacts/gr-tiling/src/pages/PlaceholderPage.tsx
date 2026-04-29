export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-32 text-center px-4 bg-background">
      <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">{title}</h1>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
      <p className="text-muted-foreground text-xl max-w-md mx-auto">
        Coming soon — this page is being built.
      </p>
    </main>
  );
}