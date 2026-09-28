import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace Courses — Learn something new",
  description:
    "Discover courses across creative, technology, and business topics with ByteSpace Courses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
