import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold">Pizza Paradise</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Button variant="ghost">Home</Button>
          </li>
          <li>
            <Button variant="ghost">Menu</Button>
          </li>
          <li>
            <Button variant="ghost">About</Button>
          </li>
          <li>
            <Button variant="ghost">Contact</Button>
          </li>
        </ul>
      </nav>
      <ModeToggle />
    </header>
  );
}
