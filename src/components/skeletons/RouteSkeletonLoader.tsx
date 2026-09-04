import React from "react";
import { useLocation } from "react-router-dom";
import { HomeSkeleton } from "./HomeSkeleton";
import { CityServiceSkeleton } from "./CityServiceSkeleton";
import { ServiceDetailsSkeleton } from "./ServiceDetailsSkeleton";
import { ServicesSkeleton } from "./ServicesSkeleton";
import { WhyUsSkeleton } from "./WhyUsSkeleton";
import { BlogListSkeleton } from "./BlogListSkeleton";
import { BlogPageSkeleton } from "./BlogPageSkeleton";
import { HowItWorksSkeleton } from "./HowItWorksSkeleton";
import { FAQsSkeleton } from "./FAQsSkeleton";
import { ContactSkeleton } from "./ContactSkeleton";
import { PolicySkeleton } from "./PolicySkeleton";
import { PartnerSkeleton } from "./PartnerSkeleton";

export const RouteSkeletonLoader: React.FC = () => {
  let pathname = "/";
  try {
    const location = useLocation();
    pathname = location.pathname;
  } catch {
    if (typeof window !== "undefined") {
      pathname = window.location.pathname;
    }
  }

  // Normalize path
  const path = pathname.toLowerCase();

  if (path === "/" || path === "") {
    return <HomeSkeleton />;
  }

  if (path.startsWith("/best-laptop-service-in")) {
    return <CityServiceSkeleton />;
  }

  if (path.startsWith("/service/")) {
    return <ServiceDetailsSkeleton />;
  }

  if (path === "/services") {
    return <ServicesSkeleton />;
  }

  if (path === "/about-us" || path === "/about" || path === "/why-us") {
    return <WhyUsSkeleton />;
  }

  if (path === "/blogs") {
    return <BlogListSkeleton />;
  }

  if (path.startsWith("/blog/")) {
    return <BlogPageSkeleton />;
  }

  if (path === "/how-it-works") {
    return <HowItWorksSkeleton />;
  }

  if (path === "/faqs") {
    return <FAQsSkeleton />;
  }

  if (path === "/contact-us" || path === "/contact") {
    return <ContactSkeleton />;
  }

  if (
    path === "/privacy-policy" ||
    path === "/refund-policy" ||
    path === "/refundable-policy" ||
    path === "/terms-and-conditions" ||
    path === "/terms" ||
    path === "/anti-discrimination-policy"
  ) {
    return <PolicySkeleton />;
  }

  if (
    path.startsWith("/partner") ||
    path === "/engineer-reviews" ||
    path === "/careers" ||
    path === "/career"
  ) {
    return <PartnerSkeleton />;
  }

  // Default fallback
  return <HomeSkeleton />;
};
