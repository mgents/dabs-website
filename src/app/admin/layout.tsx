import Link from 'next/link';
import { Calendar, MessageSquare, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/30 p-6 hidden md:block">
        <div className="mb-8">
          <Link href="/" className="text-lg font-bold text-primary">
            DABS
          </Link>
          <p className="text-xs text-muted-foreground mt-1">Admin Panel</p>
        </div>
        <nav className="space-y-1">
          <Link
            href="/admin/events"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            <Calendar className="h-4 w-4" />
            Events
          </Link>
          <Link
            href="/admin/inquiries"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            Inquiries
          </Link>
        </nav>
        <div className="mt-auto pt-8">
          <form action="/api/auth/signout" method="POST">
            <Button type="submit" variant="ghost" size="sm" className="w-full justify-start gap-3">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8">{children}</div>
    </div>
  );
}
