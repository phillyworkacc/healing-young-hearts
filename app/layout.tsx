import "@/styles/globals.css"
import "@/styles/site.css"
import type { Metadata } from "next";
import { LatoFont, OutfitFont, KarlaFont, DM_SansFont } from "./fonts";
import { ModalProvider } from "@/components/Modal/ModalContext";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.healingyounghearts.co.uk"), // update if needed
  title: {
    default: "Healing Young Hearts Ltd | Trauma-Informed Training & Consultancy",
    template: "%s | Healing Young Hearts Ltd"
  },
  description:
    "Healing Young Hearts Ltd provides trauma-informed training and consultancy for schools, colleges, and organisations. Evidence-led, neuroscience-based approaches that improve behaviour, wellbeing, and learning outcomes.",
  openGraph: {
    title: "Trauma-Informed Practice & System Change | Healing Young Hearts Ltd",
    description:
      "Evidence-led training and consultancy rooted in neuroscience, relationships, and belonging. Supporting sustainable, whole-system change across education and organisations.",
    url: "https://www.healingyounghearts.co.uk",
    siteName: "Healing Young Hearts Ltd",
    locale: "en_GB",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ModalProvider>
      <html lang="en">
        <body className={DM_SansFont.className}>
          {children}
          <Toaster richColors position="top-center" />
        </body>
      </html>
    </ModalProvider>
  );
}
