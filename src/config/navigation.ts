export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavSection {
  title: string;
  href?: string;
  items?: NavItem[];
}

export const mainNavigation: NavSection[] = [
  {
    title: 'About',
    items: [
      { title: 'About DABS', href: '/about', description: 'Learn about our organization' },
      { title: 'Committee', href: '/about/committee', description: 'Meet our leadership team' },
      { title: 'Partners', href: '/about/partners', description: 'Our partner organizations' },
    ],
  },
  {
    title: 'Events',
    href: '/events',
  },
  {
    title: 'Membership',
    items: [
      { title: 'Member Benefits', href: '/membership/benefits', description: 'Explore membership advantages' },
      { title: 'Current Benefits', href: '/membership/member-benefits', description: 'Current member benefit providers' },
      { title: 'Join DABS', href: '/membership/join', description: 'Become a member today' },
      { title: 'Members Directory', href: '/membership/directory', description: 'Browse our member directory' },
    ],
  },
  {
    title: 'Sponsorship',
    items: [
      { title: 'Become a Sponsor', href: '/sponsorship', description: 'Partner with DABS' },
      { title: 'Our Sponsors', href: '/sponsorship/sponsors', description: 'See our current sponsors' },
      { title: 'Sponsor Inquiry', href: '/sponsorship/apply', description: 'Submit a sponsorship inquiry' },
    ],
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const footerNavigation = {
  about: [
    { title: 'About DABS', href: '/about' },
    { title: 'Committee', href: '/about/committee' },
    { title: 'Partners', href: '/about/partners' },
  ],
  membership: [
    { title: 'Benefits', href: '/membership/benefits' },
    { title: 'Join DABS', href: '/membership/join' },
  ],
  sponsorship: [
    { title: 'Become a Sponsor', href: '/sponsorship' },
    { title: 'Our Sponsors', href: '/sponsorship/sponsors' },
  ],
  legal: [
    { title: 'Articles of Association', href: '/legal/articles' },
    { title: 'Privacy Statement', href: '/legal/privacy' },
  ],
};

export const contactInfo = {
  address: 'c/o Royal Danish Embassy, 101 Thomson Road, #13-01/02 United Square, Singapore 307591',
  email: 'dabs@dabs-singapore.com',
  phone: '+65 9144 6272',
  linkedin: 'https://www.linkedin.com/company/danish-business-association-singapore',
  facebook: 'https://www.facebook.com/DABSingapore',
};
