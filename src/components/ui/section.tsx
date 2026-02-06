import * as React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'white' | 'muted';
  container?: boolean;
  containerSize?: 'default' | 'narrow' | 'wide';
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, background = 'white', container = true, containerSize = 'default', children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('section-padding', background === 'muted' && 'bg-muted/50', className)}
        {...props}
      >
        {container ? <Container size={containerSize}>{children}</Container> : children}
      </section>
    );
  }
);
Section.displayName = 'Section';

export { Section };
