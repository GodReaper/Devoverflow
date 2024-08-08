import { ClerkProvider, UserButton } from "@clerk/nextjs";
import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
          <UserButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
