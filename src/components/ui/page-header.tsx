import * as React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ className, title, description, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('mb-12', className)} {...props}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-muted-foreground max-w-2xl">{description}</p>
        )}
        {children}
      </div>
    );
  }
);
PageHeader.displayName = 'PageHeader';

export { PageHeader };
