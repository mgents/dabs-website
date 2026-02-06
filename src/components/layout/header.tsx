import Link from 'next/link';
import Image from 'next/image';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { ASSETS } from '@/lib/assets';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b glass">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <MobileNav />
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={ASSETS.logo}
                alt="DABS"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>
          <MainNav />
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex h-8 w-8" title="Login">
              <Link href="/admin/login">
                <LogIn className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link href="/events">See Events</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/membership/join">Join DABS</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
