import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoki Nine — Pusat Transaksi Digital Agen",
  description:
    "Pulsa, paket data, token PLN, PPOB, game, e-wallet dan berbagai produk digital untuk agen Hoki Nine.",
  icons: {
    icon: "https://ik.imagekit.io/hokinine/icon.png?updatedAt=1788405610630",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
