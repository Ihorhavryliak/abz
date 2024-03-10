import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";


export const metadata: Metadata = {
  title: "TEST TASK",
  description: "Description TEST TASK - APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="bg-custom-gray-400">{children}</body>
      </html>
    </StoreProvider>
  );
}
