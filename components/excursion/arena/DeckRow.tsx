import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function DeckRow({ cards }: { cards: JSX.Element[] }) {
  return (
      
      <Card className="flex w-full h-56">
        <CardContent className="flex items-center justify-center w-full h-full">
          {}
          {cards}
          {}
        </CardContent>
      </Card>
  );
}
