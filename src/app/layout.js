import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sabii Gal",
  description: "Get Inspired with Sabii gal in the world of Forex",
};

export const viewport = {
  themeColor: 'black',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} box-border`}>{children}</body>
    </html>
  );
}
