import { Helmet } from 'react-helmet-async';
import { collegeInfo } from '@/src/data/collegeInfo';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
  type?: 'website' | 'article';
  includeOrganizationSchema?: boolean;
}

export function SeoHead({
  title,
  description,
  path,
  breadcrumbs,
  type = 'website',
  includeOrganizationSchema = false,
}: SeoHeadProps) {
  const origin =
    typeof window !== 'undefined' ? window.location.origin : 'https://sambhrampucollege.edu.in';
  const canonicalUrl = `${origin}${path}`;
  const fullTitle = title.includes(collegeInfo.name) ? title : `${title} | ${collegeInfo.name}`;

  const orgSchema = includeOrganizationSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: collegeInfo.name,
        description: collegeInfo.tagline,
        url: origin,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
      }
    : null;

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: `${origin}${crumb.path}`,
          })),
        }
      : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={collegeInfo.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {orgSchema && <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
}
