import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enacless Links",
  description: "Bolsas Exclusivas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body >{children}</body>
    </html>
  );
}
