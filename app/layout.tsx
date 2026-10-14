import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Koru Restaurant Lahore | Mediterranean & Sushi in Gulberg II",
  description:
    "Koru Restaurant in Gulberg II, Lahore — Mediterranean flavours and sushi, warm dining room and relaxed courtyard. Explore the menu and enquire by phone or WhatsApp.",
  openGraph: {
    title: "Koru Restaurant Lahore | Mediterranean & Sushi in Gulberg II",
    description:
      "Mediterranean flavours and sushi in Gulberg II, Lahore. Explore the menu, see the gallery, plan a visit.",
    type: "website",
    images: [{ url: "/images/sushi-platter.jpg", width: 1600, height: 1067 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koru Restaurant Lahore | Mediterranean & Sushi",
    description:
      "Mediterranean flavours and sushi in Gulberg II, Lahore. Explore the menu and enquire.",
    images: ["/images/sushi-platter.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Verified-only structured data: no hours/geo/rating fabricated (§10).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Koru Restaurant",
    servesCuisine: ["Mediterranean", "Japanese", "Sushi"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "22/B Zahoor Elahi Road, Gulberg II",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    telephone: "+92-327-1116666",
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=22B+Zahoor+Elahi+Road+Gulberg+II+Lahore",
  };
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:text-cream focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
