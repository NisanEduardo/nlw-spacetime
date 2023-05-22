import "./globals.css";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-baiJam",
});

export const metadata = {
  title: "Nlw Space Time",
  description: "Uma cápsula do tempo criada no evento NLW",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
