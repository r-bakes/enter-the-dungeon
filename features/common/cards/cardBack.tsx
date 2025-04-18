import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

export default function CardBack({
  onClick,
}: Readonly<{
  onClick: React.Dispatch<React.SetStateAction<any>>;
}>) {
  return (
    <Card className="h-44 w-36">
      <Button
        onClick={() => {}}
        className="flex h-full w-full items-start justify-start"
        variant="ghost"
      >
        <CardContent className="flex h-full w-full flex-col items-center justify-center">
          <Label className="text-xl font-extrabold">Enter</Label>
          <Label className="font-extrabold">the</Label>
          <Label className="text-xl font-extrabold">Dungeon</Label>
        </CardContent>
      </Button>
    </Card>
  );
}
