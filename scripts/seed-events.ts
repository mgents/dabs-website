/**
 * Seed script to insert all past DABS events into Supabase.
 * Run with: npx tsx scripts/seed-events.ts
 */
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('Missing required environment variables: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  console.error('Set them in .env.local or pass them directly.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

function slug(title: string, date: string): string {
  const d = date.slice(0, 7); // YYYY-MM
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    + '-' + d;
}

interface SeedEvent {
  title: string;
  start_datetime: string;
  end_datetime?: string;
  location_name?: string;
  location_address?: string;
  featured_image_url?: string;
  excerpt: string;
  content_html?: string;
  registration_mode?: 'url' | 'email' | 'none';
}

const events: SeedEvent[] = [
  // === 2022 ===
  {
    title: "China's Green Mobility Revolution",
    start_datetime: '2022-10-06T08:00:00+08:00',
    end_datetime: '2022-10-06T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/1664528671018-chinas-green-mobility.png',
    excerpt: "Speaker: Peter Lisbygd. Exploring China's leadership in green mobility and what it means for businesses in the region.",
  },
  {
    title: 'Behavioural Design as a Tool to Drive Change',
    start_datetime: '2022-10-27T08:00:00+08:00',
    end_datetime: '2022-10-27T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/3670a4d2-d5ec-4da8-9b9d-a5b9caa7c86a/behavioral+design.png',
    excerpt: 'Speaker: Jacob Orting Jorgensen (Novo Nordisk). How behavioural design can be used as a strategic tool to drive meaningful change in organisations.',
  },
  {
    title: 'Expat Life -- What Happens Beyond Mobility and Relocation Services?',
    start_datetime: '2022-11-08T08:00:00+08:00',
    end_datetime: '2022-11-08T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/c97056bc-3acd-411d-917f-9203c1392f7c/03884c6a-3118-f69d-e920-d7a437811745.png',
    excerpt: 'Speaker: Kia Holm Reimer. A candid discussion about the personal and professional challenges of expat life beyond the logistics.',
  },
  {
    title: "Women's Cross-Chamber After Work",
    start_datetime: '2022-11-10T18:30:00+08:00',
    end_datetime: '2022-11-10T21:00:00+08:00',
    location_name: 'Le Bar @ Sofitel Sentosa',
    location_address: '2 Bukit Manis Rd, Sentosa, S-099891',
    excerpt: 'Cross-chamber networking event for women professionals. SGD 30 per ticket including one drink and snacks.',
  },
  {
    title: 'Employee Experience (EX) and Culture',
    start_datetime: '2022-11-23T08:00:00+08:00',
    end_datetime: '2022-11-23T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/1123ee9e-420b-4b05-801f-a38676f0c307/70e53c70-6601-91f1-3658-1c1998019162.png',
    excerpt: 'Speaker: Christoffer Erichsen (Human Inc). How companies can build exceptional employee experiences and strong workplace cultures.',
  },
  {
    title: 'Reunification or Other Topics That Matter for You as Danish Abroad',
    start_datetime: '2022-11-23T18:30:00+08:00',
    end_datetime: '2022-11-23T21:30:00+08:00',
    location_name: 'Maersk Singapore Pte Ltd',
    location_address: '1 Paya Lebar Link, #13-01 PLQ1, S-408533',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/ec7b8203-761e-4e20-9a72-ee3525b0bb8b/033047a5-8900-85d9-5a47-2c59ce7a2b59.png',
    excerpt: 'An evening dedicated to important topics for Danes living abroad, hosted together with danes.dk.',
  },
  {
    title: 'World Cup 2022 - Denmark vs France',
    start_datetime: '2022-11-26T20:00:00+08:00',
    end_datetime: '2022-11-27T02:00:00+08:00',
    location_name: "Danish Seamen's Church",
    location_address: '10 Pender Road, S-099171',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/d4f15ffd-79d3-4ab5-a1d1-0192630376fd/3.png',
    excerpt: 'Watch Denmark take on France in the FIFA World Cup 2022 together with the Danish community at the Seamen\u2019s Church.',
  },
  {
    title: "Singapore's Global Talent Strategy",
    start_datetime: '2022-11-28T08:30:00+08:00',
    end_datetime: '2022-11-28T09:30:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/2c960c66-ef00-4329-845f-b1a6e1c8ab54/a24d415c-7121-a89a-4fc2-90241507c1dd.png',
    excerpt: 'Speaker: Mr Shawn Low (Singapore EDB). Insights into how Singapore attracts and retains global talent to fuel its economy.',
  },
  {
    title: 'DABS Christmas Luncheon 2022',
    start_datetime: '2022-12-02T13:00:00+08:00',
    end_datetime: '2022-12-02T17:00:00+08:00',
    location_name: "Danish Seamen's Church",
    location_address: '10 Pender Road, S-099171',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/e479e03b-7a7f-4f42-a391-3bc89fa347e4/b1f93155-546e-fbeb-a841-458f8691a913.png',
    excerpt: 'The annual DABS Christmas celebration with traditional Danish lunch, entertainment, and community spirit. SGD 95 for members.',
  },
  // === 2023 ===
  {
    title: 'Danish Five-A-Side Tournament 2023',
    start_datetime: '2023-01-14T12:00:00+08:00',
    end_datetime: '2023-01-14T17:00:00+08:00',
    location_name: 'Premier Pitch, Turf City (indoor)',
    location_address: '200 Turf Club Road, S-287994',
    excerpt: 'Annual five-a-side football tournament. SGD 350 per team. A great way to kick off the year with sports and networking.',
  },
  {
    title: 'Holistic Leadership to Thrive in the Future',
    start_datetime: '2023-01-19T08:00:00+08:00',
    end_datetime: '2023-01-19T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    excerpt: 'Speaker: Nathalie Coral Lepeltier. Exploring the principles of holistic leadership for thriving in a rapidly changing world.',
  },
  {
    title: 'Cyber-Wellness at Work',
    start_datetime: '2023-02-02T08:00:00+08:00',
    end_datetime: '2023-02-02T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/5b6800d4-af68-40ea-9d60-be4523a45498/354f34e4-f683-050e-4c34-6f436f7eebaf.png',
    excerpt: 'Speaker: Dr. Anuradha Rao. Understanding and promoting cyber-wellness in the modern workplace.',
  },
  {
    title: 'Talent Acquisition Reinvented',
    start_datetime: '2023-03-02T08:00:00+08:00',
    end_datetime: '2023-03-02T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/99d94551-67cb-4c96-8ac6-a3e0fa699142/31a76d02-a307-e695-3673-0de15c5b304d.png',
    excerpt: 'Speaker: Asger Daugbjerg. Fresh approaches to talent acquisition and how companies can reinvent their recruitment strategies.',
  },
  {
    title: 'Annual General Meeting 2023',
    start_datetime: '2023-03-16T18:30:00+08:00',
    end_datetime: '2023-03-16T21:00:00+08:00',
    location_name: "Danish Seamen's Church",
    location_address: '10 Pender Road, S-099171',
    excerpt: 'The annual DABS General Meeting. Review of the past year, election of new committee members, and vision for the year ahead.',
  },
  {
    title: 'Beyond the Breach: Managing Cyber Crises Effectively',
    start_datetime: '2023-03-23T08:00:00+08:00',
    end_datetime: '2023-03-23T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/514bb8d3-953b-4284-b054-862f344243ac/ef8421d1-5c5e-2e54-eab2-d2f0bbce7155.png',
    excerpt: 'Speaker: Cecilie Oerting (Brunswick Group). Practical strategies for managing cyber crises and protecting your organisation\u2019s reputation.',
  },
  {
    title: "Women's Cross-Chamber Afterwork Networking Event",
    start_datetime: '2023-04-18T18:30:00+08:00',
    end_datetime: '2023-04-18T21:00:00+08:00',
    location_name: "L'Espresso Terrace, Goodwood Park Hotel",
    location_address: '22 Scotts Road, S-228221',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/f75ac5bc-6883-41ef-b7ce-9bdd559697e2/fe7f0b93-e8db-e6fa-b24a-6b215ee21fb5.png',
    excerpt: 'Cross-chamber networking event for women professionals. SGD 30 for members only, including drinks and canapes.',
  },
  {
    title: 'Thor is Travelling to EVERY Country in the World WITHOUT Flying!',
    start_datetime: '2023-04-24T19:30:00+08:00',
    end_datetime: '2023-04-24T21:00:00+08:00',
    location_name: "Danish Seamen's Church",
    location_address: '10 Pender Road, S-099171',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/ef446a8e-5a64-43f4-ac77-5d208cb890e7/0735a978-96b3-1392-b874-de9b64a7c37f.png',
    excerpt: 'Speaker: Thorbjorn C. Pedersen. The incredible story of a Dane on a mission to visit every country in the world without taking a single flight.',
  },
  {
    title: 'Celebrating Danish Entrepreneurship in Singapore (Part 1)',
    start_datetime: '2023-05-09T08:00:00+08:00',
    end_datetime: '2023-05-09T09:30:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    excerpt: 'Speakers: Helle Priess, Bjarke Mikkelsen, Kristina Lynge. Part 1 of our entrepreneur month, spotlighting Danish founders in Singapore.',
  },
  {
    title: 'Celebrating Danish Entrepreneurship in Singapore (Part 2)',
    start_datetime: '2023-05-17T08:00:00+08:00',
    end_datetime: '2023-05-17T09:30:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    excerpt: 'Speakers: Peter Lisbygd, Mads Christiansen, Mette Johansson. Part 2 of our entrepreneur month series.',
  },
  {
    title: 'Entrepreneur Month Networking Evening',
    start_datetime: '2023-05-25T18:00:00+08:00',
    end_datetime: '2023-05-25T20:00:00+08:00',
    location_name: '13% Wine Bistro',
    location_address: '123A Telok Ayer Street, #02-01, S-068592',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/46dc820e-6b2c-42c2-a2c6-7769b90558f2/a46aa1d5-4c10-a445-7be0-feba0332e573.png',
    excerpt: 'Closing celebration of DABS Entrepreneur Month. An evening of networking with Danish entrepreneurs and the wider business community.',
  },
  {
    title: 'Marketing Trends in APAC, Embracing the Potential of AI',
    start_datetime: '2023-06-08T08:00:00+08:00',
    end_datetime: '2023-06-08T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    excerpt: 'Speakers: Ben Tuff and Kasper Aakerlund (UM, APAC). How AI is reshaping marketing trends across the Asia-Pacific region.',
  },
  {
    title: 'Novo Nordisk - Look Beyond the Sugar-Control in Diabetes-care',
    start_datetime: '2023-06-12T08:00:00+08:00',
    end_datetime: '2023-06-12T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/2ee91b5a-8ef8-4d8d-9677-8ff75946e42e/d360a03e-1f83-1db3-d6bd-84fccb7433e6.png',
    excerpt: 'Speakers: Elisha Whitfield and Lee Jun Seng (Novo Nordisk). The future of diabetes care and Novo Nordisk\u2019s innovative approaches.',
  },
  {
    title: 'The Future of Banking',
    start_datetime: '2023-08-31T08:00:00+08:00',
    end_datetime: '2023-08-31T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/58959720-7907-41f5-a470-94e754a27b95/91886bac-e42f-044f-2830-46eed55db21a.png',
    excerpt: 'Speaker: Niels Maerkedahl. How banking is evolving with digital transformation, fintech disruption, and changing consumer expectations.',
  },
  {
    title: 'AI and the Future of Communication',
    start_datetime: '2023-09-13T08:00:00+08:00',
    end_datetime: '2023-09-13T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/87d23cd7-f10b-4d76-9a94-330f3089529a/7e948d1b-fcb8-1a44-d786-7a9cef10749c.png',
    excerpt: 'Speaker: Zsofia Balatoni (Rothman & Roman). How artificial intelligence is transforming the communications industry.',
  },
  {
    title: 'Business Leader Network Session',
    start_datetime: '2023-09-29T08:30:00+08:00',
    end_datetime: '2023-09-29T10:00:00+08:00',
    location_name: 'The Warehouse Hotel',
    location_address: '320 Havelock Road, Robertson Quay, S-169628',
    excerpt: 'An exclusive networking session for senior business leaders in the Danish community.',
  },
  {
    title: "Women's Cross-Chamber After Hours",
    start_datetime: '2023-10-03T18:30:00+08:00',
    end_datetime: '2023-10-03T20:30:00+08:00',
    location_name: 'Stamford Brasserie',
    location_address: '2 Stamford Road, S-178882',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/632a4fd2-398a-43a0-92fd-071c35065e75/cross+chamber+03.10.23+2.png',
    excerpt: 'Cross-chamber networking event. SGD 35 including one drink and fingerfood.',
  },
  {
    title: 'DABS Annual Gala 2023',
    start_datetime: '2023-11-04T19:00:00+08:00',
    end_datetime: '2023-11-05T02:00:00+08:00',
    location_name: 'Sofitel Singapore Sentosa',
    location_address: '2 Bukit Manis Road, S-099891',
    excerpt: 'The highlight of the DABS social calendar. An evening of fine dining, entertainment, and celebration with the Danish business community.',
  },
  {
    title: 'DABS Annual Christmas Lunch 2023',
    start_datetime: '2023-12-01T13:00:00+08:00',
    end_datetime: '2023-12-01T17:00:00+08:00',
    location_name: "Danish Seamen's Church",
    location_address: '10 Pender Road, S-099171',
    excerpt: 'Traditional Danish Christmas lunch with all the trimmings. SGD 95 for members, SGD 110 for non-members.',
  },
  {
    title: 'Authentic Self-Leadership to Inspire Teams',
    start_datetime: '2023-12-06T08:00:00+08:00',
    end_datetime: '2023-12-06T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/f1cda3a0-5b1e-49b3-8fb6-87a37778119c/email.png',
    excerpt: "Speaker: Grant 'Upbeat' Bosnick. Discovering how authentic self-leadership can transform the way you lead and inspire your teams.",
  },
  // === 2024 ===
  {
    title: 'Become a LinkedIn Top Voice: Unlock Your Personal Branding Potential',
    start_datetime: '2024-01-26T08:00:00+08:00',
    end_datetime: '2024-01-26T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    excerpt: 'Speaker: Nick Jonsson (EGN). Practical strategies for building your personal brand on LinkedIn and becoming a recognized thought leader.',
  },
  {
    title: 'Keep Playing - Bridging Business and Sports (Part 1)',
    start_datetime: '2024-02-08T08:00:00+08:00',
    end_datetime: '2024-02-08T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/c21a501b-d25f-43f0-b5ea-3ec45251e36c/39be92d0-2653-1076-0805-3e84642cc529.png',
    excerpt: 'Speaker: Asger Daugbjerg. Part 1 of the Keep Playing series exploring the powerful connections between sports performance and business leadership.',
  },
  {
    title: 'Inclusive Visions: #IWD2024 with Mette Johansson',
    start_datetime: '2024-03-04T19:30:00+08:00',
    end_datetime: '2024-03-04T21:30:00+08:00',
    location_name: 'Hollandse Club',
    location_address: '22 Camden Park, S-299814',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/fd52b821-1021-4e99-8b7a-bb8bf7eec535/4bb14741-324b-8904-197c-ec51357b8d99.png',
    excerpt: 'Celebrating International Women\u2019s Day 2024 with Mette Johansson. SGD 20 for DABS members.',
  },
  {
    title: 'Keep Playing - Focus on Individual Performances (Part 2)',
    start_datetime: '2024-03-20T08:00:00+08:00',
    end_datetime: '2024-03-20T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/17805df0-d719-49dc-88ad-db77a38d3d26/37bcdd58-3022-59be-db3e-6c36e743b5a2.png',
    excerpt: 'Speaker: Asger Daugbjerg. Part 2 of the Keep Playing series, focusing on optimising individual performance in business and sport.',
  },
  {
    title: 'DABS Annual General Meeting 2024',
    start_datetime: '2024-03-26T20:00:00+08:00',
    end_datetime: '2024-03-26T20:45:00+08:00',
    location_name: 'Zoom (Virtual)',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/7c7786b5-909f-4f47-8333-2dbf3fb91937/3.png',
    excerpt: 'The 2024 DABS Annual General Meeting. Review of the past year, financial report, election of committee members.',
  },
  {
    title: 'Keep Playing - Focus on Disruptive Performances (Part 3)',
    start_datetime: '2024-04-17T08:00:00+08:00',
    end_datetime: '2024-04-17T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/6892598f-ee9c-40ad-a5a3-6a9ded45f8dd/f0cb080f-7bd7-e248-90a5-ce2267c53e2f.png',
    excerpt: 'Speaker: Asger Daugbjerg. Part 3 of the Keep Playing series exploring how disruptive thinking creates breakthroughs in business.',
  },
  {
    title: 'After Work Drinks with DABS (April 2024)',
    start_datetime: '2024-04-25T18:00:00+08:00',
    end_datetime: '2024-04-25T21:00:00+08:00',
    location_name: 'The Stamford Brasserie',
    location_address: 'Level 1, Swissotel The Stamford, 2 Stamford Road, S-178882',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/ca5c052e-9b6f-4464-8683-0c4cb2c0ee14/00ebe9fb-4f78-ff22-aafc-06bf2a3e465f.png',
    excerpt: 'Casual after-work drinks and networking with the DABS community. Open to members and non-members.',
  },
  {
    title: 'Orsted & CIP on Renewable Energy and Offshore Wind Farms',
    start_datetime: '2024-05-08T08:00:00+08:00',
    end_datetime: '2024-05-08T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/fd183008-b9ec-4dea-b636-5ba7cffcd266/ea6f77fc-30d9-ef2a-5329-4e60c332fb36.png',
    excerpt: 'Speakers: Poul Reitzel (Orsted) and Michael Valdorf (CIP). Danish leadership in renewable energy and offshore wind development.',
  },
  {
    title: 'Develop Your Leadership Voice',
    start_datetime: '2024-05-29T08:00:00+08:00',
    end_datetime: '2024-05-29T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/0682ed2a-a537-4098-854c-da50409d6807/b84c26bd-aa8e-d376-697e-d597236d9935.png',
    excerpt: 'Speaker: Cynthia Zhai. How to develop a commanding leadership voice that inspires confidence and drives action.',
  },
  {
    title: 'Get Hands-on with AI',
    start_datetime: '2024-06-13T08:00:00+08:00',
    end_datetime: '2024-06-13T09:30:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/e25ade59-9929-440e-9068-590b1e2c15d4/773dea54-22f0-ad8c-7968-babef6fcb116.png',
    excerpt: 'Speaker: Leong Y. (Hyper Island). A hands-on workshop exploring practical AI applications for your business.',
  },
  {
    title: 'The Power of PR and Why It is Priceless',
    start_datetime: '2024-08-22T08:00:00+08:00',
    end_datetime: '2024-08-22T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/83a41f8c-9b02-40a3-b265-3af63e7f9237/8b152369-c0bb-0488-9b6f-d0d8676b7505.png',
    excerpt: 'Speaker: Marina Mathews. Understanding why public relations remains one of the most powerful tools in business strategy.',
  },
  {
    title: 'Welcome Home Party 2024',
    start_datetime: '2024-09-14T16:00:00+08:00',
    end_datetime: '2024-09-14T21:00:00+08:00',
    location_name: "Danish Seamen's Church",
    location_address: '10 Pender Road, S-099171',
    excerpt: 'Welcome back to Singapore! A community celebration to reconnect after the summer. SGD 60 adults, SGD 30 children 6-17, free under 6.',
  },
  {
    title: 'Maximize Your Financial Success as an Expat',
    start_datetime: '2024-09-19T18:00:00+08:00',
    end_datetime: '2024-09-19T19:30:00+08:00',
    location_name: 'Art Works Pte Ltd',
    location_address: '3 Church Street, #24-04, Samsung Hub, S-049480',
    excerpt: 'Speakers: Michael Booth, Batya Shulman, Kia Holm Reimer. Expert advice on financial planning and wealth management for expats.',
  },
  {
    title: 'Cross-Chamber Autumn BBQ 2024',
    start_datetime: '2024-09-27T18:00:00+08:00',
    end_datetime: '2024-09-27T22:00:00+08:00',
    location_name: 'Hollandse Club',
    location_address: '22 Camden Park, S-299814',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/9b19b102-c03f-493c-bad5-f360a113e860/Autumn-BBQ-4.png',
    excerpt: 'Cross-chamber autumn BBQ celebration. DABS members SGD 50, non-members SGD 75.',
  },
  {
    title: 'Roof Top Padel & Sundowners',
    start_datetime: '2024-10-04T18:00:00+08:00',
    end_datetime: '2024-10-04T20:00:00+08:00',
    location_name: 'MBP SPORTS @ Marina Square Mall Rooftop',
    location_address: 'Level 4, 6 Raffles Boulevard, S-039594',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/ae9fcad9-46ac-4180-851d-9cb7dacd824f/170cdbb0-46fe-8aa9-0e60-c9b60dd4dc93.png',
    excerpt: 'Padel and sundowners on the Marina Square rooftop. A fun evening of sport and socialising.',
  },
  {
    title: 'DABS After Work Drinks - Meet The Ambassador',
    start_datetime: '2024-10-09T18:00:00+08:00',
    end_datetime: '2024-10-09T20:00:00+08:00',
    location_name: 'Potato Head Singapore',
    location_address: '36 Keong Saik Road, Chinatown, S-089143',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/ffdb2508-6696-4d04-b572-2115582a19b6/53fa9661-5ad9-4dcf-60dd-4b7f9359fe14.png',
    excerpt: 'After work drinks with the opportunity to meet the Danish Ambassador to Singapore. A unique networking event.',
  },
  {
    title: 'People Over Logos: Discover the Impact of Employee Advocacy',
    start_datetime: '2024-10-24T08:00:00+08:00',
    end_datetime: '2024-10-24T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/57262948-fdc4-4dd2-b7ea-ab12e12659d6/final+3.png',
    excerpt: 'Speaker: Maria LaBelle Maegaard. How employee advocacy drives authentic brand growth and engagement.',
  },
  {
    title: 'Globale Danskere i Singapore',
    start_datetime: '2024-10-29T18:30:00+08:00',
    end_datetime: '2024-10-29T21:30:00+08:00',
    location_name: "Danish Seamen's Church",
    location_address: '10 Pender Road, S-099171',
    excerpt: 'An evening for global Danes in Singapore. Hybrid event in Danish, discussing life and opportunities for Danes abroad.',
  },
  {
    title: 'Exploring Foresight & Regenerative Strategies',
    start_datetime: '2024-11-27T08:00:00+08:00',
    end_datetime: '2024-11-27T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/6b01b521-47c2-4aac-8920-45d1b3812faf/7a4645a0-b69f-65e6-b0bc-3b770840c514.png',
    excerpt: 'Speaker: Dr. Hossein Rezai (Ramboll). How foresight and regenerative strategies can shape sustainable business transformation.',
  },
  {
    title: 'DABS Christmas Lunch 2024',
    start_datetime: '2024-12-06T13:00:00+08:00',
    end_datetime: '2024-12-06T17:00:00+08:00',
    location_name: "Danish Seamen's Church",
    location_address: '10 Pender Road, S-099171',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/4d4faa4a-deed-4e86-a956-b4476b7fe297/f7326d25-d17a-f0bb-7d40-2c58f371bac5.png',
    excerpt: 'The annual DABS Christmas lunch celebration with traditional Danish food, entertainment, and community spirit.',
  },
  {
    title: 'Padel into Christmas with DABS',
    start_datetime: '2024-12-09T19:00:00+08:00',
    end_datetime: '2024-12-09T20:30:00+08:00',
    location_name: 'MBP SPORTS @ Marina Square Mall Rooftop',
    location_address: 'Level 4, 6 Raffles Boulevard, S-039594',
    excerpt: 'A festive padel evening to wrap up the year. DABS Members SGD 25, Non-Members SGD 45.',
  },
  // === 2025 ===
  {
    title: 'After Work Drinks with DABS (January 2025)',
    start_datetime: '2025-01-23T18:00:00+08:00',
    end_datetime: '2025-01-23T21:00:00+08:00',
    location_name: 'Mandala Club Singapore',
    location_address: '31 Bukit Pasoh Rd, S-089845',
    excerpt: 'Start the new year with casual after-work drinks and networking at the Mandala Club.',
  },
  {
    title: "Team Europe Networking Evening: Celebrating 60 Years of Singapore's Success",
    start_datetime: '2025-02-13T18:00:00+08:00',
    end_datetime: '2025-02-13T21:00:00+08:00',
    location_name: 'Embassy of Lithuania',
    location_address: '18 Robinson Rd #10-01, S-048547',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/80ed346f-dbd2-42f5-9446-50b331bd2f56/PHOTO-2025-01-27-12-38-16+%28002%29.jpg',
    excerpt: "A special Team Europe networking evening celebrating Singapore's 60th anniversary of independence.",
  },
  {
    title: 'Danish Five-A-Side Tournament 2025',
    start_datetime: '2025-02-14T19:00:00+08:00',
    end_datetime: '2025-02-14T23:00:00+08:00',
    location_name: 'The Cage Dempsey',
    location_address: '10A Harding Road, S-249549',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/c98a9a41-cae4-4ceb-b23e-ff03d43e5665/2.png',
    excerpt: 'Annual five-a-side football tournament. SGD 350 per team or SGD 50 per individual player.',
  },
  {
    title: 'Exploring How Mastering Communication Provides the Building Blocks to Entrepreneurial Success',
    start_datetime: '2025-02-20T08:00:00+08:00',
    end_datetime: '2025-02-20T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    excerpt: 'How mastering the art of communication lays the foundation for entrepreneurial success in today\u2019s business landscape.',
  },
  {
    title: 'How Culture Shapes Strategy Success',
    start_datetime: '2025-03-04T08:00:00+08:00',
    end_datetime: '2025-03-04T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    excerpt: 'Speaker: Flemming Christensen (THINK ABOUT IT). How organisational culture shapes and drives strategic success.',
  },
  {
    title: "Cross Chamber Networking - International Women's Day 2025",
    start_datetime: '2025-03-06T18:30:00+08:00',
    end_datetime: '2025-03-06T21:00:00+08:00',
    location_name: 'International French School',
    location_address: '3000 Ang Mo Kio Avenue 3, S-569928',
    excerpt: "Celebrating International Women's Day 2025 with cross-chamber networking. Complimentary for members.",
  },
  {
    title: 'The Ultimate Mixed Padel Tournament!',
    start_datetime: '2025-03-05T18:30:00+08:00',
    end_datetime: '2025-03-05T23:00:00+08:00',
    location_name: 'Bugis Padel Court',
    location_address: '190 Middle Road, S-188979',
    excerpt: 'Mixed padel tournament. SGD 30 per ticket. A fun evening of competitive padel and socialising.',
  },
  {
    title: 'DABS Spring Party 2025',
    start_datetime: '2025-03-15T17:30:00+08:00',
    end_datetime: '2025-03-16T00:00:00+08:00',
    location_name: 'Panamericana',
    location_address: '27 Bukit Manis Road, Sentosa, S-099892',
    excerpt: 'The annual DABS Spring Party on Sentosa. An evening of food, drinks, music, and community celebration.',
  },
  {
    title: 'DABS Annual General Meeting 2025',
    start_datetime: '2025-03-19T20:00:00+08:00',
    end_datetime: '2025-03-19T20:45:00+08:00',
    location_name: 'Zoom (Virtual)',
    excerpt: 'The 2025 DABS Annual General Meeting. Review of the past year, financial report, and committee election.',
  },
  {
    title: 'Powerful Strategies for Talent Retention',
    start_datetime: '2025-03-19T08:00:00+08:00',
    end_datetime: '2025-03-19T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/a63857bf-0546-486e-b1e4-4fceb68292e1/2d222fdd-4445-a152-9977-67c49b703f1b.png',
    excerpt: 'Speaker: Cyl Lin. Proven strategies for retaining top talent in a competitive market.',
  },
  {
    title: "Team Europe's Networking Series; March Networking Event!",
    start_datetime: '2025-03-27T18:30:00+08:00',
    end_datetime: '2025-03-27T20:30:00+08:00',
    location_name: 'Polestar Space',
    location_address: '45 Leng Kee Road, S-159103',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/4580c2d0-1ff7-4d62-a50b-d1652f6be849/updated+PHOTO-2025-02-17-18-21-30.jpg',
    excerpt: 'Team Europe networking event at the Polestar Space. SGD 10 per person.',
  },
  {
    title: 'Understanding the Roots of Singapore Culture',
    start_datetime: '2025-04-22T08:00:00+08:00',
    end_datetime: '2025-04-22T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/7c347200-3bab-40fc-b686-760c4907ea87/68be2fbd-2621-46f1-5cea-5808265ccb3b.png',
    excerpt: 'Speaker: Tania Leger. A deep dive into the cultural roots that shape modern Singapore and its business environment.',
  },
  {
    title: 'Real Results with AI',
    start_datetime: '2025-05-15T08:00:00+08:00',
    end_datetime: '2025-05-15T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/df705ff7-bced-40bd-a11a-ea64c671eb27/invite.png',
    excerpt: 'Speaker: Kasper Aakerlund (InvenX). Real-world examples of AI delivering measurable business results.',
  },
  {
    title: 'Royal Side Run Singapore 2025',
    start_datetime: '2025-05-24T09:00:00+08:00',
    end_datetime: '2025-05-24T12:00:00+08:00',
    location_name: "Danish Seamen's Church",
    location_address: '10 Pender Road, S-099171',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/b5f2515a-fb04-4789-a90a-b70a356749f1/37c5564c-b5fb-9418-fb15-e3d9d60ecc1d.png',
    excerpt: 'Join the Royal Side Run Singapore. SGD 60 adults, SGD 35 children 5-12. A community running event.',
  },
  {
    title: 'DABS After Work Drinks (May 2025)',
    start_datetime: '2025-05-28T18:00:00+08:00',
    end_datetime: '2025-05-28T22:00:00+08:00',
    location_name: 'Kult Yard',
    location_address: "195 Pearl's Hill Terrace 01-54, S-168976",
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/3ff8fa36-6484-4297-a95c-8c68dc426945/web.png',
    excerpt: 'Casual after-work drinks and networking at Kult Yard.',
  },
  {
    title: 'The AI Shortcut: Find Your First Use Case and Make It Count',
    start_datetime: '2025-06-03T08:00:00+08:00',
    end_datetime: '2025-06-03T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/0385bf25-bd8b-4f06-a6d2-5302ed0fcbb9/57cf03b0-f34f-f32b-27ca-84f13d271e00.png',
    excerpt: 'Speaker: Martin Gents (Usekase.ai). A practical guide to identifying and implementing your first AI use case.',
  },
  {
    title: 'Fund the Development Of Global Talent, Locally',
    start_datetime: '2025-06-12T18:00:00+08:00',
    end_datetime: '2025-06-12T19:30:00+08:00',
    location_name: 'Huone Singapore',
    location_address: '3d River Valley Rd, #03-01 Block D, S-179023',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/beb5854f-9fd7-4cff-b7ec-9ac395707630/invite.png',
    excerpt: 'Strategies and insights on funding global talent development at the local level.',
  },
  {
    title: "Team Europe's Networking Series; July Networking Event!",
    start_datetime: '2025-07-03T18:30:00+08:00',
    end_datetime: '2025-07-03T20:30:00+08:00',
    location_name: 'Raffles Courtyard',
    location_address: '1 Beach Rd, S-189673',
    excerpt: 'Team Europe networking at the iconic Raffles Courtyard. SGD 30 per person.',
  },
  {
    title: 'DABS After Work Drinks (September 2025)',
    start_datetime: '2025-09-17T18:00:00+08:00',
    end_datetime: '2025-09-17T22:00:00+08:00',
    location_name: 'Kult Yard',
    location_address: "195 Pearl's Hill Terrace 01-54, S-168976",
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/6881538d-f9c7-4e5c-ae25-902f0dcc3e3b/Poster.png',
    excerpt: 'Casual after-work drinks and networking at Kult Yard.',
  },
  {
    title: "Navigating Singapore's Green Horizon: Practical Sustainability for Companies",
    start_datetime: '2025-09-25T08:00:00+08:00',
    end_datetime: '2025-09-25T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    excerpt: 'Speaker: Sarah Katz (We.do Advice). Practical approaches to sustainability for companies operating in Singapore.',
  },
  {
    title: 'Team Europe Networking - Salvador Dali: The Argillet Collection',
    start_datetime: '2025-09-30T19:00:00+08:00',
    end_datetime: '2025-09-30T21:30:00+08:00',
    location_name: 'Bruno Gallery',
    location_address: 'Tanglin Road 91 #01-03, S-247918',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/d6f9d51b-d387-4d21-8126-370fd8330077/sep+networking.jpg',
    excerpt: 'Team Europe networking evening at the Salvador Dali exhibition at Bruno Gallery.',
  },
  {
    title: 'Global Danes in Malaysia and Singapore - Webinar',
    start_datetime: '2025-10-09T19:30:00+08:00',
    end_datetime: '2025-10-09T21:00:00+08:00',
    location_name: 'Online Webinar',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/55587db0-3196-4a47-a7b3-875010309a5e/Poster+test.jpg',
    excerpt: 'Online webinar for global Danes in Malaysia and Singapore to connect, share experiences, and network.',
  },
  {
    title: 'EuroCham Sustainability Awards 2025 Gala Dinner',
    start_datetime: '2025-10-16T18:30:00+08:00',
    end_datetime: '2025-10-16T22:00:00+08:00',
    location_name: 'Grand Hyatt Singapore',
    location_address: '10 Scotts Road, S-228211',
    excerpt: 'The EuroCham Sustainability Awards gala dinner recognising outstanding sustainability efforts by European companies in Singapore.',
  },
  {
    title: "Women's Cross-Chamber AW @ Raffles Sentosa",
    start_datetime: '2025-10-30T18:30:00+08:00',
    end_datetime: '2025-10-30T21:30:00+08:00',
    location_name: 'Raffles Sentosa Singapore',
    location_address: '4 Bukit Manis Road, Sentosa, S-099947',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/cca6dcb5-7971-4b6f-ab20-2e9a664207dd/Women+AW+30+October_.jpg',
    excerpt: "Women's cross-chamber after work at Raffles Sentosa. SGD 50 includes one beverage and canapes.",
  },
  {
    title: 'Explore the Power of the LEGO Brick',
    start_datetime: '2025-11-21T08:00:00+08:00',
    end_datetime: '2025-11-21T09:30:00+08:00',
    location_name: 'The LEGO Group',
    location_address: '38 Beach Road, #13-11 South Beach Tower, S-189767',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/fc171580-1350-4079-ae5d-b0923a877da2/final+c269510b-78ce-9f5c-de35-d314a5677cef.png',
    excerpt: 'A special morning at The LEGO Group offices exploring how the power of the LEGO brick drives creativity and innovation.',
  },
  {
    title: 'DABS Christmas Lunch 2025',
    start_datetime: '2025-12-05T13:00:00+08:00',
    end_datetime: '2025-12-05T18:00:00+08:00',
    location_name: "Danish Seamen's Church",
    location_address: '10 Pender Road, S-099171',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/148a6622-20b6-4a48-ad7a-81e41f3264f4/invite1.png',
    excerpt: 'The annual DABS Christmas lunch. SGD 70 for members, SGD 90 for non-members. Fully booked!',
  },
  // === 2026 (past as of Feb 6) ===
  {
    title: "You Won't Believe What You Can Learn About Business in an Escape Room",
    start_datetime: '2026-01-15T08:00:00+08:00',
    end_datetime: '2026-01-15T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: 'https://images.squarespace-cdn.com/content/v1/5b835443b27e39394b6036bc/9dc26ede-ee0e-4859-b74c-391091aec6f7/mailchimp.png',
    excerpt: 'Speaker: Brian Slattery (Teamwork Unlocked). Surprising business lessons from the world of escape rooms.',
  },
  // === 2026 upcoming events ===
  {
    title: "Saxo's Outrageous Predictions",
    start_datetime: '2026-02-10T08:00:00+08:00',
    end_datetime: '2026-02-10T09:00:00+08:00',
    location_name: 'Saxo Markets Singapore',
    location_address: '88 Market Street, CapitaSpring #31-01, S-048948',
    featured_image_url: '/assets/migrated/events/saxo-predictions.png',
    excerpt: "Saxo's annual Outrageous Predictions for the year ahead. What bold and unexpected scenarios could shape markets and the world?",
  },
  {
    title: 'DABS After Work Drinks (February 2026)',
    start_datetime: '2026-02-26T18:00:00+08:00',
    end_datetime: '2026-02-26T22:00:00+08:00',
    location_name: 'TBD',
    featured_image_url: '/assets/migrated/events/after-work-drinks.png',
    excerpt: 'Casual after-work drinks and networking with the DABS community.',
  },
  {
    title: 'DABS Spring Party 2026',
    start_datetime: '2026-03-14T17:30:00+08:00',
    end_datetime: '2026-03-15T00:00:00+08:00',
    location_name: 'TBD',
    featured_image_url: '/assets/migrated/events/spring-party-2026.png',
    excerpt: 'The annual DABS Spring Party. An evening of food, drinks, music, and community celebration.',
  },
];

async function seed() {
  console.log(`Seeding ${events.length} events...`);

  // First, check for existing events to avoid duplicates
  const { data: existing } = await supabase.from('events').select('slug');
  const existingSlugs = new Set((existing || []).map((e: { slug: string }) => e.slug));

  let inserted = 0;
  let skipped = 0;

  for (const event of events) {
    const eventSlug = slug(event.title, event.start_datetime);

    if (existingSlugs.has(eventSlug)) {
      console.log(`  SKIP (exists): ${event.title}`);
      skipped++;
      continue;
    }

    const { error } = await supabase.from('events').insert({
      title: event.title,
      slug: eventSlug,
      start_datetime: event.start_datetime,
      end_datetime: event.end_datetime || null,
      location_name: event.location_name || null,
      location_address: event.location_address || null,
      featured_image_url: event.featured_image_url || null,
      excerpt: event.excerpt,
      description: event.excerpt,
      is_published: true,
    });

    if (error) {
      console.error(`  ERROR: ${event.title} - ${error.message}`);
    } else {
      console.log(`  OK: ${event.title}`);
      inserted++;
    }
  }

  console.log(`\nDone! Inserted: ${inserted}, Skipped: ${skipped}, Total: ${events.length}`);
}

seed().catch(console.error);
