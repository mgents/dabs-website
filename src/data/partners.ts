export interface Partner {
  name: string;
  description?: string;
  logo?: string;
  url: string;
  category: 'diplomatic' | 'community' | 'nordic' | 'european';
}

export const partners: Partner[] = [
  {
    name: 'Royal Danish Embassy Singapore',
    description: 'Official diplomatic representation of Denmark in Singapore. DABS is hosted at the Embassy premises.',
    logo: '/assets/migrated/partners/royal-danish-embassy.png',
    url: 'https://singapore.um.dk/en/about-us/',
    category: 'diplomatic',
  },
  {
    name: 'Danish Seamens Church Singapore',
    description: 'Religious and community organization serving Danish seafarers and the Danish community in Singapore.',
    logo: '/assets/migrated/partners/danish-seamens-church.png',
    url: 'https://www.churchsg.dk/',
    category: 'community',
  },
  {
    name: 'Danes.dk',
    description: 'Danish advocacy and community engagement platform connecting Danes abroad.',
    logo: '/assets/migrated/partners/danes-dk.webp',
    url: 'https://www.danes.dk/en/advocacy/',
    category: 'community',
  },
  {
    name: 'EuroCham Singapore',
    description: 'The European Chamber of Commerce in Singapore, representing European business interests in Singapore and the region.',
    logo: '/assets/migrated/partners/eurocham.png',
    url: 'https://eurocham.org.sg/who-we-are/',
    category: 'european',
  },
  {
    name: 'Nordic Business Association in Singapore (NBAS)',
    description: 'Umbrella organization for Nordic business associations in Singapore, fostering collaboration between Nordic business communities.',
    logo: '/assets/migrated/partners/nbas.jpg',
    url: 'https://nbas.org.sg/',
    category: 'nordic',
  },
  {
    name: 'Finnish-Baltic Chamber Singapore (FBCSG)',
    description: 'Chamber representing Finnish and Baltic business communities in Singapore.',
    logo: '/assets/migrated/partners/fbcsg.png',
    url: 'https://www.fbcsg.org/',
    category: 'nordic',
  },
  {
    name: 'Swedish Chamber of Commerce Singapore',
    description: 'Swedish business chamber promoting trade and investment between Sweden and Singapore.',
    logo: '/assets/migrated/partners/swedcham.png',
    url: 'https://www.swedcham.sg/',
    category: 'nordic',
  },
];

export const partnerCategories = {
  diplomatic: 'Diplomatic Partners',
  community: 'Community Partners',
  nordic: 'Nordic Business Associations and Chambers in Singapore',
  european: 'European Chamber',
};
