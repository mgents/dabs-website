const MIGRATED_PATH = '/assets/migrated';

const PLACEHOLDERS = {
  avatar: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23e5e5e5' width='200' height='200'/%3E%3Ccircle fill='%23a3a3a3' cx='100' cy='75' r='40'/%3E%3Cellipse fill='%23a3a3a3' cx='100' cy='170' rx='60' ry='45'/%3E%3C/svg%3E`,
  event: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect fill='%23f5f5f5' width='800' height='400'/%3E%3Ctext fill='%23a3a3a3' font-family='system-ui' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EEvent Image%3C/text%3E%3C/svg%3E`,
  logo: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='80' viewBox='0 0 200 80'%3E%3Crect fill='%23f5f5f5' width='200' height='80' rx='4'/%3E%3Ctext fill='%23a3a3a3' font-family='system-ui' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ELogo%3C/text%3E%3C/svg%3E`,
  qrCode: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23ffffff' width='200' height='200'/%3E%3Crect fill='%23e5e5e5' x='10' y='10' width='180' height='180' rx='4'/%3E%3Ctext fill='%23737373' font-family='system-ui' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPayNow QR%3C/text%3E%3C/svg%3E`,
};

export type PlaceholderType = keyof typeof PLACEHOLDERS;

export function getPlaceholder(type: PlaceholderType): string {
  return PLACEHOLDERS[type];
}

export function getCommitteeMemberPhoto(slug: string): string {
  return `${MIGRATED_PATH}/committee/${slug}.png`;
}

export function getSponsorLogo(slug: string): string {
  return `${MIGRATED_PATH}/sponsors/${slug}.png`;
}

export function getPartnerLogo(slug: string): string {
  return `${MIGRATED_PATH}/partners/${slug}.png`;
}

export function getDABSLogo(): string {
  return `${MIGRATED_PATH}/branding/dabs-logo-red.png`;
}

export function getPayNowQR(): string {
  return `${MIGRATED_PATH}/branding/paynow-qr.png`;
}

export function getEventImage(imageUrl: string | null | undefined): string {
  return imageUrl || getPlaceholder('event');
}

export function getAvatarImage(imageUrl: string | null | undefined): string {
  return imageUrl || getPlaceholder('avatar');
}

export const ASSETS = {
  logo: getDABSLogo(),
  paynowQR: getPayNowQR(),
  heroVideo: `${MIGRATED_PATH}/hero/hero-video.mp4`,
  heroVideoFallback: `${MIGRATED_PATH}/hero/hero-video.mov`,
  heroBanner: `${MIGRATED_PATH}/hero/banner.jpg`,
  placeholders: PLACEHOLDERS,
} as const;
