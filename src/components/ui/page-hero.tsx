import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHero({
  title,
  subtitle,
  image = '/assets/migrated/hero/singapore-city.jpg',
}: PageHeroProps) {
  return (
    <div className="relative w-full h-[250px] md:h-[350px]">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
