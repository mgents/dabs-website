import type { Metadata } from 'next';
import { Linkedin, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ContactForm } from '@/components/forms/contact-form';
import { contactInfo } from '@/config/navigation';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Danish Business Association of Singapore.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" image="/assets/migrated/hero/benefits-banner.png" />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Our Office</h2>
          <Card className="mb-8">
            <CardContent className="p-6 space-y-4">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Danish Business Association of Singapore</p>
                  <p className="text-muted-foreground">c/o Royal Danish Embassy</p>
                  <p className="text-muted-foreground">101 Thomson Road</p>
                  <p className="text-muted-foreground">#13-01/02 United Square</p>
                  <p className="text-muted-foreground">Singapore 307591</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-sm hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" /> Facebook
            </a>
          </div>

          <Separator className="mb-8" />

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Be the first to know about DABS events and exciting news - A great way to stay tuned in
              the Danish Business network
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4"
              >
                Sign Up
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-2">We respect your privacy.</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
      </Section>
    </>
  );
}
