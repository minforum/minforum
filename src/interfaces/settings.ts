export type extensionVariable = {
  key?: string;
  value?: string;
};

export interface settingsProp {
  id?: string;
  theme?: string;
  ui?: 'default' | 'social' | 'classic';
  domain?: string;
  language?: string | string[] | any;
  siteFavicon?: string;
  siteLogo?: string;
  siteName?: string;
  siteDescription?: string;
  homepage?: {
    bgColor?: string;
    text?: string;
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
    method?: 'smtp' | 'sendgrid' | 'awsSes' | 'zeptomail';
    port?: number;
    host: string;
    email: string;
    password: string;
    sendgrid?: {
      apiKey?: string;
    };
    awsSes: {
      accessKeyId?: string;
      secretAccessKey?: string;
      region?: string;
    };
    zeptomail?: {
      token?: string;
    };
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
  senderName?: string;
  senderEmail?: string;
  welcomeEmail?: string;
  terms?: string;
  privacy?: string;
  extensionVariables?: extensionVariable;
  payment?: {
    currency?: string;
    monthly?: number;
    subscription?: number;
    percentage?: number;
  };
  twoFactor?: boolean;
}
