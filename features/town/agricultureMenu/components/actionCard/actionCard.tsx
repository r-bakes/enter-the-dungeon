import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ActionCard() {
  return (
    <div className="flex w-full items-center py-2">
      <Button className="h-full w-1/4">Harvest All</Button>
      <Button className="h-full w-1/4">Fertilize All</Button>
      <Button className="h-full w-1/4">Plant All</Button>
      <Button className="h-full w-1/4" variant="destructive">
        Delete All
      </Button>
    </div>
  );
}
