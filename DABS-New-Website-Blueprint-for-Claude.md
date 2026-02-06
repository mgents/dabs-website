# DABS New Public Website — Build Blueprint + Exact Ported Copy (for Claude Code)

> **Context (from our chat)**  
> You are building a *new* public website for **Danish Business Association of Singapore (DABS)** to replace the current site (**dabs-singapore.com**).  
> Requirement: **port and reuse all existing content** so visitors can still find everything that existed before (even if presented with a new IA and UI).  
> The new site should be **highly engaging yet calm**, inspired by world-class chambers/associations websites (e.g., **Swedish Chamber of Commerce Singapore** / Glue Up patterns). citeturn9search2turn9search6turn9search3  
> Must include: About + board/committee, Events + event details, **admin login** for event management, member value prop + sign-up, sponsor/partner value prop + sign-up, and a general contact form.

---

## 1) Research takeaways to apply (design + narrative + functionality)

### 1.1 What “best-in-class” chamber sites do well (storytelling + IA)
Use the following *proven* structure seen in highly effective chamber sites (notably Glue Up–powered sites and leading chamber sites):
- Immediate “what this is” clarity (who you serve + why it matters) + 1–2 primary CTAs (Join / Events). citeturn9search2turn9search0  
- Always-visible conversion paths: **Memberships**, **Events**, **Contact**, optional **Subscribe**. citeturn9search2turn9search9  
- Credibility blocks: partner logos, sponsors, committee faces, governance docs. (DABS already has all of these across pages.) citeturn4view5turn4view9turn6view3  
- “Content narrative” built around:
  - Community & networking  
  - Events & learning  
  - Business bridge between countries  
  - Credibility through governance + partners  
  - Clear membership/sponsorship value propositions

### 1.2 Must-have engagement functionality (public + admin)
From Glue Up and top chamber implementations:
- Public: browse events, event registration CTA, membership tiers, sponsor tiers, contact + newsletter subscribe. citeturn9search2turn9search12turn9search0  
- Admin: secure login, create/edit events, publish to public listing, manage event metadata and hero images.

---

## 2) Technical approach recommendation (to achieve the “interactive web-app” feel)

### Option A (Recommended): Modern custom site + lightweight admin (fast + flexible)
- Frontend: **Next.js** (App Router) + Tailwind + shadcn/ui
- Content: Markdown/MDX for static pages + a simple CMS layer for Events
- Events Admin: either  
  1) **Supabase** (auth + table + storage) OR  
  2) **Payload CMS** (self-hosted) OR  
  3) **Sanity** (hosted)  
- Benefits: pixel-perfect UI, high performance, easy future evolution.

### Option B: Glue Up-based public experience (lowest effort, but less custom)
- Pros: integrated membership/event workflows quickly (patterns proven). citeturn9search2turn9search9  
- Cons: design flexibility and “brand calm premium” polish may be constrained.

**Build spec below assumes Option A**, while borrowing Glue Up interaction patterns.

---

## 3) Information Architecture (IA) — new sitemap (all old content preserved)

### Primary navigation
1. **Home**
2. **Events**
   - Events (listing)
   - Event detail (template)
   - Gallery
3. **Membership**
   - Member Benefits (general)
   - **Member Benefits** (NEW: “Member Benefits” page with current benefits + CTA to contact DABS)
   - Become a Member (sign up / payment instructions)
   - Our Members (directory)
4. **Sponsorship**
   - Become a Sponsor
   - Our Sponsors
5. **About**
   - Welcome (Who We Are)
   - About DABS
   - Committee
   - Our Partners
6. **Governance**
   - Articles of Association
   - Privacy Statement
7. **Contact**

> Note: Existing footer currently links **home | articles | events | contact | privacy statement**. Keep that in the new footer. citeturn4view1turn4view7

---

## 4) Global layout + design system (implementation-ready)

### 4.1 Page shell
- Sticky header with primary nav + 1 dominant CTA button: **“Join DABS”**
- Secondary CTA in header (text link): **“See Events”**
- Footer:
  - Quick links (home/articles/events/contact/privacy statement)
  - Office address + email + phone
  - Social icons (LinkedIn, Facebook)

### 4.2 Visual design direction (calm + premium + Scandinavian)
- Use lots of whitespace, generous section padding (desktop 96–120px vertical), clean typography, subtle motion.
- Micro-interactions:
  - hover elevation on cards
  - underline transitions on links
  - event cards animate-in on scroll
- Imagery:
  - Prefer authentic DABS photography from Gallery for credibility and warmth. citeturn5view10turn3view10
  - Use existing hero images from current site where available.

### 4.3 Typography & palette (recommendations to implement)
> The current DABS site doesn’t expose its typefaces reliably in the extracted text; implement a modern, credible system:
- Typeface: **Inter** (default UI), headings: **Manrope** or **DM Sans**
- Palette (Scandinavian calm + Danish cues):
  - Off-white background
  - Deep navy text
  - Accent red (very sparingly, nod to Denmark)
  - Soft gray borders

*(If you prefer to match SwedCham’s “clean corporate” feel, keep headings bold, tight line-height, and strong CTA buttons.) citeturn9search6turn9search3*

---

## 5) Component library (Claude should implement these as reusable components)

### 5.1 Core components
- `Hero` (title, subtitle, background image, primary CTA, secondary CTA)
- `SectionHeader` (eyebrow, title, subtitle)
- `CardGrid` (for benefits, CTAs, partners)
- `EventCard` (image, date/time, title, tags, CTA)
- `LogoWall` (sponsors, partners, members)
- `ProfileCard` (committee)
- `NewsletterSubscribe` (email input, success message)
- `ContactForm` (name, email, company, message)

### 5.2 Event admin components
- `AdminLayout` (left nav: Events)
- `EventEditor` form:
  - title, summary, date, time, venue, map link
  - body (rich text or MD)
  - hero image upload
  - registration CTA label + URL
  - publish toggle
- `EventListAdmin` (table view, edit, delete, publish)

---

## 6) Data models (for Event CMS)

### 6.1 Event
- `id` (uuid)
- `title` (string)
- `slug` (string)
- `startsAt` (datetime)
- `endsAt` (datetime, optional)
- `timezone` (default Asia/Singapore)
- `locationName` (string)
- `locationAddress` (string optional)
- `registrationUrl` (string)
- `registrationLabel` (default “Register”)
- `heroImage` (url)
- `body` (rich text or md)
- `isPublished` (bool)
- `createdAt`, `updatedAt`

### 6.2 Admin user
- email/password or SSO, role = `admin`

---

## 7) Page-by-page build spec + **EXACT PORTED COPY** (from current DABS site)

> **Important:** All text below is sourced from the current website pages and should be ported verbatim unless noted. Citations point to the source extract.

---

# PAGE: Home (`/`)

## Purpose
Fast credibility + immediate CTAs + upcoming events + proof (partners/sponsors).

## Hero
- Background image: `Screenshot 2024-11-04 at 10.25.21 AM.png` citeturn3view12  
- H1: `home` citeturn3view12  
- Primary CTA button: `Become a Member` citeturn3view12  

## Section: Upcoming Events
- H2: `Upcoming Events` citeturn3view12  
- Content source: existing Events feed (currently visible on home).  
- Implementation: show next 3 published events with “See all events”.

## Section: Value pillars (3 cards)
> Only one pillar’s copy appears in the extract; keep the full set consistent with the current site design.  
- Card title: `Local business support` citeturn3view13  
- Card body: `Get expert guidance, resources, and advice to navigate Singapore’s business landscape successfully.` citeturn3view13  
- Card CTA text: `Learn More` citeturn3view13  

## Section: Sponsor gratitude
- Heading: `A heartfelt thank you to all our Main Partners and Sponsors` citeturn3view13  
- Subheading: `DABS Main Partners` citeturn3view13  
- Display: logo wall sourced from `/our-sponsors` page. citeturn4view5  

---

# PAGE: Events listing (`/new-events`)

## Page header
- H1: `Events` citeturn5view7  
- H2: `Upcoming Events` citeturn5view7  

## Event listing behaviour
- Show Upcoming / Past tabs.
- Each event card includes:
  - image
  - start datetime
  - title
  - “View Event →” CTA (existing label) citeturn5view8

## Inline promo (existing)
- `Do you want to enjoy all DABS seminars and events in 2025 for only SGD150? Sign up for DABS Membership today!` citeturn5view8turn5view9  
*(Keep as an inline banner block; allow update later via CMS.)*

---

# PAGE: Gallery (`/gallery`)

## Page header
- H1: `Gallery` citeturn5view10  

## Structure
- Event album headings (example shown):
  - `DABS CHRISTMAS LUNCH 2025` citeturn5view10  
- Each album is a grid of existing uploaded images (use current URLs). citeturn5view10turn3view11  

---

# PAGE: Member Benefits (general) (`/members-benefits`)

## Page header
- H1: `Member Benefits` citeturn3view1  
- H2: `Your member benefits` citeturn3view1  

## Intro paragraph (exact)
`At DABS, we bring Danish professionals and companies together to create a thriving community in Singapore. Through networking opportunities, exclusive events, and collaborative partnerships, we provide a platform that helps you connect, learn, and grow.` citeturn3view1  

## Section title
- `Here is what a membership will bring you:` citeturn3view1  

## Benefit blocks (exact)
### Networking
`Meet industry leaders, other chambers, Danish professionals, and over 200 Danish companies to expand your connections.` citeturn5view0  

### Exclusive events
`Join our 25+ annually events from` citeturn5view0  
Bullets: citeturn3view2  
- `Breakfast talks`  
- `Social events and parties (e.g. padel tournament, drinks night and gala)`  
- `Roundtable discussions`  
- `Co-hosted events co-hosted events with other associations and chambers.`  

### Embassy Cooperation (exact)
`The Trade Council is a part of the Ministry of Foreign Affairs and assists Danish and international companies with export and investment promotion services. Our export promotion services include export guidance as well as innovation and internationalization solutions for Danish companies looking to expand abroad.` citeturn5view1  
`Learn more about the Danish Embassy in Singapore and our shared commitment to fostering growth and opportunities.` citeturn5view1  

---

# PAGE: Member Benefits (NEW: “current benefits + contact CTA”) (`/member-benefits`)

> **User requirement update:** do **not** show provider sign-up or pricing.  
> Instead, show *current available benefits* and at the bottom ask: “Are you interested to become a provider of benefits to DABS member, contact us” with a CTA button.

## Page header (new)
- H1: `Member Benefits`
- H2: `Current member benefits`

## Content area
- Render benefits as cards:
  - Provider logo
  - short description
  - “Benefit” line (e.g., discount / privilege)
- Data source for now: **static JSON/MD** file so you can easily update without engineering.

## Bottom CTA (exact question required)
`Are you interested to become a provider of benefits to DABS member, contact us`  
CTA button: `Contact us` → `/contact`

---

# PAGE: Become a Member (`/sign-up-1`)

## Page header
- H1: `Sign Up` citeturn3view3  
- H2: `Join the DABS Community` citeturn3view3  

## Intro paragraph (exact)
`Become part of DABS and connect with a vibrant network of Danish professionals and businesses in Singapore. Your membership supports Danish business interests, builds strong Singapore-Denmark ties, and opens doors to inspiring events, networking, and valuable resources.` citeturn3view3  

## Instruction paragraph (exact)
`To apply, fill out the form below and submit your membership payment (Student Membership is free). We look forward to welcoming you to the DABS community!` citeturn3view3  

## Membership tiers (existing + NEW Startup tier)

### Corporate Membership: (exact)
`Covers all employees and their partners. Open to all companies, with an annual fee of SGD 1500.` citeturn3view4  

### Individual Membership: (exact)
`Covers one member and their spouse, open to all nationalities, with an annual fee of SGD 150.` citeturn3view4  

### Student Membership: (exact)
`For Danish nationals enrolled at an educational institution in Singapore. Covers one student and is free of charge.` citeturn4view0  

### Start-up Member (NEW tier — approved today)
**Start-up Member**  
For early-stage companies building and growing their business.  
Designed for small teams who want visibility, connections, and access to the Danish–Singaporean business and innovation network.  
**Price:** SGD 380 per year  
**Eligibility:** Companies with up to 5 employees  

**Who this is for**  
Start-ups that are:  
- Early-stage or newly established  
- Actively building customers, partnerships, and market presence  
- Looking to connect with corporates, investors, and the wider Danish and Singaporean business ecosystem  

This tier sits between Individual and Corporate membership — giving young companies a professional presence inside the DABS community without the commitment of a full corporate partnership.  

**What you get**  
Company Visibility  
- Your start-up is profiled through DABS events and community activities (e.g. join panels, fireside chats, and pitch sessions)  

Team & Spouse Access  
- Up to 5 employees receive access to DABS and partner events  
- Spouses of those employees are also welcome at DABS events (up to 5 additional participants)  

Ecosystem Positioning  
- Be represented as a company — not just as individuals — within the Danish–Singaporean business network  

**Why this tier exists**  
The Start-up Membership gives young companies:  
- Credibility in a cross-border business community  
- Visibility without large marketing spend  
- Access to potential clients, partners, and collaborators  
- A clear pathway into future Corporate Membership  

It enables DABS to support emerging businesses while strengthening the bridge between Denmark and Singapore.

## Validity note (exact)
`Please note that the membership fee is per calendar year, valid from January 1 to December 31. This gives you access to all DABS benefits for the year.` citeturn4view0  

## Payment (exact)
- `Pay by PayNow: (Kindly add name and invoice no. to the payment)` citeturn4view0  
- Bank transfer details (exact): citeturn4view1  
  - Danish Business Association of Singapore  
  - Bank: DBS  
  - Bank Code: 7171  
  - Branch code: 001  
  - Account no: 001-021939-1  
  - Swift number: DBSSSGSG  

## Consent (exact)
`By paying the membership you consent to the privacy statement` citeturn4view1turn7view0  

## Form
- Implement “application form” on this page (fields: name, email, company, membership tier, message)
- After submit: thank you + show payment instructions and links.

---

# PAGE: Our Members (`/our-members`)

## Page header
- H1: `Our Members` citeturn3view9  
- H2: `Corporate Members` citeturn3view9  

## Member list (exact, as currently displayed via links + some logos)
Links shown include (in order from extract): citeturn3view9turn5view6turn10view0  
- atya.sg  
- bbc-chartering.com  
- carlsberg.com  
- denjet.com  
- singapore.um.dk  
- gess.sg  
- grundfos.com  
- hempel.com  
- sg.issworld.com  
- lauritzenbulkers.com  
- lundbeck.com  
- maersk.com  
- mediatrack.sg  
- norden.com  
- novonesis.com  
- novonordisk.sg  
- sebgroup.com  
- torm.com  
*(Plus additional members represented as images/logos present on the page.)*

## Implementation
- Convert to a searchable directory grid.
- Keep existing link destinations.
- Where the current site uses images only, reuse those image assets.

---

# PAGE: Become a Sponsor (`/sponsor`)

## Page header (exact)
- H1: `Sponsor` citeturn10view2  
- H2: `Become DABS Sponsor` citeturn10view2  

## Intro paragraph (exact)
`Join an elite group of companies such as Carlsberg, SAXO Markets, BCC Chartering, Mærsk, and many other fantastic organizations as a DABS sponsor. A DABS sponsorship is the perfect way for businesses in Singapore to elevate their presence and network within the Danish and international business community. As a DABS sponsor, there is a multitude of opportunities to get in touch with the Danish community.` citeturn10view2  

## Section title (exact)
`Your Sponsorship Benefits` citeturn10view2  

## Benefits list (exact)
### Expand your network citeturn10view2  
- `Connect with over 200 Danish-owned companies and international partners.`  
- `Meet key decision-makers through high-profile business and social events.`  

### Exclusive event access citeturn10view2  
- `Participate in a wide range of events, from roundtable discussions to business seminars, sports events, and social gatherings.`  
- `In 2024, we hosted over 30 successful events, bringing together professionals from diverse industries – and your company can offer employees get an opportunities to connect with Danish and international professionals.`  

### Valuable business insights citeturn10view2  
- `Attend expert-led seminars and workshops on relevant topics.`  
- `Gain strategic insights to support your company’s growth and expansion.`  

### Representation citeturn10view2  
- `Benefit from DABS’ affiliation with EuroCham and the Danish Royal Embassy, which advocates for the European business community and promotes bilateral trade.`  
- `Leverage our close cooperation with The Trade Council to expand your business reach.`  

### Cultural and social engagement citeturn10view2  
- `Celebrate Danish traditions, including our annual Christmas lunch and other cultural events.`  
- `Strengthen connections through community-building activities for members.`  

### Support for entrepreneurs and startups citeturn10view2  
- `Receive guidance on launching and growing your business in Singapore.`  
- `Get access to key networks and mentorship opportunities`  

## Sponsorship levels (existing)
- Section title: `Two sponsorship levels available` citeturn10view4  
- Two images represent the level details (reuse existing). citeturn10view4  

## Validity note (exact)
`Please note that the sponsorship is valid per calendar year, from January 1 to December 31. To become a sponsor, complete the form below and submit your payment. We look forward to collaborating with you!` citeturn10view4  

## Payment block (exact)
- `Pay by PayNow:` citeturn10view4  
- Bank transfer details (exact): citeturn10view4  
  - Danish Business Association of Singapore  
  - Bank: DBS  
  - Bank Code: 7171  
  - Branch code: 001  
  - Account no: 001-021939-1  
  - Swift number: DBSSSGSG  

---

# PAGE: Our Sponsors (`/our-sponsors`)

## Page header
- H1: `Our Sponsors` citeturn4view5  

## Structure (exact headings)
- `Main Partners` citeturn4view5  
- `Sponsors` citeturn4view5  

## Implementation
- Use a logo wall grid for each category.
- Preserve existing outgoing links (e.g., Carlsberg link shown). citeturn4view5  

---

# PAGE: Welcome (Who We Are) (`/welcome-to-dabs`)

## Page header
- H1: `Who We Are` citeturn6view1  
- H2: `Welcome to DABS` citeturn6view1  

## Body copy (exact)
`The Danish Business Association of Singapore (DABS), initiated by the Royal Danish Embassy and established in the autumn of 1983 by a group of dynamic Danish businessmen, was officially registered on 27 January 1984.` citeturn6view1  

`The Association's main objectives are to actively contribute to the business developments between Singapore and Denmark and to contribute to their members' interests and development of their organisations.` citeturn6view1  

`DABS, an association of Danish business activities in Singapore, are a co-operative body with a source of ideas and information for its members. DABS also acts as an important link to other business associations in Singapore as well as the neighbouring countries. DABS frequently organises and sponsors presentations for its members to share valuable information and experiences.` citeturn6view1  

`The Executive Committee of DABS is made up of members with a strong commitment to the objectives of DABS and the Annual Elections ensure this.` citeturn6view1  

`The Committee meets once a month. Members are invited to about 10 DABS functions annually. Relevant breakfast, lunch & evening presentations as well as a number of social gatherings and entertainment vary the topics for spouses and guests. DABS is very much alive and provides an important support function for Danish businesses in Singapore` citeturn6view1  

---

# PAGE: About DABS (`/about-1`)

## Page header
- H1: `About DABS` citeturn4view9  
- Greeting (exact): `Hej! Hello!` citeturn4view9  
- Subheading (exact): `Welcome to The Danish Business Association of Singapore – DABS.` citeturn4view9  

## Body copy (exact)
`The Danish Business Association of Singapore (DABS) is the beating heart of the Danish business community in Singapore. We bring together Danish companies and professionals, creating a platform to exchange insights, foster collaboration, and navigate the Asian business landscape.` citeturn4view9  

---

# PAGE: Committee (`/committee`)

## Intro line (exact)
`Get to know each of our members, explore their LinkedIn profiles by clicking their picture, and connect with the individuals driving DABS forward.` citeturn4view11  

## Committee members (exact names + titles shown in extract)
- Johan Aksel Bergendorff — `DABS PRESIDENT Managing Director` citeturn4view11  
- Jakob Brix Tange — `DABS HONORARY PRESIDENT Ambassador of Denmark to Singapore, Royal Danish Embassy` citeturn4view11  
- Martin Gents — `DABS VICE PRESIDENT Founder & CEO at Usekase.ai | Your Key to AI` citeturn4view11  
- Kristian Jasper — `DABS HONORARY TREASURER Managing Director at Maersk Tankers Singapore` citeturn5view2  
- Sarah Katz — `DABS COMMITTEE MEMBER Director, Sustainability & CEO We.do Advice` citeturn5view2  
- Stine Jensen — `DABS COMMITTEE MEMBER The LEGO Group, Senior Brand Relations Manager` citeturn5view2  
- Jeppe Chrestensen — `DABS COMMITTEE MEMBER Senior Manager, Digital Financial Solutions at MarTrust` citeturn5view2  
- Kadja Lorenz — `DABS COMMITTEE MEMBER Compliance Manager, Doercircle` citeturn5view3  
- Helena Due Langvad — `DABS COMMITTEE MEMBER Global Digital Marketing Development Manager at Grundfos` citeturn5view3  

## Implementation
- Build `ProfileCard` grid with photo + title + organisation + LinkedIn link.
- Keep “click picture opens LinkedIn profile” behaviour.

---

# PAGE: Our Partners (`/our-partners`)

## Page header
- H1: `Our Partners` citeturn5view4  

## Links (exact list in extract)
- singapore.um.dk citeturn5view4  
- churchsg.dk citeturn5view4  
- danes.dk citeturn5view4  
- eurocham.org.sg citeturn5view4  

## Subsection header (exact)
`Nordic Business Associations and Chambers in Singapore` citeturn5view4  

## Links (exact)
- nbas.org.sg citeturn5view4  
- fbcsg.org citeturn5view4  
- swedcham.sg citeturn5view4  

---

# PAGE: Contact (`/contact`)

## Page header
- H1: `Contact` citeturn3view7  

## Office block (exact)
`Our Office` citeturn3view7  
`Danish Business Association of Singapore` citeturn3view7  
`c/o Royal Danish Embassy` citeturn3view7  
`101 Thomson Road` citeturn3view7  
`#13-01/02 United Square` citeturn3view7  
`Singapore 307591` citeturn3view7  
`+65 9144 6272` citeturn3view7  

## Social links
- LinkedIn + Facebook icons/links citeturn3view7  

## Section heading (exact)
`Contact Us` citeturn3view7  

## Newsletter subscribe (exact copy)
`Subscribe` citeturn4view1turn4view7  
`Be the first to know about DABS events and exciting news - A great way to stay tuned in the Danish Business network` citeturn4view1turn4view7  
Button: `Sign Up` citeturn4view1turn4view7  
Confirmation: `Thank you for subscribing! Let’s stay in touch…` citeturn4view1turn4view7  
`We respect your privacy.` citeturn4view1turn4view7  

---

# PAGE: Articles of Association (`/articles`)

## Page header (exact)
- H1: `Articles` citeturn6view3  
- H2: `Articles of Association` citeturn6view3  
- `Danish Business Association of Singapore` citeturn6view3  
- `Revised in June 2021` citeturn6view3  

## Implementation
- Render the full articles content as a readable document page with:
  - left “On this page” navigation (anchors)
  - print-friendly styling

*(The current page includes the full constitution/rules text. Ensure it is fully ported.) citeturn6view4turn6view5*

---

# PAGE: Privacy Statement (PDF) (`/privacy-statement`)

## Source file
`DABS Privacy Statement Nov 2021.pdf` citeturn7view0turn8view0turn8view1  

## Implementation
- Provide a simple page that:
  - embeds the PDF
  - offers a “Download PDF” link
  - includes a short intro sentence: “This Privacy Statement sets out the basis on how DABS collects and processes personal data.”

---

## 8) What Claude Code must deliver (definition of done)

### Pixel-perfect deliverables
1. Fully responsive website matching the IA above.
2. All existing content pages ported (no dead ends).
3. Events admin login + event CRUD.
4. Clean components, accessible forms, fast load times.
5. Ability for Martin to replace copy and images progressively without rework.

### Acceptance criteria
- Menu and footer reflect the new IA and preserve legacy links.
- “Join DABS” always available.
- Events feel like a product (filters/tabs, clear CTAs).
- Committee page feels premium (faces + roles).
- Member/Sponsor paths are clear and conversion-oriented.
- Member Benefits (NEW) page includes bottom CTA question exactly as specified.

---

## 9) Notes for Claude Code (important implementation details)

- Preserve existing URLs where possible (301 redirects if URLs change).
- Reuse existing images (use the same absolute URLs for now).
- Treat “Subscribe” as a real integrated form (Mailchimp/CRM integration to be added later; for now store submissions or integrate via webhook).
- Do not invent content beyond what’s already present except:
  1) Start-up Member tier copy (provided above)
  2) Member Benefits (NEW) CTA requirement

