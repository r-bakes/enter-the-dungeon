import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PlotId } from "@/data/character/enums";
import { useCharacterEngineContext } from "@/engines/characterEngineContext";

export default function Plot({ id }: { id: PlotId }) {
  const { character } = useCharacterEngineContext();
  let plotContent = character.working.agriculture.botany[id];

  let cardContent;
  if (!plotContent.seedId) {
    cardContent = (
      <Button
        variant="ghost"
        className="flex h-full w-full flex-col items-center justify-center p-4"
      >
        <CardHeader>
          <CardTitle className="text-xl text-muted-foreground">Empty</CardTitle>
          <CardDescription className="text-left text-xs text-muted-foreground">
            Click to sow
          </CardDescription>
        </CardHeader>
      </Button>
    );
  } else {
    cardContent = <div>TEST</div>;
  }

  return <Card className="flex h-20 w-full min-w-max">{cardContent}</Card>;
}
