import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karine Kluppell | Contabilidade & Advocacia",
  description: "Soluções contábeis e jurídicas com visão estratégica, proximidade e confiança.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
