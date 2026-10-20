import type { Metadata } from 'next';

export const siteOrigin = 'https://nextstudio.us.ci';
export const siteName = 'NEXT Studio';
export const organizationId = `${siteOrigin}/#organization`;

export function absoluteUrl(path = '/') {
  return new URL(path, siteOrigin).toString();
}

export function pageMetadata({ title, description, path, image = '/portfolio/identity/banner.webp' }: {
  title: string; description: string; path: string; image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', siteName, title: `${title} | ${siteName}`, description, url, images: [{ url: absoluteUrl(image), alt: `${siteName} visual identity` }] },
    twitter: { card: 'summary_large_image', title: `${title} | ${siteName}`, description, images: [absoluteUrl(image)] },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // The data is assembled from trusted, local content records only.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
