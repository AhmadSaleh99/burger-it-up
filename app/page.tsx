import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import MenuList from "@/components/MenuList";
import Organic from "@/components/Organic";
import Reservation from "@/components/Reservation";

export default function Home() {
  return (
    <main>
      <Hero />
      <Discover />
      <MenuList />
      <Info />
      <Organic />
      <Reservation />
    </main>
  );
}
