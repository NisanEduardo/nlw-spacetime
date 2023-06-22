import { Copyright } from "@/components/Copyright";
import { EmptyMemories } from "@/components/EmptyMemories";
import { Hero } from "@/components/Hero";
import { SignIn } from "@/components/SignIn";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* {left} */}
      <div className="relative bg-[url('../assets/bg-stars.svg')] bg-cover flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10">
        {/* {blur} */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>

        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>

        <SignIn />
        <Hero />
        <Copyright />
      </div>

      {/* {right} */}
      <div className="flex flex-col p-16 bg-[url('../assets/bg-stars.svg')] bg-cover">
        <EmptyMemories />
      </div>
    </main>
  );
}
