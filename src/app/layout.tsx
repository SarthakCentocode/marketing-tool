import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< Updated upstream
      <body >
=======
      <body className={`antialiased`}>
>>>>>>> Stashed changes
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
