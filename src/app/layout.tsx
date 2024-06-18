import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tsubaki",
  description: "Watch KPOP music show performances with line sync lyrics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0C0D0E]">{children}</body>
    </html>
  );
}
