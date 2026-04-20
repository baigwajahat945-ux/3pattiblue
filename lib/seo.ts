import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "3 Patti Blue",
  tagline: "3 Patti Blue APK Download Pakistan — Play & Win Real Money",
  description:
    "Download 3 Patti Blue APK for Android, register in minutes, claim welcome bonus, and win real money via EasyPaisa & JazzCash in Pakistan.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://3pattibluue.pk",
  locale: "en_PK",
  language: "en",
  twitterHandle: "@3PattiBluePK",
  ogImage: "/3-patti-blue.webp",
  organization: {
    name: "3 Patti Blue",
    email: "official3pattiblue@gmail.com",
  },
};

export type PageSeoProps = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function buildMetadata(props: PageSeoProps): Metadata {
  const {
    title,
    description,
    path,
    ogImage,
    noIndex = false,
    publishedAt,
    updatedAt,
    keywords,
    type = "website",
  } = props;

  const canonicalUrl = `${SITE_CONFIG.url}${path}`;
  const imageUrl = `${SITE_CONFIG.url}${ogImage ?? SITE_CONFIG.ogImage}`;
  const fullTitle =
    path === "/" ? SITE_CONFIG.tagline : `${title} | ${SITE_CONFIG.name}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(", "),
    authors: [{ name: SITE_CONFIG.organization.name }],
    creator: SITE_CONFIG.organization.name,
    publisher: SITE_CONFIG.organization.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: canonicalUrl },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: type === "article" ? "article" : "website",
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      ...(type === "article" && publishedAt
        ? { publishedTime: publishedAt, modifiedTime: updatedAt ?? publishedAt }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: SITE_CONFIG.twitterHandle,
      images: [imageUrl],
    },
  };
}
