import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LeadPopup from "../components/LeadPopup";

export const metadata = {
  metadataBase: new URL("https://www.thejkinteriors.com"),
  title: {
    default: "JK Interiors - Premium Interior Design Services",
    template: "%s | JK Interiors",
  },
  description:
    "Transform your space with JK Interiors. Expert interior design services for residential and commercial spaces.",
  keywords: [
    "interior design",
    "home decor",
    "luxury interiors",
    "residential design",
    "commercial interiors",
    "interior designer",
    "Hyderabad interiors",
  ],
  authors: [{ name: "JK Interiors" }],
  openGraph: {
    type: "website",
    siteName: "JK Interiors",
    locale: "en_US",
    alternateLocale: ["hi_IN"],
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jkinteriors",
    creator: "@jkinteriors",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload hero background image — mobile gets 828px, desktop gets 2000px */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=828"
          media="(max-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
          media="(min-width: 769px)"
        />
      </head>
      <body>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-[#ECECEC]">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <LeadPopup />
      </body>
    </html>
  );
}
