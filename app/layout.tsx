import type { Metadata } from "next";
import { Lustria } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Import the Navbar component

const lustria = Lustria({
  weight: "400",
  variable: "--font-lustria",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prototype Website",
  description: "NULL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lustria.variable} antialiased`}>
        <Navbar /> {/* Add the Navbar component here */}
        {children}
      </body>
    </html>
  );
}