import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useEncounterContext } from "@/engine/encounterEngineContext";
import { Backpack, Zap } from "lucide-react";

export default function PlayerHudRow({}: {}) {
  const { round, stamina } = useEncounterContext();
  return (
    <div className="flex w-full min-w-max gap-4 items-end">
      <div className="flex flex-col gap-2 w-16 border-r border-r-1">
        <Label className="text-muted-foreground font-extralight">Round</Label>
        <div className="flex h-10 w-10 justify-left text-center">
          <Label className="font-bold text-2xl">{round}</Label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground font-extralight">Stamina</Label>
        <Card className="flex h-10 w-80">
          <CardContent className="p-0 flex items-center justify-start gap-4 px-4 w-full h-full">
            {[...Array(stamina)].map((_, i) => (
              <Zap key={i} className="h-6 w-6"></Zap>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground font-extralight">Flasks</Label>
        <Card className="flex h-10 w-64">
          <CardContent className="flex items-center justify-center w-full h-full">
            {}
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground font-extralight">
          Trinkets
        </Label>
        <Card className="flex h-10 w-64">
          <CardContent className="flex items-center justify-center w-full h-full">
            {}
          </CardContent>
        </Card>
      </div>
      <Button variant="outline" size="icon">
        <Backpack></Backpack>
      </Button>
      <div className="flex grow"></div>
      <Button className="w-28" variant="destructive">
        End Turn
      </Button>
    </div>
  );
}
