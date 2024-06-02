import Image from "next/image";
import Navbar from "@/components/navbar";
import Main from "@/components/main";
import Features from "@/components/features";
import Advantages from "@/components/advantages";
import Customizable from "@/components/customizable";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className=" flex flex-col lg:p-6 items-center justify-between max-w-full  space-y-24">
    <Navbar/>
    <Main/>
   <Features/> 
   <Advantages/>
   <Customizable/>
   <Footer/>
    </main>
  );
}
