import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karine Kluppell | Contabilidade e Consultoria Tributária",
  description:
    "Contabilidade, auditoria e consultoria tributária, com atuação em recuperação de créditos e planejamento fiscal.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
