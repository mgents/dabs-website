export interface Sponsor {
  name: string;
  tier: 'main_partner' | 'sponsor';
  logo?: string;
  url?: string;
}

export const sponsors: Sponsor[] = [
  {
    name: 'Carlsberg',
    tier: 'main_partner',
    url: 'https://www.carlsberg.com/',
  },
  {
    name: 'SAXO Markets',
    tier: 'main_partner',
    url: 'https://www.home.saxo/',
  },
  {
    name: 'BBC Chartering',
    tier: 'main_partner',
    url: 'https://www.bbc-chartering.com/',
  },
  {
    name: 'Maersk',
    tier: 'main_partner',
    url: 'https://www.maersk.com/',
  },
  {
    name: 'Novo Nordisk',
    tier: 'sponsor',
    url: 'https://www.novonordisk.com/',
  },
  {
    name: 'Grundfos',
    tier: 'sponsor',
    url: 'https://www.grundfos.com/',
  },
  {
    name: 'Hempel',
    tier: 'sponsor',
    url: 'https://www.hempel.com/',
  },
  {
    name: 'ISS',
    tier: 'sponsor',
    url: 'https://www.issworld.com/',
  },
  {
    name: 'TORM',
    tier: 'sponsor',
    url: 'https://www.torm.com/',
  },
  {
    name: 'Norden',
    tier: 'sponsor',
    url: 'https://www.norden.com/',
  },
];
