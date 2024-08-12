import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {


  return (
    <main className="flex h-full flex-col items-center justify-center">
     <div className="flex items-center justify-center mb-5">
        <Image
          src={'/nextauth.png'}
          width={100}
          height={100}
          alt="nextauth logo"
          className="object-cover"
          priority
          />
        <div className="text-left pl-8">
        <p className="text-6xl font-bold shadow-lg"> NextAuth </p>
        <p className="pt-3 text-xl text-zinc-400"> authentication for nextjs</p>
        </div>
      </div>
      <Button className="mt-5 rounded-lg w-36">  Get started </Button>
    </main>
  );
}
