import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to Pizza Paradise</h1>
      <p className="text-xl mb-8">Discover our delicious handcrafted pizzas!</p>
      <Button size="lg">Order Now</Button>
    </section>
  );
}
