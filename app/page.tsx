import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import MenuList from "@/components/MenuList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Discover />
      <MenuList />
    </main>
  );
}
