import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function SocialMedia() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="icon">
          <Facebook className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Instagram className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Twitter className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
