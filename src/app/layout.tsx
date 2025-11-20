// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import MainLayout from "../components/ui/MainLayout";

export const metadata = {
  title: "My App",
  description: "Next.js + Tailwind + DaisyUI (lemon theme)",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="es" data-theme="lemon">
      <body>
      <MainLayout>{children}</MainLayout>
      </body>
      </html>
  );
}
