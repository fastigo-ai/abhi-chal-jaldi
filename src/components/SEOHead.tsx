import React from "react";
import { Helmet } from "react-helmet-async";

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  ogType?: "website" | "article" | "service";
  ogImage?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
  noindex?: boolean;
}

const DEFAULT_IMAGE = "https://www.door2fy.in/og-image.jpg";
const SITE_NAME = "Door2fy";

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  schema,
  noindex = false,
}) => {
  // Ensure canonical URL is always fully qualified
  const fullCanonical = canonicalUrl.startsWith("http")
    ? canonicalUrl
    : `https://www.door2fy.in${canonicalUrl.startsWith("/") ? "" : "/"}${canonicalUrl}`;

  const image = ogImage.startsWith("http")
    ? ogImage
    : `https://www.door2fy.in${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary HTML Meta */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Structured Data (Schema.org JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};
