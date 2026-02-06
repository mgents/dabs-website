import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </Section>
  );
}
