import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All 50 Supported Cities matching Footer.tsx & CityService.tsx
interface CityConfig {
  name: string;
  slug: string;
  aliases?: string[];
}

const cities: CityConfig[] = [
  { name: "Agra", slug: "agra" },
  { name: "Ahmedabad", slug: "ahmedabad" },
  { name: "Aligarh", slug: "aligarh" },
  { name: "Amritsar", slug: "amritsar" },
  { name: "Bareilly", slug: "bareilly" },
  { name: "Bengaluru", slug: "bengaluru" },
  { name: "Bhagalpur", slug: "bhagalpur" },
  { name: "Bhopal", slug: "bhopal" },
  { name: "Bhubaneswar", slug: "bhubaneswar" },
  { name: "Chandigarh", slug: "chandigarh" },
  { name: "Cuttack", slug: "cuttack" },
  { name: "Dehradun", slug: "dehradun" },
  { name: "Delhi", slug: "delhi" },
  { name: "Faridabad", slug: "faridabad" },
  { name: "Gandhi Nagar", slug: "gandhi-nagar", aliases: ["gandhinagar"] },
  { name: "Ghaziabad", slug: "ghaziabad" },
  { name: "Gorakhpur", slug: "gorakhpur" },
  { name: "Greater Noida", slug: "greater-noida", aliases: ["greaternoida"] },
  { name: "Gurugram", slug: "gurugram" },
  { name: "Gwalior", slug: "gwalior" },
  { name: "Haridwar", slug: "haridwar" },
  { name: "Haldwani", slug: "haldwani" },
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Indore", slug: "indore" },
  { name: "Jabalpur", slug: "jabalpur" },
  { name: "Jaipur", slug: "jaipur" },
  { name: "Jhansi", slug: "jhansi" },
  { name: "Kanpur", slug: "kanpur" },
  { name: "Lucknow", slug: "lucknow" },
  { name: "Ludhiana", slug: "ludhiana" },
  { name: "Meerut", slug: "meerut" },
  { name: "Mohali", slug: "mohali" },
  { name: "Moradabad", slug: "moradabad" },
  { name: "Mumbai", slug: "mumbai" },
  { name: "Mysuru", slug: "mysuru" },
  { name: "Nagpur", slug: "nagpur" },
  { name: "New Delhi", slug: "new-delhi", aliases: ["newdelhi"] },
  { name: "Noida", slug: "noida" },
  { name: "Patna", slug: "patna" },
  { name: "Panchkula", slug: "panchkula" },
  { name: "Prayagraj", slug: "prayagraj" },
  { name: "Pune", slug: "pune" },
  { name: "Raipur", slug: "raipur" },
  { name: "Roorkee", slug: "roorkee" },
  { name: "Rudrapur", slug: "rudrapur" },
  { name: "Tirupati", slug: "tirupati" },
  { name: "Ujjain", slug: "ujjain" },
  { name: "Varanasi", slug: "varanasi" },
  { name: "Vijayawada", slug: "vijayawada" },
  { name: "Zirakpur", slug: "zirakpur" },
];

// All 10 Services matching src/data/services.ts
const serviceItems = [
  {
    slug: "excel-not-working",
    title: "Excel Not Working",
    shortDesc: "Quick diagnosis & solution within 5–10 minutes",
    longDesc: "Is your Microsoft Excel freezing, crashing, or failing to open? Our experts can quickly diagnose and resolve any Excel-related issues within 5-10 minutes. We handle corrupted files, plugin conflicts, and software glitches so you can get back to your work seamlessly."
  },
  {
    slug: "laptop-hanging-freezing",
    title: "Laptop Hanging / Freezing",
    shortDesc: "Performance optimization & instant fix",
    longDesc: "A hanging or freezing laptop can significantly disrupt your productivity. We provide comprehensive performance optimization, identifying rogue processes, clearing temporary files, and ensuring your system runs smoothly without unexpected interruptions."
  },
  {
    slug: "macbook-starting-slowly",
    title: "MacBook Starting Slowly",
    shortDesc: "Speed boost & system cleanup",
    longDesc: "Experiencing slow boot times on your MacBook? We offer speed-boosting services and deep system cleanups. We'll manage your startup items, optimize your disk, and resolve any underlying macOS issues to bring your MacBook's speed back to normal."
  },
  {
    slug: "macos-update-not-installing",
    title: "MacOS Update Not Installing",
    shortDesc: "Update & OS troubleshooting",
    longDesc: "Struggling with macOS updates that fail to download or install? Our technicians can troubleshoot the installation process, clear corrupted update files, and ensure your Mac gets upgraded to the latest version securely and flawlessly."
  },
  {
    slug: "not-sure-about-the-problem",
    title: "Not Sure About the Problem",
    shortDesc: "Expert diagnosis for any issue",
    longDesc: "Is your device acting up but you can't pinpoint the issue? Don't worry. Our expert technicians will conduct a full diagnostic check on your laptop or desktop to identify hardware or software failures and provide you with an effective repair plan."
  },
  {
    slug: "software-not-opening",
    title: "Software Not Opening",
    shortDesc: "Crash & compatibility fixes",
    longDesc: "When essential software refuses to open or crashes upon launch, it can bring your work to a halt. We resolve compatibility issues, reinstall problematic applications, and fix registry or file permissions to ensure your software runs smoothly."
  },
  {
    slug: "my-system-is-slow",
    title: "My System is Slow",
    shortDesc: "System speed & health optimization",
    longDesc: "If your system takes ages to load applications or switch between tasks, it's time for an optimization. We clean up junk files, remove malware, optimize system settings, and recommend hardware upgrades if necessary to breathe new life into your slow system."
  },
  {
    slug: "physical-damage",
    title: "Physical Damage",
    shortDesc: "Screen & hardware repair",
    longDesc: "Accidents happen. Whether it's a cracked screen, a broken hinge, or liquid damage, we provide professional hardware repair services. We use high-quality replacement parts to restore your laptop's physical condition and functionality."
  },
  {
    slug: "port-issue",
    title: "Port Issue",
    shortDesc: "Charging & USB port fixes",
    longDesc: "A faulty charging port or unresponsive USB ports can render your device unusable. Our technicians are skilled in repairing and replacing damaged ports, ensuring a stable connection for your chargers, peripherals, and data transfer devices."
  },
  {
    slug: "speaker-camera-issue",
    title: "Speaker / Camera Issue",
    shortDesc: "Audio & camera troubleshooting",
    longDesc: "Having trouble with video calls due to microphone, speaker, or webcam issues? We troubleshoot and repair audio-visual components, fixing driver conflicts or replacing faulty hardware so you can communicate clearly without interruptions."
  }
];

// All 15 Blogs matching src/data/blogs.ts
const blogItems = [
  {
    slug: "laptop-repair-meerut",
    title: "Laptop Repair in Meerut – Reliable and Affordable Service by Door2fy",
    metaTitle: "Laptop Repair in Meerut | Door2fy – Fast and Affordable Laptop Service at Your Doorstep",
    metaDescription: "Looking for professional laptop repair in Meerut? Door2fy offers affordable, expert, and doorstep laptop repair services for all brands. Book your service today at Door2fy.in.",
    category: "Laptop Repair",
    city: "Meerut",
    intro: "In today’s fast-paced digital world, a laptop is more than just a gadget — it’s an essential tool for work, studies, and entertainment. When your laptop stops working, lags, or faces hardware issues, it can disrupt your routine completely. If you are searching for laptop repair in Meerut, you need a service that is fast, affordable, and trustworthy. Door2fy.in offers professional doorstep laptop repair in Meerut for all brands and models.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "laptop-repair-noida",
    title: "Laptop Repair in Noida – Reliable, Affordable, and Doorstep Service by Door2fy",
    metaTitle: "Laptop Repair in Noida | Door2fy – Expert & Affordable Doorstep Laptop Service",
    metaDescription: "Need fast laptop repair in Noida? Door2fy offers professional and affordable laptop repair services at your doorstep for all major brands. Book your service online today!",
    category: "Laptop Repair",
    city: "Noida",
    intro: "Whether you use your laptop for work, study, or entertainment, it’s hard to imagine a day without it. But when your laptop starts showing problems like slow performance, broken screens, or battery failure, it can disrupt your routine completely. If you are searching for laptop repair in Noida, you need a service that is quick, affordable, and trustworthy. That’s exactly what Door2fy.in offers — professional doorstep laptop repair services across Noida.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "laptop-repair-ghaziabad",
    title: "Laptop Repair in Ghaziabad – Fast, Affordable & Reliable Services by Door2fy",
    metaTitle: "Best Laptop Repair in Ghaziabad | Door2fy Expert Laptop Services",
    metaDescription: "Looking for reliable laptop repair in Ghaziabad? Door2fy offers fast, affordable, and expert laptop repair services at your doorstep. Call now for same-day repair!",
    category: "Laptop Repair",
    city: "Ghaziabad",
    intro: "In today’s digital world, a laptop is not just a gadget—it’s an essential part of our daily routine. Whether you use it for work, study, entertainment, or managing your business, any issue with your laptop can disrupt your schedule. That’s why having a trusted laptop repair service in Ghaziabad is crucial. Door2fy is your one-stop solution for all kinds of laptop problems.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "fix-laptop-system-slow-noida",
    title: "Fix Laptop System Slow in Noida – Get Fast, Reliable Service with Door2fy",
    metaTitle: "Fix Laptop System Slow in Noida | Door2fy Laptop Speed Repair Experts",
    metaDescription: "Is your laptop running slow? Door2fy provides expert laptop repair in Noida to fix slow system performance, software errors, and hardware issues. Book a doorstep repair today!",
    category: "Laptop Repair",
    city: "Noida",
    intro: "A slow laptop can be frustrating—especially when you have urgent work, online meetings, or study deadlines. If your system is freezing, lagging, or taking forever to start up, it’s time to seek professional help. At Door2fy, we specialize in diagnosing and fixing slow laptop systems in Noida.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "lenovo-laptop-repair-near-me",
    title: "Lenovo Laptop Repair Near Me – Fast & Reliable Service by Door2fy",
    metaTitle: "Lenovo Laptop Repair Near Me | Expert Doorstep Service by Door2fy",
    metaDescription: "Looking for “Lenovo laptop repair near me”? Door2fy offers fast, reliable, and affordable Lenovo laptop repair at your doorstep. Book online for same-day service!",
    category: "Laptop Repair",
    city: "NCR",
    intro: "Your Lenovo laptop is an essential part of your daily life—whether for work, studies, or entertainment. But when it suddenly stops working, overheats, or slows down, it can disrupt everything. Searching online for “Lenovo laptop repair near me” means you’re looking for a quick, trustworthy, and affordable solution. That’s where Door2fy comes in.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "urgent-laptop-repair-10-minutes",
    title: "Urgent Laptop Repair in 10 Minutes – Fast, Reliable and Affordable Service Near You",
    metaTitle: "Urgent Laptop Repair in 10 Minutes | Fast & Reliable Service Near You",
    metaDescription: "Need urgent laptop repair? Door2fy offers fast, reliable, and affordable laptop repair in just 10 minutes. Book online for doorstep or in-store service in Noida, Delhi, Meerut & Ghaziabad.",
    category: "Laptop Repair",
    city: "NCR",
    intro: "When your laptop suddenly stops working, every minute matters. Whether you’re working from home, attending classes, or managing a business, a malfunctioning laptop can bring everything to a halt. Our urgent laptop repair in 10 minutes service ensures your device is back in action in record time.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "fix-slow-laptop-in-5-steps",
    title: "How to Fix a Slow Laptop in 5 Steps (Before the Engineer Arrives)",
    metaTitle: "How to Fix a Slow Laptop in 5 Steps | Door2fy IT Tips",
    metaDescription: "Learn 5 easy and effective ways to fix a slow laptop before the engineer arrives. Optimize performance, remove malware, and boost speed with Door2fy.",
    category: "Laptop Tips",
    city: "NCR",
    intro: "A slow laptop is one of the most frustrating tech problems — especially when you’re in the middle of important work. It takes longer to boot up, applications freeze, and even simple tasks like opening a browser can feel like a chore. In this guide, Door2fy walks you through five easy, safe, and effective ways to fix a slow laptop before the engineer arrives.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "top-7-signs-laptop-needs-repair",
    title: "Top 7 Signs Your Laptop Needs Professional Repair",
    metaTitle: "Top 7 Signs Your Laptop Needs Professional Repair | Door2fy IT Tips",
    metaDescription: "Learn the top 7 signs your laptop needs professional repair. From overheating to slow performance, Door2fy doorstep technicians can fix it all.",
    category: "Laptop Repair",
    city: "NCR",
    intro: "Your laptop is more than just a device — it’s your work partner, study tool, and entertainment hub. But even the best machines show signs of trouble over time. While minor issues can often be fixed at home, certain problems indicate it’s time to call in the experts. Here are the top seven signs your laptop needs professional repair.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "common-laptop-problems-doorstep-repair",
    title: "Top 10 Common Laptop Problems & How Doorstep Repair Services Save Time & Money",
    metaTitle: "Top Laptop Problems & Best Doorstep Repair Solutions in 2026",
    metaDescription: "Discover the most common laptop problems and how doorstep repair services fix them quickly. Save time, data, and money with professional laptop technicians at home.",
    category: "Laptop Repair",
    city: "India",
    intro: "Laptops are essential for work, study, entertainment, and business. So when a laptop suddenly stops working, it can disrupt your entire day. Small issues like slow performance or a loose charging port can quickly turn into major problems if ignored. The good news? Doorstep laptop repair services make it easy to get fast, professional repairs without visiting a service center.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "choose-doorstep-laptop-repair-service",
    title: "How to Choose the Best Doorstep Laptop Repair Service in 2026 – A Complete Guide",
    metaTitle: "How to Choose Doorstep Laptop Repair Service in 2026 | Expert Guide",
    metaDescription: "Learn how to choose reliable doorstep laptop repair services near you. Checklist, tips & benefits for screen replacement, battery issues, software problems & more.",
    category: "Laptop Repair",
    city: "India",
    intro: "Laptops are an essential part of daily life, from office work to online study and entertainment. When a laptop suddenly stops working, finding a skilled and trustworthy technician can be stressful. Doorstep laptop repair services in India are growing rapidly, offering professional technicians who repair laptops at home with convenience and transparency.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "hp-dell-laptop-repair-at-home",
    title: "HP Laptop Repair at Home & Dell Laptop Service at Home – Fast, Reliable, and Convenient",
    metaTitle: "HP Laptop Repair at Home & Dell Laptop Service at Home | Fast & Affordable Doorstep Repair",
    metaDescription: "Get HP laptop repair at home and Dell laptop service at home with Door2Fy. Fast, affordable, and professional doorstep laptop repair services.",
    category: "Laptop Repair",
    city: "All Cities",
    intro: "Laptops are essential tools for work, study, and entertainment. HP and Dell are among the most trusted brands, but like all devices, they face issues over time. Traditionally, users had to visit service centers for repairs — a process that is often inconvenient and time-consuming. With Door2Fy, you can now get fast and reliable HP laptop repair at home and Dell laptop service at home without any hassle.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "affordable-laptop-repair-at-home-low-cost",
    title: "Affordable Laptop Repair at Home – Low-Cost & Reliable Doorstep Solutions by Door2Fy",
    metaTitle: "Affordable Laptop Repair at Home | Low-Cost Doorstep Laptop Repair by Door2Fy",
    metaDescription: "Get your laptop repaired at home with affordable and low-cost services by Door2Fy. Fast, reliable, and professional doorstep laptop repair for all major brands.",
    category: "Laptop Repair",
    city: "India",
    intro: "In today’s digital age, a laptop is no longer just a device—it’s a lifeline. From working professionals and students to freelancers and home entrepreneurs, everyone depends on laptops for daily tasks. When a laptop suddenly stops working, slows down, or develops technical issues, it disrupts productivity. Door2Fy offers affordable laptop repair at home, providing low-cost, professional repair services right at your doorstep.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "preventive-maintenance-pm-activity-it-support",
    title: "What is Preventive Maintenance (PM) Activity and How Door2fy Provides It to Clients",
    metaTitle: "What is Preventive Maintenance (PM) Activity in IT? | Door2fy Proactive IT Support",
    metaDescription: "Learn what Preventive Maintenance (PM) activity is and how Door2fy provides proactive IT maintenance services to prevent system failures, improve performance, and reduce downtime.",
    category: "IT Support & Maintenance",
    city: "India",
    intro: "In today’s digital environment, waiting for systems to fail before fixing them can lead to downtime, productivity loss, and higher repair costs. That’s where Preventive Maintenance (PM) activity plays a critical role. Door2fy provides structured and professional PM activities to homes, startups, and businesses to ensure systems run smoothly without unexpected breakdowns.",
    updatedAt: "2025-12-19"
  },
  {
    slug: "laptop-repair-cost-in-delhi-2026",
    title: "Laptop Repair Cost in Delhi – 2026 Complete Price Guide | Door2fy",
    metaTitle: "Laptop Repair Cost in Delhi – 2026 Complete Price Guide | Door2fy",
    metaDescription: "Wondering about laptop repair cost in Delhi? Check 2026 updated pricing for screen replacement, battery, SSD, motherboard & more. Book doorstep repair at Door2fy.in.",
    category: "Laptop Tips",
    city: "Delhi",
    intro: "Understanding laptop repair cost in Delhi is important before making a repair decision. Whether your device has a broken screen, battery issue, performance lag, or motherboard damage, pricing depends on the laptop model and the severity of the issue. This 2026 updated guide explains estimated repair costs in Delhi so you can plan better.",
    updatedAt: "2026-01-27"
  },
  {
    slug: "why-laptops-overheat-in-delhi-summers",
    title: "Why Laptops Overheat in Delhi Summers? Causes, Solutions & Prevention Guide",
    metaTitle: "Why Laptops Overheat in Delhi Summers | Causes, Fixes & Prevention | Door2fy",
    metaDescription: "Delhi heat causing laptop overheating? Learn real causes, prevention tips, and professional solutions. Book doorstep laptop repair in Delhi at Door2fy.in.",
    category: "Laptop Tips",
    city: "Delhi",
    intro: "Delhi summers are known for extreme heat, rising well above 40°C. While we feel uncomfortable in such temperatures, electronic devices like laptops suffer even more. If your laptop becomes unusually hot, slows down, hangs frequently, or shuts off automatically during summer, overheating is likely the cause.",
    updatedAt: "2026-02-19"
  }
];

interface PageMetadata {
  path: string;
  canonicalUrl: string;
  title: string;
  description: string;
  keywords: string;
  ogType?: string;
  ogImage?: string;
  bodyHtml: string;
  schema?: any;
  isPrimarySitemapUrl?: boolean;
}

const pages: PageMetadata[] = [
  // 1. Homepage
  {
    path: "/",
    canonicalUrl: "https://www.door2fy.in/",
    title: "Doorstep Laptop Repair in Delhi NCR & Across India | Door2fy",
    description: "Door2fy provides 10-minute doorstep laptop repair, MacBook servicing, PC troubleshooting & IT support by verified engineers in Delhi NCR and 30+ cities.",
    keywords: "doorstep laptop repair Delhi, laptop repair Delhi, MacBook repair Delhi, computer service near me, laptop screen repair, IT support India, Door2fy",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Doorstep Laptop Repair in Delhi NCR & Across India - Door2fy</h1>
        <p>Door2fy is India's leading doorstep computer repair and IT support network. Our background-verified certified laptop engineers arrive at your home or office within 10 to 30 minutes in Delhi, Noida, Gurugram, Mumbai, Bengaluru, Pune, Nagpur, Hyderabad, and 50 cities across India.</p>
        <h2>Our Core Doorstep Services</h2>
        <ul>
          <li><strong>Apple MacBook Support:</strong> Screen replacement, battery repair, logic board diagnostic, and macOS restoration.</li>
          <li><strong>Windows Laptop & Desktop Repair:</strong> Dell, HP, Lenovo, ASUS, Acer, MSI motherboard fixes, RAM/SSD upgrades, and virus removal.</li>
          <li><strong>On-Site Hardware Upgrades:</strong> Blazing-fast NVMe SSD replacements, thermal paste service, and cooling fan cleaning.</li>
          <li><strong>Emergency 10-Minute Support:</strong> Instant troubleshooting for software crashes, Blue Screen of Death (BSOD), and Excel freezing.</li>
        </ul>
        <h2>Why Choose Door2fy?</h2>
        <p>With a 4.9/5 star customer rating and over 1000+ satisfied clients, Door2fy delivers 100% genuine OEM spare parts, transparent upfront pricing, and up to 90 days comprehensive warranty on all doorstep repairs.</p>
      </section>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Door2fy - Doorstep Laptop Repair & IT Support",
      "url": "https://www.door2fy.in/",
      "logo": "https://www.door2fy.in/door2fy-icon.jpg",
      "image": "https://www.door2fy.in/og-image.jpg",
      "description": "India's #1 Doorstep Laptop Repair & IT Support Network. 5-10 minute diagnostic, genuine spare parts, certified engineers.",
      "telephone": "+91-9217759006",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1000"
      }
    },
    isPrimarySitemapUrl: true
  },

  // 2. Services Page
  {
    path: "/services",
    canonicalUrl: "https://www.door2fy.in/services",
    title: "All Laptop & Tech Support Services | Door2fy",
    description: "Explore Door2fy's full range of doorstep services: MacBook repair, Windows troubleshooting, screen replacement, battery fix, RAM/SSD upgrades & IT support.",
    keywords: "laptop repair services, MacBook service, computer hardware upgrade, doorstep IT support, screen replacement, Door2fy",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Professional Engineering & Laptop Repair Services</h1>
        <p>From cracked screen replacements and dead batteries to chip-level motherboard repair and macOS optimizations, Door2fy technicians deliver quick on-site solutions across 50 cities in India.</p>
        <h2>Available Doorstep Services</h2>
        <ul>
          <li>Excel Not Working & Software Crash Fix</li>
          <li>Laptop Hanging & Freezing Repair</li>
          <li>MacBook Starting Slowly & Tune-Up</li>
          <li>MacOS Update Troubleshooting</li>
          <li>Laptop Diagnostics & Issue Inspection</li>
          <li>Software Not Opening & Compatibility Fixes</li>
          <li>System Speed & Performance Optimization</li>
          <li>Screen & Hinge Physical Damage Repair</li>
          <li>Charging Port & USB Jack Repair</li>
          <li>Speaker & Webcam Repair</li>
        </ul>
      </section>
    `,
    isPrimarySitemapUrl: true
  },

  // 3. Why Us
  {
    path: "/why-us",
    canonicalUrl: "https://www.door2fy.in/why-us",
    title: "Why Choose Door2fy? | Trusted Doorstep Laptop Repair",
    description: "Door2fy is India's #1 trusted doorstep laptop repair service. 100% background-verified engineers, 10-minute response, 90-day warranty, and transparent pricing.",
    keywords: "why choose door2fy, trusted laptop repair service, professional laptop technicians, reliable computer service India, doorstep repair experts",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Why Door2fy is India's Most Trusted Laptop Repair Service</h1>
        <p>Experience hassle-free repair right in front of your eyes at your home or office. No risky lab drop-offs or lost data. 100% verified technicians, genuine OEM spare parts, and comprehensive service warranty.</p>
      </section>
    `,
    isPrimarySitemapUrl: true
  },

  // 4. How It Works
  {
    path: "/how-it-works",
    canonicalUrl: "https://www.door2fy.in/how-it-works",
    title: "How It Works | Door2fy - Doorstep Laptop Repair in 10-30 Mins",
    description: "Learn how Door2fy works: 1. Book in 60s, 2. Certified technician assigned, 3. Fast doorstep arrival, 4. Tested & guaranteed repair with 90-day warranty.",
    keywords: "door2fy repair process, laptop repair booking, doorstep repair service, how laptop repair works",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>How Door2fy Works: Simple 4-Step Doorstep Tech Repair</h1>
        <p>Book your repair in under 60 seconds. Our verified engineer arrives with diagnostic tools and replacement parts to solve your laptop issue on the spot.</p>
        <ol>
          <li><strong>Step 1:</strong> Book your request online in 60 seconds.</li>
          <li><strong>Step 2:</strong> A certified local technician is assigned.</li>
          <li><strong>Step 3:</strong> Rapid doorstep arrival in 10–30 minutes.</li>
          <li><strong>Step 4:</strong> Live repair with warranty and transparent payment.</li>
        </ol>
      </section>
    `,
    isPrimarySitemapUrl: true
  },

  // 5. FAQs
  {
    path: "/faqs",
    canonicalUrl: "https://www.door2fy.in/faqs",
    title: "Frequently Asked Questions (FAQs) | Door2fy",
    description: "Find answers to common questions about Door2fy's doorstep laptop repair, MacBook services, pricing, warranty, response times, and technician verification.",
    keywords: "door2fy faqs, laptop repair questions, doorstep service pricing, laptop repair warranty, Door2fy",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Frequently Asked Questions About Door2fy</h1>
        <p>Learn about our 10-30 minute doorstep service, genuine spare parts guarantee, upfront diagnostic fees, and all supported laptop brands.</p>
      </section>
    `,
    isPrimarySitemapUrl: true
  },

  // 6. Contact Us
  {
    path: "/contact-us",
    canonicalUrl: "https://www.door2fy.in/contact-us",
    title: "Contact Door2fy | 10-Minute Doorstep Laptop Support",
    description: "Need instant laptop repair or IT support? Contact Door2fy for 10-minute doorstep assistance. Book an engineer online or download our mobile app.",
    keywords: "contact door2fy, laptop repair contact, IT support helpline, book laptop technician, Door2fy customer care",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Contact Door2fy Support</h1>
        <p>Need urgent laptop repair in Delhi NCR or anywhere in India? Contact our 24/7 team or book instantly through the Door2fy web portal.</p>
      </section>
    `,
    isPrimarySitemapUrl: true
  },

  // 7. Privacy Policy
  {
    path: "/privacy-policy",
    canonicalUrl: "https://www.door2fy.in/privacy-policy",
    title: "Privacy Policy | Door2fy",
    description: "Read Door2fy's Privacy Policy to understand how we collect, protect, and handle your data and privacy when using our doorstep repair services.",
    keywords: "privacy policy, Door2fy privacy, data protection",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Door2fy Privacy Policy</h1>
        <p>Your privacy and data security are our top priorities. Learn how Door2fy collects, uses, and protects your information.</p>
      </section>
    `,
    isPrimarySitemapUrl: true
  },

  // 8. Blogs Hub
  {
    path: "/blogs",
    canonicalUrl: "https://www.door2fy.in/blogs",
    title: "Latest Laptop Repair Guides & Tech Blogs | Door2fy",
    description: "Explore expert laptop repair tips, hardware troubleshooting, MacBook guides, and speed optimization articles from Door2fy technicians.",
    keywords: "laptop repair blogs, tech tips, computer troubleshooting, MacBook guides, Door2fy",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Latest Laptop Repair Guides & Tech Articles</h1>
        <p>Read expert advice from Door2fy's certified computer engineers on fixing overheating, slow performance, blue screens, and broken laptop screens.</p>
      </section>
    `,
    isPrimarySitemapUrl: true
  },

  // 9. Refund & Cancellation Policy
  {
    path: "/refund-policy",
    canonicalUrl: "https://www.door2fy.in/refund-policy",
    title: "Refund & Cancellation Policy | Door2fy",
    description: "Learn about Door2fy's transparent refund, cancellation, and warranty policy. 100% money-back guarantee if your laptop issue is not resolved.",
    keywords: "door2fy refund policy, repair warranty, cancellation terms",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Door2fy Refund & Cancellation Policy</h1>
        <p>100% service protection, up to 90-day warranty, and 3-5 day direct bank refunds.</p>
      </section>
    `,
    isPrimarySitemapUrl: true
  },

  // 12. Terms & Conditions
  {
    path: "/terms-and-conditions",
    canonicalUrl: "https://www.door2fy.in/terms-and-conditions",
    title: "Terms & Conditions | Door2fy",
    description: "Read the Terms and Conditions of service for Door2fy doorstep laptop and computer tech support services.",
    keywords: "terms and conditions, user agreement, door2fy legal",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Door2fy Terms & Conditions</h1>
        <p>Legal terms and conditions governing doorstep computer support.</p>
      </section>
    `,
    isPrimarySitemapUrl: true
  },

  // 13. Anti-Discrimination Policy
  {
    path: "/anti-discrimination-policy",
    canonicalUrl: "https://www.door2fy.in/anti-discrimination-policy",
    title: "Anti-Discrimination Policy | Door2fy",
    description: "Door2fy is committed to a safe, inclusive, and non-discriminatory environment for both customers and technician partners.",
    keywords: "anti-discrimination policy, equality, safe workplace door2fy",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Door2fy Anti-Discrimination Policy</h1>
        <p>Zero tolerance policy for discrimination across all communities and partner networks.</p>
      </section>
    `,
    isPrimarySitemapUrl: true
  },

  // 14. Partner Guidelines
  {
    path: "/partner-guidelines",
    canonicalUrl: "https://www.door2fy.in/partner-guidelines",
    title: "Service Partner Guidelines & Code of Conduct | Door2fy",
    description: "Comprehensive guidelines, ethical standards, and operational protocols for Door2fy certified technician partners across India.",
    keywords: "partner guidelines, technician code of conduct, door2fy partner standards",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Door2fy Partner Guidelines</h1>
        <p>Professional conduct, punctuality, and diagnostic integrity protocols.</p>
      </section>
    `,
    isPrimarySitemapUrl: true
  },

  // 15. Partner Benefits
  {
    path: "/partner-benefits",
    canonicalUrl: "https://www.door2fy.in/partner-benefits",
    title: "Partner Benefits | Grow Your Earnings with Door2fy",
    description: "Partner with Door2fy and earn ₹40,000 to ₹90,000+ per month. Enjoy daily payouts, free professional toolkits, nearby job orders, and free Apple training.",
    keywords: "partner benefits, technician earnings, laptop repair partner program",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Door2fy Partner Benefits & Earnings</h1>
        <p>Highest payout rates, free professional kits, and guaranteed daily job orders.</p>
      </section>
    `,
    isPrimarySitemapUrl: true
  },

  // 16. Partner Support
  {
    path: "/partner-support",
    canonicalUrl: "https://www.door2fy.in/partner-support",
    title: "Partner Support & Help Desk | Door2fy",
    description: "Dedicated 24/7 support portal for Door2fy registered laptop technician partners. Technical escalations, spare parts requests, and payout assistance.",
    keywords: "partner support, technician helpline, spare parts escalation",
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Door2fy Partner Support Helpdesk</h1>
        <p>Priority technical assistance, parts dispatch, and payout support for technicians.</p>
      </section>
    `,
    isPrimarySitemapUrl: true
  }
];

// Add all 50 City Pages + Aliases
cities.forEach((cityObj) => {
  const cityName = cityObj.name;
  const slug = cityObj.slug;

  const cityPageData: PageMetadata = {
    path: `/best-laptop-service-in/${slug}`,
    canonicalUrl: `https://www.door2fy.in/best-laptop-service-in/${slug}`,
    title: `Doorstep Laptop Repair in ${cityName} | MacBook & PC Service - Door2fy`,
    description: `Need quick laptop repair in ${cityName}? Door2fy certified engineers arrive at your doorstep in 10-30 mins. Genuine parts, 90-day warranty, 5-min diagnosis.`,
    keywords: `doorstep laptop repair ${cityName}, laptop repair ${cityName}, MacBook repair ${cityName}, computer repair ${cityName}, laptop service center ${cityName}, Door2fy ${cityName}`,
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>Doorstep Laptop Repair & Service in ${cityName}</h1>
        <p>Looking for the best doorstep laptop repair service in ${cityName}? Door2fy brings certified background-verified engineers directly to your home or office in <strong>10 to 30 minutes</strong>.</p>
        <h2>Laptop Issues We Fix in ${cityName}</h2>
        <ul>
          <li><strong>Cracked Screen & Display Replacement:</strong> OEM high-resolution panels for Apple MacBook, Dell, HP, Lenovo, ASUS, and Acer.</li>
          <li><strong>Battery Replacement & Not Charging Fix:</strong> Fast draining battery or broken DC jack repaired on the spot in ${cityName}.</li>
          <li><strong>Motherboard & Chip-Level Repair:</strong> No power, water liquid damage, and blue screen (BSOD) errors repaired by master technicians.</li>
          <li><strong>Speed Boost & SSD Upgrade:</strong> 10x speed boost with NVMe SSD and RAM installation in 15 minutes.</li>
          <li><strong>Overheating & Fan Cleaning:</strong> Deep thermal paste reapplication and cooling fan dust removal.</li>
        </ul>
        <h2>Why Choose Door2fy in ${cityName}?</h2>
        <p>We provide transparent upfront pricing, up to 90 days warranty, and 100% genuine replacement components across all localities in ${cityName}.</p>
      </section>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Door2fy - Doorstep Laptop Repair in ${cityName}`,
      "url": `https://www.door2fy.in/best-laptop-service-in/${slug}`,
      "logo": "https://www.door2fy.in/door2fy-icon.jpg",
      "image": "https://www.door2fy.in/og-image.jpg",
      "description": `Fast 10-30 minute doorstep laptop repair & IT support in ${cityName} by certified engineers. Genuine spare parts & 90-day warranty.`,
      "telephone": "+91-9217759006",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityName,
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "City",
        "name": cityName
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2480"
      }
    },
    isPrimarySitemapUrl: true
  };

  pages.push(cityPageData);

  // Generate fallback alias pages if needed (e.g. gandhinagar -> gandhi-nagar, newdelhi -> new-delhi)
  if (cityObj.aliases) {
    cityObj.aliases.forEach((alias) => {
      pages.push({
        ...cityPageData,
        path: `/best-laptop-service-in/${alias}`,
        canonicalUrl: `https://www.door2fy.in/best-laptop-service-in/${slug}`,
        isPrimarySitemapUrl: false
      });
    });
  }
});

// Add all 10 Service Pages
serviceItems.forEach((service) => {
  pages.push({
    path: `/service/${service.slug}`,
    canonicalUrl: `https://www.door2fy.in/service/${service.slug}`,
    title: `${service.title} - Doorstep Repair & Support | Door2fy`,
    description: `Get fast doorstep ${service.title.toLowerCase()} service by certified engineers in 5–10 minutes. 90-day warranty, genuine spare parts, and on-site resolution.`,
    keywords: `${service.title}, laptop repair, computer support, doorstep service, Door2fy`,
    bodyHtml: `
      <section class="seo-crawler-content">
        <h1>${service.title} - Fast Doorstep Tech Support</h1>
        <p>${service.longDesc}</p>
        <h2>Why Choose Door2fy for ${service.title}?</h2>
        <ul>
          <li>Expert technicians with years of multi-brand experience</li>
          <li>Quick 5–10 minute diagnostic check at your home or office</li>
          <li>Up to 90 days comprehensive warranty on repairs and genuine parts</li>
          <li>Transparent upfront pricing with zero hidden charges</li>
        </ul>
      </section>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "description": service.shortDesc,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Door2fy",
        "url": "https://www.door2fy.in/"
      },
      "serviceType": "Laptop & Computer Repair",
      "areaServed": "India",
      "url": `https://www.door2fy.in/service/${service.slug}`
    },
    isPrimarySitemapUrl: true
  });
});

// Add all 15 Blog Pages
blogItems.forEach((blog) => {
  pages.push({
    path: `/blog/${blog.slug}`,
    canonicalUrl: `https://www.door2fy.in/blog/${blog.slug}`,
    title: `${blog.metaTitle}`,
    description: `${blog.metaDescription}`,
    keywords: `${blog.category}, laptop repair guide, ${blog.city || "India"}, Door2fy`,
    ogType: "article",
    bodyHtml: `
      <article class="seo-crawler-content">
        <header>
          <p>${blog.category} ${blog.city ? `• ${blog.city}` : ""}</p>
          <h1>${blog.title}</h1>
          <p>Last Updated: ${blog.updatedAt}</p>
        </header>
        <p>${blog.intro}</p>
      </article>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.metaDescription,
      "dateModified": blog.updatedAt,
      "datePublished": blog.updatedAt,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.door2fy.in/blog/${blog.slug}`
      },
      "author": {
        "@type": "Organization",
        "name": "Door2fy Tech Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Door2fy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.door2fy.in/door2fy-icon.jpg"
        }
      }
    },
    isPrimarySitemapUrl: true
  });
});

// HTML Injection Helper Function
function injectMetaAndContent(templateHtml: string, page: PageMetadata): string {
  let html = templateHtml;

  // 1. Replace <title>
  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${page.title}</title>`);
  } else {
    html = html.replace("</head>", `  <title>${page.title}</title>\n</head>`);
  }

  // 2. Replace or inject meta description
  if (/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i.test(html)) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="description" content="${page.description}" />`
    );
  } else {
    html = html.replace("</head>", `  <meta name="description" content="${page.description}" />\n</head>`);
  }

  // 3. Replace or inject meta keywords
  if (/<meta\s+name="keywords"\s+content="[\s\S]*?"\s*\/?>/i.test(html)) {
    html = html.replace(
      /<meta\s+name="keywords"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="keywords" content="${page.keywords}" />`
    );
  } else {
    html = html.replace("</head>", `  <meta name="keywords" content="${page.keywords}" />\n</head>`);
  }

  // 4. Inject or replace canonical link
  const canonicalTag = `<link rel="canonical" href="${page.canonicalUrl}" />`;
  if (/<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i.test(html)) {
    html = html.replace(/<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i, canonicalTag);
  } else {
    html = html.replace("</head>", `  ${canonicalTag}\n</head>`);
  }

  // 5. OpenGraph Tags
  const ogTags = [
    { property: "og:type", content: page.ogType || "website" },
    { property: "og:site_name", content: "Door2fy" },
    { property: "og:url", content: page.canonicalUrl },
    { property: "og:title", content: page.title },
    { property: "og:description", content: page.description },
    { property: "og:image", content: page.ogImage || "https://www.door2fy.in/og-image.jpg" }
  ];

  ogTags.forEach(({ property, content }) => {
    const pattern = new RegExp(`<meta\\s+property="${property}"\\s+content="[\\s\\S]*?"\\s*\\/?>`, "i");
    const tag = `<meta property="${property}" content="${content}" />`;
    if (pattern.test(html)) {
      html = html.replace(pattern, tag);
    } else {
      html = html.replace("</head>", `  ${tag}\n</head>`);
    }
  });

  // 6. Twitter Card Tags
  const twitterTags = [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: page.canonicalUrl },
    { name: "twitter:title", content: page.title },
    { name: "twitter:description", content: page.description },
    { name: "twitter:image", content: page.ogImage || "https://www.door2fy.in/og-image.jpg" }
  ];

  twitterTags.forEach(({ name, content }) => {
    const pattern = new RegExp(`<meta\\s+name="${name}"\\s+content="[\\s\\S]*?"\\s*\\/?>`, "i");
    const tag = `<meta name="${name}" content="${content}" />`;
    if (pattern.test(html)) {
      html = html.replace(pattern, tag);
    } else {
      html = html.replace("</head>", `  ${tag}\n</head>`);
    }
  });

  // 7. Inject Structured Data (Schema.org JSON-LD)
  if (page.schema) {
    const schemaScript = `\n  <script type="application/ld+json">\n${JSON.stringify(page.schema, null, 2)}\n  </script>\n`;
    html = html.replace("</head>", `${schemaScript}</head>`);
  }

  // 8. Inject SEO Pre-rendered Crawler Content into <div id="root">
  const prerenderedRoot = `<div id="root">${page.bodyHtml}</div>`;
  if (/<div id="root">[\s\S]*?<\/div>/i.test(html)) {
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/i, prerenderedRoot);
  } else {
    html = html.replace('<div id="root"></div>', prerenderedRoot);
  }

  return html;
}

// Main generation function
function generateStaticPages() {
  const distDir = path.resolve(__dirname, "../dist");
  const publicDir = path.resolve(__dirname, "../public");

  if (!fs.existsSync(distDir)) {
    console.error("❌ Error: dist directory not found. Please run 'vite build' first.");
    process.exit(1);
  }

  const baseTemplatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(baseTemplatePath)) {
    console.error("❌ Error: dist/index.html template not found.");
    process.exit(1);
  }

  // Read pristine template
  const rawBaseHtml = fs.readFileSync(baseTemplatePath, "utf-8");

  // Clean any previously injected root content to make it a pristine template
  const pristineTemplateHtml = rawBaseHtml
    .replace(/<div id="root">[\s\S]*?<\/div>/i, '<div id="root"></div>')
    .replace(/<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");

  console.log(`🚀 Starting SEO Static Page Generator for ${pages.length} routes...`);

  let generatedCount = 0;

  pages.forEach((page) => {
    const html = injectMetaAndContent(pristineTemplateHtml, page);

    let outPath: string;
    if (page.path === "/") {
      outPath = path.join(distDir, "index.html");
    } else {
      const routePath = page.path.startsWith("/") ? page.path.slice(1) : page.path;
      const targetDir = path.join(distDir, routePath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      outPath = path.join(targetDir, "index.html");
    }

    fs.writeFileSync(outPath, html, "utf-8");
    generatedCount++;
  });

  // Generate XML Sitemap with all canonical primary URLs
  const sitemapUrls = pages
    .filter((p) => p.isPrimarySitemapUrl !== false)
    .map(
      (p) => `  <url>
    <loc>${p.canonicalUrl}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${p.path === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${p.path === "/" ? "1.0" : p.path.startsWith("/best-laptop") ? "0.9" : "0.8"}</priority>
  </url>`
    );

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf-8");
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf-8");
  }

  // Ensure robots.txt exists in dist
  const robotsTxtContent = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://www.door2fy.in/sitemap.xml
Sitemap: https://partner.door2fy.in/sitemap.xml
`;
  fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxtContent, "utf-8");
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxtContent, "utf-8");
  }

  console.log(`✅ Successfully generated ${generatedCount} static HTML pages, updated sitemap.xml (${sitemapUrls.length} URLs), and synced robots.txt!`);
}

generateStaticPages();
