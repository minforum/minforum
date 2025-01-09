export interface settingsProp {
  theme?: string;
  language?: string | string[] | any;
  siteFavicon?: string;
  siteLogo?: string;
  siteName?: string;
  siteDescription?: string;
  homepage?: {
    type?: 'color' | 'banner';
    bgColor?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  socialAccount?: {
    facebook?: string;
    google?: string;
    github?: string;
  };
  cloudflarePublicKey?: string;
  cloudflareSecretKey?: string;
  advert?: { top: string; left: string; right: string; inner: string };
  email?: {
    host: string;
    email: string;
    password: string;
  };
  point?: {
    login?: number;
    discussion?: number;
    comment?: number;
    bestAnswer?: number;
  };
  banWords?: string;
  status?: string;
  announcementText?: string;
  announcementLink?: string;
  terms?: string;
  privacy?: string;
}
