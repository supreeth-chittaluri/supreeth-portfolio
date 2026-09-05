import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://supreethchittaluri.vercel.app"),
  title: "Supreeth Chittaluri",
  description:
    "The portfolio of Supreeth Chittaluri, a University of Michigan computer science student building backend systems, full-stack products, and applied tools.",
  keywords: [
    "Supreeth Chittaluri",
    "software engineer",
    "University of Michigan",
    "backend engineering",
    "systems programming"
  ],
  authors: [{ name: "Supreeth Chittaluri" }],
  creator: "Supreeth Chittaluri",
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
