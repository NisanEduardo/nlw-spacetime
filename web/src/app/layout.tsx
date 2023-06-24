import { EmptyMemories } from "@/components/EmptyMemories";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { SignIn } from "@/components/SignIn";
import { Copyright } from "@/components/Copyright";
import "./globals.css";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";
import { cookies } from "next/headers";

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
  const isAuthenticate = cookies().has("token");

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* {left} */}
          <div className="relative bg-[url('../assets/bg-stars.svg')] bg-cover flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10">
            {/* {blur} */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>

            {/* stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>

            {isAuthenticate ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>

          {/* {right} */}
          <div className="flex flex-col p-16 bg-[url('../assets/bg-stars.svg')] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
