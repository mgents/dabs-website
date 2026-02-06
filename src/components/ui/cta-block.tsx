import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface CTABlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

const CTABlock = React.forwardRef<HTMLDivElement, CTABlockProps>(
  ({ className, title, description, primaryAction, secondaryAction, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('bg-muted/50 rounded-xl p-8 md:p-12 text-center', className)}
        {...props}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h2>
        {description && (
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={primaryAction.href}>{primaryAction.label}</Link>
          </Button>
          {secondaryAction && (
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
            </Button>
          )}
        </div>
      </div>
    );
  }
);
CTABlock.displayName = 'CTABlock';

export { CTABlock };
