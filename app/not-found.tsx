import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container flex flex-col items-center justify-center py-24">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <p className="mb-8 text-lg text-fd-muted-foreground">
        Page not found
      </p>
      <Link
        href="/"
        className="rounded-lg bg-fd-primary px-6 py-2 text-fd-primary-foreground"
      >
        Go to Home
      </Link>
    </main>
  );
}
