import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova Dog Rescue Design Example",
  description: "an example website showcasing design principles",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-0 z-50 w-full text-center text-xs sm:text-base">
          *This is an example website showcasing design principles*
        </div>
        {children}
      </body>
    </html>
  );
}
