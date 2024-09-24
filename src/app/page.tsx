import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StoreInfo from "@/components/StoreInfo";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

const PizzaCarousel = dynamic(() => import("@/components/PizzaCarousel"), {
  ssr: false,
  loading: () => <p>Loading carousel...</p>,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Hero />
      <PizzaCarousel />
      <StoreInfo />
      <SocialMedia />
      <Footer />
    </main>
  );
}
