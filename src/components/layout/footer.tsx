import Link from 'next/link';
import { Linkedin, Facebook } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { footerNavigation, contactInfo } from '@/config/navigation';

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                About
              </h3>
              <ul className="space-y-2">
                {footerNavigation.about.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Membership
              </h3>
              <ul className="space-y-2">
                {footerNavigation.membership.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Sponsorship
              </h3>
              <ul className="space-y-2">
                {footerNavigation.sponsorship.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                {footerNavigation.legal.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="text-sm font-medium">Danish Business Association of Singapore</p>
                <p className="text-sm text-muted-foreground mt-1">{contactInfo.address}</p>
                <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-foreground transition-colors">
                    {contactInfo.email}
                  </a>
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-foreground transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Danish Business Association of Singapore. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
