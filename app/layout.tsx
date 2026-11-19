import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karine Kluppell",
  description:
    "Contabilidade, auditoria e consultoria tributária, com atuação em recuperação de créditos e planejamento fiscal.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log("%cWEBSITE DE CONTABILIDADE%c\\nOlá, dev curioso(a). O código também faz parte da experiência.\\n\\n%cProjeto desenvolvido por Jhonathan Fernandes — JHOW.DEV%c\\nPortfólio: https://portfolio-jhow.vercel.app/\\nCódigo: https://github.com/JhonathanFernandes/projeto-contabilidade","display:inline-block;padding:8px 12px;background:#35e6a0;color:#05100a;font:700 18px monospace;border-radius:4px","color:#94a89c;font:13px/1.7 monospace","color:#7cffc4;font:700 14px monospace","color:#eef7f0;font:12px/1.7 monospace");`,
          }}
        />
      </body>
    </html>
  );
}
