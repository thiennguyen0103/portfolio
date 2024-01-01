import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kira - Full-Stack Developer",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.className} h-full overflow-hidden`}>
        <div className="relative h-full">{children}</div>
      </body>
    </html>
  );
}
