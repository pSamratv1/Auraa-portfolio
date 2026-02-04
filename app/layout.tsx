import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Auraa Productions",
  description: "Boutique Video Production",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${raleway.variable} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
