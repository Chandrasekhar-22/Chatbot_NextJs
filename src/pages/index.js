import Image from "next/image";
import { Inter } from "next/font/google";
import { DialogCloseButton } from "@/components/component/chatbot";
import { Header } from "@/components/component/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white flex flex-col justify-between h-screen p-2 ">
      <Header />
      <div className=" ">
        <DialogCloseButton />
      </div>
    </main>
  );
}
