import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { galleryAlbums } from '@/data/gallery';
import { ImageIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse photos from DABS events and gatherings.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" image="/assets/migrated/hero/about-banner.png" />
      <Section>
        {galleryAlbums.length > 0 ? (
        <div className="space-y-12">
          {galleryAlbums.map((album) => (
            <div key={album.slug}>
              <h2 className="text-2xl font-semibold mb-6">{album.title}</h2>
              {album.images.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {album.images.map((image, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                      <img
                        src={image}
                        alt={`${album.title} - ${i + 1}`}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/50 rounded-xl">
                  <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Photos coming soon</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-lg text-muted-foreground">Gallery content coming soon.</p>
        </div>
      )}
      </Section>
    </>
  );
}
