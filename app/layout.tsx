import Navbar from "@/components/Navbar";
import "./globals.css";
import { Noto_Sans_Display } from "next/font/google";

const noto = Noto_Sans_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={noto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
