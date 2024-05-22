import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function DeckRow({ cards }: { cards: JSX.Element[] }) {
  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="flex w-full space-x-4 items-end">
        <div className="flex flex-col space-y-2">
          <Label className="text-muted-foreground font-extralight">Stamina</Label>
          <Card className="flex h-10 w-80">
            <CardContent className="flex items-center justify-center w-full h-full">
              {}
            </CardContent>
          </Card>
        </div>
        <div className="flex grow"></div>
        <Button className="w-28 h-10" variant="destructive">
          End Turn
        </Button>
      </div>
      <Card className="flex w-full h-56">
        <CardContent className="flex items-center justify-center w-full h-full">
          {}
          {cards}
          {}
        </CardContent>
      </Card>
    </div>
  );
}
